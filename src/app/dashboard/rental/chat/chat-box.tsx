"use client";

import { assertAllowedUpload } from "@/lib/uploads";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { useState, useRef, useEffect, useCallback } from "react";
import { Send, Paperclip, X } from "lucide-react";

interface Message {
  id: string;
  sender_id: string;
  message: string;
  attachments?: { file_name: string; file_path: string }[];
  created_at: string;
  sender_name?: string;
  sender_role?: string;
}

interface ChatBoxProps {
  propertyId: string;
  currentUserId: string;
  currentUserName: string;
  currentUserRole: string;
  initialMessages: Message[];
}

export function ChatBox({
  propertyId,
  currentUserId,
  currentUserName,
  currentUserRole,
  initialMessages,
}: ChatBoxProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const lastCreatedAtRef = useRef<string | undefined>(
    initialMessages[initialMessages.length - 1]?.created_at,
  );

  useEffect(() => {
    lastCreatedAtRef.current = messages[messages.length - 1]?.created_at;
  }, [messages]);

  const markMessagesRead = useCallback(async () => {
    try {
      await fetch("/api/messages/read", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ propertyId }),
      });
    } catch {
      /* silencioso */
    }
  }, [propertyId]);

  const fetchNewMessages = useCallback(async () => {
    const since = lastCreatedAtRef.current;
    const url = since
      ? `/api/messages/list?propertyId=${encodeURIComponent(propertyId)}&since=${encodeURIComponent(since)}`
      : `/api/messages/list?propertyId=${encodeURIComponent(propertyId)}`;
    try {
      const res = await fetch(url);
      if (!res.ok) return;
      const data = (await res.json()) as { messages?: Message[] };
      const incoming = data.messages ?? [];
      if (incoming.length === 0) return;
      setMessages((prev) => {
        const ids = new Set(prev.map((m) => m.id));
        const merged = [...prev];
        for (const m of incoming) {
          if (!ids.has(m.id)) merged.push(m);
        }
        return merged.sort(
          (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
        );
      });
      void markMessagesRead();
    } catch {
      /* silencioso */
    }
  }, [propertyId, markMessagesRead]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    void markMessagesRead();
  }, [markMessagesRead]);

  useEffect(() => {
    const supabase = createBrowserSupabaseClient();
    const channel = supabase
      .channel(`messages:${propertyId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `property_id=eq.${propertyId}`,
        },
        () => {
          void fetchNewMessages();
        },
      )
      .subscribe();

    return () => {
      void supabase.removeChannel(channel);
    };
  }, [propertyId, fetchNewMessages]);

  useEffect(() => {
    const interval = setInterval(() => {
      void fetchNewMessages();
    }, 30000);
    return () => clearInterval(interval);
  }, [fetchNewMessages]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const accepted: File[] = [];
    for (const f of files) {
      const check = assertAllowedUpload(f);
      if (!check.ok) {
        setError(check.error);
        continue;
      }
      accepted.push(f);
    }

    setAttachments((prev) => [...prev, ...accepted].slice(0, 3));
  };

  const removeAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  async function openAttachment(filePath: string, fileName: string) {
    setError(null);
    try {
      const response = await fetch(`/api/documents/download?filePath=${encodeURIComponent(filePath)}`);
      const data = (await response.json()) as { url?: string; error?: string };
      if (!response.ok || !data.url) {
        throw new Error(data.error || `No se pudo abrir «${fileName}»`);
      }
      window.open(data.url, "_blank", "noopener,noreferrer");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al abrir el adjunto");
    }
  }

  const handleSend = async () => {
    if (!newMessage.trim() && attachments.length === 0) return;

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("propertyId", propertyId);
      formData.append("message", newMessage);
      
      attachments.forEach((file, index) => {
        formData.append(`attachment_${index}`, file);
      });

      const response = await fetch("/api/messages/send", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al enviar mensaje");
      }

      const { message: sentMessage } = await response.json();
      
      // Añadir mensaje a la lista
      setMessages(prev => [...prev, {
        ...sentMessage,
        sender_name: currentUserName,
        sender_role: currentUserRole,
      }]);
      
      // Limpiar formulario
      setNewMessage("");
      setAttachments([]);
    } catch (err) {
      console.error("Error:", err);
      setError(err instanceof Error ? err.message : "Error al enviar mensaje");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex h-[600px] flex-col rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
      {/* Header */}
      <div className="border-b border-slate-200 p-4">
        <h3 className="font-bold text-[#1E293B]">Chat con tu Gestor</h3>
        <p className="text-xs text-[#64748B]">Comunicación directa y segura</p>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.map((msg) => {
          const isOwn = msg.sender_id === currentUserId;
          const isAdmin = msg.sender_role === "admin";
          const isTenant = msg.sender_role === "tenant";

          return (
            <div
              key={msg.id}
              className={`flex ${isOwn ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[70%] ${isOwn ? "order-2" : "order-1"}`}>
                <div className="mb-1 text-xs text-[#64748B]">
                  {isOwn ? "Tú" : isAdmin ? "Gestor" : isTenant ? "Inquilino" : msg.sender_name}
                  {" • "}
                  {new Date(msg.created_at).toLocaleTimeString("es-ES", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
                <div
                  className={`rounded-lg p-3 ${
                    isOwn
                      ? "bg-[#1A4FBF] text-white"
                      : "bg-slate-100 text-[#1E293B]"
                  }`}
                >
                  <p className="whitespace-pre-wrap text-sm">{msg.message}</p>
                  
                  {/* Attachments */}
                  {msg.attachments && msg.attachments.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {msg.attachments.map((att, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => void openAttachment(att.file_path, att.file_name)}
                          className={`flex w-full items-center gap-2 rounded p-2 text-left text-xs underline-offset-2 hover:underline ${
                            isOwn ? "bg-white/20" : "bg-white"
                          }`}
                        >
                          <Paperclip className="h-3 w-3 shrink-0" />
                          <span className="min-w-0 flex-1 truncate font-medium">{att.file_name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-slate-200 p-4">
        {error && (
          <div className="mb-2 rounded-lg bg-red-50 p-2 text-xs text-red-800">
            {error}
          </div>
        )}

        {/* Attachments preview */}
        {attachments.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-2">
            {attachments.map((file, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1 text-xs"
              >
                <span className="truncate max-w-[150px]">{file.name}</span>
                <button
                  onClick={() => removeAttachment(index)}
                  className="text-red-600 hover:text-red-700"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-end gap-2">
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escribe tu mensaje..."
            rows={2}
            className="flex-1 resize-none rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/20"
          />
          
          <label className="cursor-pointer rounded-lg border border-slate-300 p-2 text-[#64748B] transition hover:border-[#1A4FBF] hover:text-[#1A4FBF]">
            <Paperclip className="h-5 w-5" />
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="hidden"
              disabled={attachments.length >= 3}
            />
          </label>

          <button
            onClick={handleSend}
            disabled={loading || (!newMessage.trim() && attachments.length === 0)}
            className="rounded-lg bg-[#1A4FBF] p-2 text-white transition hover:bg-[#2563EB] disabled:opacity-50"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-2 text-xs text-[#64748B]">
          Presiona Enter para enviar • Shift+Enter para nueva línea
        </div>
      </div>
    </div>
  );
}

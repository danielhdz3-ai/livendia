"use client";

import { labelForPhotoSide } from "@/lib/order-doc-upload-ui";
import { ORDER_DOC_MAX_MB } from "@/lib/order-document-upload";
import { Camera, CheckCircle2, ImageIcon, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Side = "anverso" | "reverso";

type SideState = {
  file: File | null;
  preview: string | null;
};

export function MobilePhotoSidesSheet({
  open,
  docTypeLabel,
  requireBothSides,
  onClose,
  onConfirm,
}: {
  open: boolean;
  docTypeLabel: string;
  requireBothSides: boolean;
  onClose: () => void;
  onConfirm: (files: { side: Side; file: File }[]) => void;
}) {
  const anversoRef = useRef<HTMLInputElement>(null);
  const reversoRef = useRef<HTMLInputElement>(null);
  const [activeSide, setActiveSide] = useState<Side>("anverso");
  const [sides, setSides] = useState<Record<Side, SideState>>({
    anverso: { file: null, preview: null },
    reverso: { file: null, preview: null },
  });

  useEffect(() => {
    if (!open) return;
    setActiveSide("anverso");
    setSides({ anverso: { file: null, preview: null }, reverso: { file: null, preview: null } });
  }, [open]);

  useEffect(() => {
    return () => {
      Object.values(sides).forEach((s) => {
        if (s.preview) URL.revokeObjectURL(s.preview);
      });
    };
  }, [sides]);

  if (!open) return null;

  function pickSide(side: Side, file: File | null) {
    if (!file) return;
    setSides((prev) => {
      if (prev[side].preview) URL.revokeObjectURL(prev[side].preview!);
      return {
        ...prev,
        [side]: { file, preview: URL.createObjectURL(file) },
      };
    });
    if (side === "anverso" && requireBothSides) {
      setActiveSide("reverso");
    }
  }

  function handleFileChange(side: Side, list: FileList | null) {
    const file = list?.[0] ?? null;
    pickSide(side, file);
  }

  const canSubmit =
    sides.anverso.file && (requireBothSides ? sides.reverso.file : sides.anverso.file);

  function submit() {
    if (!sides.anverso.file) return;
    const payload: { side: Side; file: File }[] = [{ side: "anverso", file: sides.anverso.file }];
    if (sides.reverso.file) payload.push({ side: "reverso", file: sides.reverso.file });
    onConfirm(payload);
  }

  return (
    <div className="fixed inset-0 z-[80] lg:hidden" role="dialog" aria-modal="true" aria-labelledby="photo-sides-title">
      <button type="button" className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={onClose} aria-label="Cerrar" />
      <div className="absolute inset-x-0 bottom-0 max-h-[92vh] overflow-y-auto rounded-t-3xl bg-white shadow-2xl">
        <div className="sticky top-0 z-10 border-b border-slate-100 bg-white/95 px-4 py-4 backdrop-blur">
          <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-slate-200" />
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 id="photo-sides-title" className="text-lg font-extrabold text-[#1E293B]">
                Foto del documento
              </h2>
              <p className="mt-1 text-sm text-[#64748B]">
                {docTypeLabel}
                {requireBothSides ? " · necesitamos anverso y reverso" : " · puedes añadir ambas caras"}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-2 text-[#64748B] hover:bg-slate-100"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="space-y-4 px-4 py-4 pb-8">
          {(["anverso", "reverso"] as Side[]).map((side) => {
            const state = sides[side];
            const isActive = activeSide === side;
            const done = Boolean(state.file);

            return (
              <div
                key={side}
                className={`rounded-2xl border-2 p-4 transition ${
                  isActive ? "border-[#1A4FBF] bg-[#EFF6FF]/50" : done ? "border-emerald-200 bg-emerald-50/40" : "border-slate-200 bg-slate-50/50"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-[#64748B]">
                      {side === "anverso" ? "1 · Anverso" : "2 · Reverso"}
                    </p>
                    <p className="mt-0.5 font-bold text-[#1E293B]">{labelForPhotoSide(side)}</p>
                  </div>
                  {done ? <CheckCircle2 className="h-6 w-6 text-emerald-600" aria-hidden /> : null}
                </div>

                {state.preview ? (
                  <div className="mt-3 overflow-hidden rounded-xl ring-1 ring-slate-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={state.preview} alt={labelForPhotoSide(side)} className="max-h-40 w-full object-cover" />
                  </div>
                ) : (
                  <div className="mt-3 flex h-28 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white">
                    <ImageIcon className="h-8 w-8 text-slate-300" aria-hidden />
                  </div>
                )}

                <label
                  className="mt-3 flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#1A4FBF] px-4 text-sm font-bold text-white"
                >
                  <Camera className="h-4 w-4" aria-hidden />
                  {done ? "Cambiar foto" : "Elegir foto"}
                  <input
                    ref={side === "anverso" ? anversoRef : reversoRef}
                    type="file"
                    accept="image/*,.heic,.heif"
                    capture="environment"
                    className="sr-only"
                    onChange={(e) => {
                      handleFileChange(side, e.target.files);
                      e.target.value = "";
                    }}
                  />
                </label>
              </div>
            );
          })}

          <p className="text-center text-xs text-[#64748B]">
            Máximo {ORDER_DOC_MAX_MB} MB por foto · buena luz y sin reflejos
          </p>

          <button
            type="button"
            disabled={!canSubmit}
            onClick={submit}
            className="flex min-h-12 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#1A4FBF] to-[#2563EB] text-sm font-bold text-white shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
          >
            Subir {requireBothSides ? "anverso y reverso" : "documentación"}
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { WhatsAppLeadModal } from "@/components/whatsapp-lead-modal";
import type { WhatsAppNeedType, WhatsAppPageContext } from "@/lib/whatsapp-prefill";
import { mergeWhatsAppContext, resolveWhatsAppPageContext } from "@/lib/whatsapp-prefill";
import { usePathname } from "next/navigation";

type OpenLeadModalOptions = {
  placement: string;
  serviceLabel?: string;
  needType?: WhatsAppNeedType;
  city?: string;
};

type WhatsAppLeadContextValue = {
  openLeadModal: (options: OpenLeadModalOptions) => void;
  closeLeadModal: () => void;
  pageContext: WhatsAppPageContext;
};

const WhatsAppLeadContext = createContext<WhatsAppLeadContextValue | null>(null);

export function WhatsAppLeadProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? "/";
  const pageContext = useMemo(() => resolveWhatsAppPageContext(pathname), [pathname]);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("whatsapp_modal");
  const [modalContext, setModalContext] = useState<WhatsAppPageContext>(pageContext);

  const openLeadModal = useCallback(
    (options: OpenLeadModalOptions) => {
      setPlacement(options.placement);
      setModalContext(
        mergeWhatsAppContext(pathname, {
          serviceLabel: options.serviceLabel,
          needType: options.needType,
          city: options.city,
        }),
      );
      setOpen(true);
    },
    [pathname],
  );

  const closeLeadModal = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ openLeadModal, closeLeadModal, pageContext }),
    [openLeadModal, closeLeadModal, pageContext],
  );

  return (
    <WhatsAppLeadContext.Provider value={value}>
      {children}
      <WhatsAppLeadModal
        open={open}
        onClose={closeLeadModal}
        context={modalContext}
        placement={placement}
      />
    </WhatsAppLeadContext.Provider>
  );
}

export function useWhatsAppLead(): WhatsAppLeadContextValue {
  const ctx = useContext(WhatsAppLeadContext);
  if (!ctx) {
    throw new Error("useWhatsAppLead debe usarse dentro de WhatsAppLeadProvider");
  }
  return ctx;
}

export function useWhatsAppLeadOptional(): WhatsAppLeadContextValue | null {
  return useContext(WhatsAppLeadContext);
}

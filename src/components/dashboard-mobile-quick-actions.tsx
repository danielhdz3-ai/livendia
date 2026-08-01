import Link from "next/link";
import { BUSINESS_EMAIL, getWhatsAppHref } from "@/lib/business-nap";
import { Mail, MessageCircle, ShoppingBag, Upload } from "lucide-react";

export function DashboardMobileQuickActions({
  uploadHref,
}: {
  /** Enlace al expediente con docs pendientes, o lista de pedidos. */
  uploadHref: string;
}) {
  const waHref = getWhatsAppHref("Hola, necesito ayuda con mi expediente en Livendia.");
  const mailHref = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent("Documentación expediente Livendia")}`;

  const actions = [
    {
      href: uploadHref,
      label: "Subir docs",
      sub: "Panel",
      icon: Upload,
      className: "bg-[#1A4FBF] text-white ring-[#1A4FBF]/30",
      iconClass: "text-white",
    },
    {
      href: waHref,
      label: "WhatsApp",
      sub: "Gestor",
      icon: MessageCircle,
      className: "bg-[#DCFCE7] text-[#166534] ring-emerald-200",
      iconClass: "text-[#25D366]",
      external: true,
    },
    {
      href: mailHref,
      label: "Email",
      sub: "info@",
      icon: Mail,
      className: "bg-[#EFF6FF] text-[#1A4FBF] ring-blue-100",
      iconClass: "text-[#1A4FBF]",
    },
    {
      href: "/dashboard/servicios",
      label: "Contratar",
      sub: "Servicios",
      icon: ShoppingBag,
      className: "bg-violet-50 text-violet-900 ring-violet-100",
      iconClass: "text-violet-600",
    },
  ] as const;

  return (
    <section className="mb-6 lg:hidden" aria-label="Accesos rápidos">
      <h3 className="text-sm font-bold text-[#1E293B]">Accesos rápidos</h3>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {actions.map((action) => {
          const Icon = action.icon;
          const inner = (
            <>
              <Icon className={`h-5 w-5 ${action.iconClass}`} aria-hidden />
              <span className="mt-2 block text-[11px] font-bold leading-tight">{action.label}</span>
              <span className="mt-0.5 block text-[10px] opacity-80">{action.sub}</span>
            </>
          );
          const className = `flex min-h-[4.75rem] flex-col items-center justify-center rounded-2xl p-2 text-center shadow-sm ring-1 transition active:scale-[0.98] ${action.className}`;

          if ("external" in action && action.external) {
            return (
              <a
                key={action.label}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-placement="dashboard_quick_whatsapp"
                className={className}
              >
                {inner}
              </a>
            );
          }

          return (
            <Link key={action.label} href={action.href} className={className}>
              {inner}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

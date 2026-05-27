# Eventos dataLayer (GTM-NCDNCRMH → GA4)

La web envía estos eventos personalizados. En [Google Tag Manager](https://tagmanager.google.com/) crea **Triggers** de tipo *Custom Event* y etiquetas GA4.

| Evento `dataLayer` | Cuándo | Sugerencia GA4 |
|--------------------|--------|----------------|
| `whatsapp_click` | Clic en enlace `wa.me` | `generate_lead` o evento custom |
| `begin_checkout` | Antes de redirigir a Stripe | `begin_checkout` |
| `purchase` | Página `/gracias?session_id=…` | `purchase` |
| `generate_lead` | Formulario contacto enviado OK | `generate_lead` |

## Parámetros útiles

- `whatsapp_click`: `placement` (ej. `fab`, `footer_whatsapp`, `para_propietarios_hero_whatsapp`)
- `begin_checkout`: `value`, `currency`, `items[]`
- `purchase`: `transaction_id`, `value`, `items[]`
- UTM: se guardan en `sessionStorage` y en metadata de Stripe (`utm_source`, …)

## URLs de campaña (código)

Ver `src/lib/campaign-links.ts` — copiar en anuncios Google / posts GBP.

## Verificación

1. Extensión *Tag Assistant* o GTM Preview.
2. Navegar: clic WhatsApp → evento `whatsapp_click`.
3. Contratar (test) → `begin_checkout` → tras pago `/gracias` → `purchase`.

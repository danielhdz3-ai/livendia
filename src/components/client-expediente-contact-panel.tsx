import { ExpedienteDocChannels } from "@/components/expediente-doc-channels";

type ClientExpedienteContactPanelProps = {
  serviceName: string;
  orderId: string;
};

export function ClientExpedienteContactPanel({ serviceName, orderId }: ClientExpedienteContactPanelProps) {
  return (
    <ExpedienteDocChannels
      serviceName={serviceName}
      orderId={orderId}
      platformHref="#documentos"
      variant="grid"
      theme="light"
    />
  );
}

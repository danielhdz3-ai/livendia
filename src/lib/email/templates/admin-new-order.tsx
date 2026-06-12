import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type Props = {
  serviceName: string;
  orderId: string;
  clientEmail: string;
  clientName: string;
  clientPhone: string;
  totalLabel: string;
  paidAtLabel: string;
  adminOrderUrl: string;
};

export function AdminNewOrderEmail({
  serviceName,
  orderId,
  clientEmail,
  clientName,
  clientPhone,
  totalLabel,
  paidAtLabel,
  adminOrderUrl,
}: Props) {
  return (
    <Html>
      <Head />
      <Preview>
        Nuevo pedido: {serviceName} — {totalLabel}
      </Preview>
      <Body style={body}>
        <Container style={card}>
          <Section style={inner}>
            <Heading style={h1}>Nuevo pedido pagado</Heading>
            <Text style={p}>
              <strong>Servicio:</strong> {serviceName}
            </Text>
            <Text style={p}>
              <strong>Importe:</strong> {totalLabel}
            </Text>
            <Text style={p}>
              <strong>Fecha de pago:</strong> {paidAtLabel}
            </Text>
            <Text style={sectionTitle}>Cliente</Text>
            <Text style={p}>
              <strong>Nombre:</strong> {clientName}
            </Text>
            <Text style={p}>
              <strong>Email:</strong> {clientEmail}
            </Text>
            <Text style={p}>
              <strong>Teléfono:</strong> {clientPhone}
            </Text>
            <Text style={meta}>Pedido: {orderId}</Text>
            <Button style={button} href={adminOrderUrl}>
              Ver en admin
            </Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  backgroundColor: "#f1f5f9",
  fontFamily: 'ui-sans-serif, system-ui, "Segoe UI", sans-serif',
  padding: "24px 0",
};

const card = {
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  maxWidth: "560px",
  margin: "0 auto",
  border: "1px solid #e2e8f0",
};

const inner = { padding: "24px" };
const h1 = { color: "#1e293b", fontSize: "20px", margin: "0 0 16px" };
const sectionTitle = {
  color: "#1e293b",
  fontSize: "14px",
  fontWeight: 700 as const,
  margin: "16px 0 8px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.04em",
};
const p = { color: "#475569", fontSize: "15px", lineHeight: "1.5", margin: "0 0 8px" };
const meta = { color: "#94a3b8", fontSize: "12px", margin: "12px 0 16px" };

const button = {
  backgroundColor: "#0f172a",
  color: "#ffffff",
  padding: "12px 20px",
  borderRadius: "8px",
  textDecoration: "none",
  display: "inline-block",
  fontWeight: 600 as const,
};

export default AdminNewOrderEmail;

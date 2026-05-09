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
  customerName: string;
  serviceName: string;
  orderId: string;
  dashboardUrl: string;
};

export function OrderConfirmedEmail({
  customerName,
  serviceName,
  orderId,
  dashboardUrl,
}: Props) {
  return (
    <Html>
      <Head />
      <Preview>Pedido confirmado — {serviceName}</Preview>
      <Body style={body}>
        <Container style={card}>
          <Section style={hero}>
            <Text style={heroTitle}>Livendia</Text>
          </Section>
          <Section style={inner}>
            <Heading style={h1}>Tu pedido está confirmado</Heading>
            <Text style={p}>Hola {customerName || "cliente"},</Text>
            <Text style={p}>
              Hemos registrado correctamente el pago de <strong>{serviceName}</strong>.
            </Text>
            <Text style={meta}>Referencia interna: {orderId}</Text>
            <Text style={p}>
              Entra en tu panel para ver el estado del expediente y subir la documentación que
              necesitemos.
            </Text>
            <Button style={button} href={dashboardUrl}>
              Ir al panel
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
  overflow: "hidden" as const,
  maxWidth: "560px",
  margin: "0 auto",
  border: "1px solid #e2e8f0",
};

const hero = { backgroundColor: "#1a4fbf", padding: "20px 24px" };
const heroTitle = { color: "#ffffff", fontSize: "18px", fontWeight: 700 as const, margin: 0 };

const inner = { padding: "24px" };
const h1 = { color: "#1e293b", fontSize: "22px", margin: "0 0 16px" };
const p = { color: "#475569", fontSize: "15px", lineHeight: "1.55", margin: "0 0 12px" };
const meta = { color: "#94a3b8", fontSize: "12px", margin: "0 0 16px" };

const button = {
  backgroundColor: "#1a4fbf",
  color: "#ffffff",
  padding: "12px 24px",
  borderRadius: "999px",
  textDecoration: "none",
  display: "inline-block",
  fontWeight: 600 as const,
  marginTop: "8px",
};

export default OrderConfirmedEmail;

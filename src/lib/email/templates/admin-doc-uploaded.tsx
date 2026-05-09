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
  fileName: string;
  docTypeLabel: string;
  orderId: string;
  clientEmail: string;
  adminOrderUrl: string;
};

export function AdminDocUploadedEmail({
  fileName,
  docTypeLabel,
  orderId,
  clientEmail,
  adminOrderUrl,
}: Props) {
  return (
    <Html>
      <Head />
      <Preview>Nuevo documento: {fileName}</Preview>
      <Body style={body}>
        <Container style={card}>
          <Section style={inner}>
            <Heading style={h1}>Documentación subida</Heading>
            <Text style={p}>
              El cliente <strong>{clientEmail}</strong> ha subido un archivo en el pedido{" "}
              <strong>{orderId}</strong>.
            </Text>
            <Text style={p}>
              <strong>Archivo:</strong> {fileName}
              <br />
              <strong>Tipo:</strong> {docTypeLabel}
            </Text>
            <Button style={button} href={adminOrderUrl}>
              Revisar pedido
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
const p = { color: "#475569", fontSize: "15px", lineHeight: "1.5", margin: "0 0 12px" };

const button = {
  backgroundColor: "#0f172a",
  color: "#ffffff",
  padding: "12px 20px",
  borderRadius: "8px",
  textDecoration: "none",
  display: "inline-block",
  fontWeight: 600 as const,
  marginTop: "8px",
};

export default AdminDocUploadedEmail;

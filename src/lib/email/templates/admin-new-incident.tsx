import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface AdminNewIncidentEmailProps {
  incidentTitle: string;
  incidentId: string;
  propertyAddress: string;
  clientEmail: string;
  priority: string;
  adminIncidentUrl: string;
}

export default function AdminNewIncidentEmail({
  incidentTitle = "Fuga de agua en baño",
  incidentId = "abc123",
  propertyAddress = "Calle Example 123",
  clientEmail = "cliente@example.com",
  priority = "Alta",
  adminIncidentUrl = "https://livendia.com/admin/incidencias/abc123",
}: AdminNewIncidentEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nueva incidencia: {incidentTitle}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>🚨 Nueva Incidencia</Heading>

          <Text style={text}>
            Se ha creado una nueva incidencia que requiere tu atención:
          </Text>

          <Section style={box}>
            <Text style={detailLabel}>Título:</Text>
            <Text style={detailValue}>{incidentTitle}</Text>

            <Text style={detailLabel}>Prioridad:</Text>
            <Text style={detailValue}>{priority}</Text>

            <Text style={detailLabel}>Propiedad:</Text>
            <Text style={detailValue}>{propertyAddress}</Text>

            <Text style={detailLabel}>Cliente:</Text>
            <Text style={detailValue}>{clientEmail}</Text>

            <Text style={detailLabel}>ID Incidencia:</Text>
            <Text style={detailValue}>{incidentId}</Text>
          </Section>

          <Section style={buttonSection}>
            <Link href={adminIncidentUrl} style={button}>
              Ver Incidencia
            </Link>
          </Section>

          <Text style={footer}>
            Este es un email automático. No responder.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const h1 = {
  color: "#1e293b",
  fontSize: "24px",
  fontWeight: "700",
  margin: "40px 0",
  padding: "0 40px",
};

const text = {
  color: "#475569",
  fontSize: "16px",
  lineHeight: "26px",
  padding: "0 40px",
};

const box = {
  backgroundColor: "#f8fafc",
  borderRadius: "8px",
  margin: "24px 40px",
  padding: "24px",
};

const detailLabel = {
  color: "#64748b",
  fontSize: "12px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  marginBottom: "4px",
  marginTop: "16px",
};

const detailValue = {
  color: "#1e293b",
  fontSize: "16px",
  fontWeight: "500",
  marginTop: "0",
};

const buttonSection = {
  padding: "0 40px",
  marginTop: "32px",
};

const button = {
  backgroundColor: "#1A4FBF",
  borderRadius: "8px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px 20px",
};

const footer = {
  color: "#94a3b8",
  fontSize: "12px",
  lineHeight: "20px",
  margin: "32px 40px 0",
};

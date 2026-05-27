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

interface IncidentStatusUpdatedEmailProps {
  customerName: string;
  incidentTitle: string;
  newStatus: string;
  estimatedCost?: number;
  approvedBudget?: number;
  incidentUrl: string;
}

export default function IncidentStatusUpdatedEmail({
  customerName = "Cliente",
  incidentTitle = "Fuga de agua en baño",
  newStatus = "En Proceso",
  estimatedCost,
  approvedBudget,
  incidentUrl = "https://livendia.com/dashboard/rental/incidencias/abc123",
}: IncidentStatusUpdatedEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Actualización de incidencia: {incidentTitle}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Actualización de Incidencia</Heading>

          <Text style={text}>Hola {customerName},</Text>

          <Text style={text}>
            Tu incidencia <strong>&quot;{incidentTitle}&quot;</strong> ha sido actualizada:
          </Text>

          <Section style={box}>
            <Text style={detailLabel}>Nuevo Estado:</Text>
            <Text style={detailValue}>{newStatus}</Text>

            {estimatedCost && (
              <>
                <Text style={detailLabel}>Coste Estimado:</Text>
                <Text style={detailValue}>{estimatedCost.toFixed(2)} €</Text>
              </>
            )}

            {approvedBudget && (
              <>
                <Text style={detailLabel}>Presupuesto Aprobado:</Text>
                <Text style={detailValue}>{approvedBudget.toFixed(2)} €</Text>
              </>
            )}
          </Section>

          <Section style={buttonSection}>
            <Link href={incidentUrl} style={button}>
              Ver Detalles
            </Link>
          </Section>

          <Text style={footer}>
            Gestión de Alquiler • Livendia
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
  marginBottom: "12px",
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

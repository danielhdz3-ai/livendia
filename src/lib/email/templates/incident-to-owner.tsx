import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface IncidentToOwnerEmailProps {
  ownerName: string;
  incidentTitle: string;
  incidentDescription: string;
  priority: string;
  propertyAddress: string;
  incidentId: string;
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://livendia.com";

export default function IncidentToOwnerEmail({
  ownerName = "Propietario",
  incidentTitle = "Fuga de agua en el baño",
  incidentDescription = "Se ha detectado una fuga de agua en el grifo del baño principal",
  priority = "Media",
  propertyAddress = "Calle Ejemplo 123, Madrid",
  incidentId = "123",
}: IncidentToOwnerEmailProps) {
  const priorityColors: Record<string, string> = {
    Baja: "#10B981",
    Media: "#F59E0B",
    Alta: "#EF4444",
    Urgente: "#DC2626",
  };

  const priorityColor = priorityColors[priority] || "#F59E0B";

  return (
    <Html>
      <Head />
      <Preview>Nueva incidencia reportada en {propertyAddress}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>🔧 Nueva Incidencia Reportada</Heading>
          
          <Text style={text}>Hola {ownerName},</Text>
          
          <Text style={text}>
            Te informamos que tu gestor de Livendia ha reportado una incidencia en tu propiedad:
          </Text>

          <Section style={incidentBox}>
            <Text style={incidentTitleStyle}>{incidentTitle}</Text>
            <Text style={{...label, marginBottom: "8px"}}>
              <strong>Prioridad:</strong>{" "}
              <span style={{color: priorityColor, fontWeight: "bold"}}>{priority}</span>
            </Text>
            <Text style={label}>
              <strong>Dirección:</strong> {propertyAddress}
            </Text>
            <Hr style={hr} />
            <Text style={description}>{incidentDescription}</Text>
            <Hr style={hr} />
            <Text style={{...text, fontSize: "12px", color: "#6B7280", marginTop: "12px"}}>
              💡 Las fotos de la incidencia se enviarán por email o WhatsApp
            </Text>
          </Section>

          <Section style={buttonContainer}>
            <Link
              style={button}
              href={`${baseUrl}/dashboard/rental/incidencias/${incidentId}`}
            >
              Ver Detalles de la Incidencia
            </Link>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            Este correo ha sido enviado automáticamente por tu gestor de Livendia.
            <br />
            Si necesitas contactar con tu gestor, puedes usar el{" "}
            <Link href={`${baseUrl}/dashboard/rental/chat`} style={link}>
              chat del panel
            </Link>.
          </Text>

          <Text style={footer}>
            © {new Date().getFullYear()} Livendia - Administración de alquileres
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#F3F4F6",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  padding: "20px",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "600px",
  borderRadius: "8px",
};

const h1 = {
  color: "#1E293B",
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
};

const text = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "24px",
  marginBottom: "16px",
};

const incidentBox = {
  backgroundColor: "#FEF3C7",
  border: "2px solid #F59E0B",
  borderRadius: "8px",
  padding: "20px",
  marginTop: "24px",
  marginBottom: "24px",
};

const incidentTitleStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#1E293B",
  marginBottom: "12px",
  marginTop: "0",
};

const label = {
  fontSize: "14px",
  color: "#4B5563",
  marginBottom: "4px",
  marginTop: "0",
};

const description = {
  fontSize: "15px",
  color: "#1F2937",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "12px",
  whiteSpace: "pre-wrap" as const,
};

const hr = {
  borderColor: "#E5E7EB",
  margin: "16px 0",
};

const buttonContainer = {
  textAlign: "center" as const,
  marginTop: "32px",
  marginBottom: "32px",
};

const button = {
  backgroundColor: "#1A4FBF",
  borderRadius: "6px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "14px 28px",
};

const footer = {
  color: "#6B7280",
  fontSize: "14px",
  lineHeight: "20px",
  textAlign: "center" as const,
  marginTop: "32px",
};

const link = {
  color: "#1A4FBF",
  textDecoration: "underline",
};

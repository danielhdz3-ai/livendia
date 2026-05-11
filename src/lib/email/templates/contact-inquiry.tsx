import { Body, Container, Head, Heading, Html, Preview, Section, Text } from "@react-email/components";

type Props = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  submittedAt: string;
};

export function ContactInquiryEmail({ name, email, phone, message, submittedAt }: Props) {
  return (
    <Html>
      <Head />
      <Preview>Consulta web: {name}</Preview>
      <Body style={body}>
        <Container style={card}>
          <Section style={inner}>
            <Heading style={h1}>Nueva consulta (web)</Heading>
            <Text style={p}>
              <strong>Nombre:</strong> {name}
            </Text>
            <Text style={p}>
              <strong>Email:</strong> {email}
            </Text>
            {phone ? (
              <Text style={p}>
                <strong>Teléfono:</strong> {phone}
              </Text>
            ) : null}
            <Text style={meta}>{submittedAt}</Text>
            <Text style={label}>Mensaje</Text>
            <Text style={pre}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const body = { backgroundColor: "#f1f5f9", fontFamily: "sans-serif" };
const card = { margin: "0 auto", padding: "24px 0" };
const inner = { backgroundColor: "#fff", borderRadius: "12px", padding: "28px" };
const h1 = { fontSize: "20px", color: "#1e293b", margin: "0 0 16px" };
const p = { fontSize: "15px", color: "#334155", margin: "0 0 10px", lineHeight: "1.5" };
const meta = { fontSize: "12px", color: "#94a3b8", margin: "0 0 20px" };
const label = { fontSize: "13px", fontWeight: 600, color: "#475569", margin: "0 0 8px" };
const pre = {
  fontSize: "14px",
  color: "#1e293b",
  whiteSpace: "pre-wrap" as const,
  lineHeight: 1.6,
  margin: 0,
};

export default ContactInquiryEmail;

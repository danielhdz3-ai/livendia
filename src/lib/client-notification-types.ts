export type ClientNotificationItem = {
  id: string;
  kind: string;
  title: string;
  message: string | null;
  href: string | null;
  orderId: string | null;
  readAt: string | null;
  createdAt: string;
};

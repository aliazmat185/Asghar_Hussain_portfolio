import { contact } from "@/data/site";

/** Builds a wa.me link with an optional prefilled, URL-encoded message. */
export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${contact.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function serviceInquiryMessage(serviceName: string): string {
  return `Hello M Asghar Hussain, I'm interested in ${serviceName}. Could we discuss my requirements?`;
}

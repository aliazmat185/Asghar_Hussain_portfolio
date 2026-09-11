import { WhatsAppIcon } from "@/components/ui/icons";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface WhatsAppLinkProps {
  message?: string;
  children: React.ReactNode;
  className?: string;
}

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-dark transition-colors hover:bg-accent/90";

export default function WhatsAppLink({
  message,
  children,
  className = "",
}: WhatsAppLinkProps) {
  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${className}`}
    >
      <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
      {children}
    </a>
  );
}

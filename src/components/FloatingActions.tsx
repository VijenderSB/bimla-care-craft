import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi, I would like to book an appointment at Bimla Devi Hospital.")}`}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-success text-success-foreground shadow-elevated hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:${SITE.phoneTel}`}
        aria-label="Call Bimla Devi Hospital"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-emergency text-emergency-foreground shadow-elevated hover:scale-105 transition-transform"
      >
        <span className="absolute inset-0 rounded-full bg-emergency animate-ping opacity-60" aria-hidden="true" />
        <span className="absolute inset-0 rounded-full bg-emergency animate-emergency-pulse opacity-40" aria-hidden="true" />
        <Phone className="relative h-6 w-6" />
      </a>
    </div>
  );
}

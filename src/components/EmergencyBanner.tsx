import { Phone, Siren } from "lucide-react";
import { SITE } from "@/lib/site";

export function EmergencyBanner() {
  return (
    <section aria-label="Emergency contact" className="bg-emergency text-emergency-foreground">
      <div className="container-prose flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
        <div className="flex items-center gap-3 text-center md:text-left">
          <Siren className="h-8 w-8 shrink-0" />
          <div>
            <p className="font-display text-lg font-bold">24×7 Emergency Services Available</p>
            <p className="text-sm opacity-95">Doctor-led emergency room with ICU, OT and ambulance support.</p>
          </div>
        </div>
        <a
          href={`tel:${SITE.phoneTel}`}
          className="inline-flex items-center gap-2 rounded-lg bg-emergency-foreground px-5 py-3 font-semibold text-emergency hover:opacity-95"
        >
          <Phone className="h-5 w-5" /> Call Emergency: {SITE.phone}
        </a>
      </div>
    </section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Siren, HeartPulse, Activity, Truck, Stethoscope, Clock } from "lucide-react";
import emergencyImg from "@/assets/emergency.jpg";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/emergency")({
  head: () => ({
    meta: [
      { title: "24×7 Emergency Hospital in Delhi — Bimla Devi Hospital, Mayur Vihar" },
      { name: "description", content: "Best emergency hospital near Mayur Vihar — 24×7 emergency room, ICU, modular OT, trauma care and ambulance support. Call 011 4188 7777 immediately." },
      { property: "og:title", content: "24×7 Emergency & ICU — Bimla Devi Hospital, Delhi" },
      { property: "og:description", content: "Round-the-clock doctor-led emergency room with ICU & OT on the same campus." },
      { property: "og:image", content: emergencyImg },
    ],
  }),
  component: EmergencyPage,
});

function EmergencyPage() {
  return (
    <div>
      <section className="bg-emergency text-emergency-foreground">
        <div className="container-prose grid gap-6 py-10 md:grid-cols-[2fr_1fr] md:items-center md:py-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emergency-foreground/15 px-3 py-1 text-xs font-semibold">
              <Siren className="h-3.5 w-3.5" /> 24 × 7 — Always Open
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">Emergency? Call us now.</h1>
            <p className="mt-3 max-w-2xl opacity-95">
              When every minute matters, our doctor-led emergency room is staffed round the clock — with ICU,
              modular OT, lab and imaging on the same campus for immediate intervention.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`tel:${SITE.phoneTel}`} className="inline-flex items-center gap-2 rounded-lg bg-emergency-foreground px-6 py-4 text-lg font-bold text-emergency hover:opacity-95">
                <Phone className="h-6 w-6" /> {SITE.phone}
              </a>
              <a href={SITE.address.mapUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-lg border border-emergency-foreground/40 px-5 py-4 font-semibold hover:bg-emergency-foreground/10">
                Get Directions
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-emergency-foreground/20 shadow-elevated">
            <img src={emergencyImg} alt="Hospital emergency entrance at night" loading="lazy" width={1280} height={720} className="w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-prose">
          <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">Emergency capabilities</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Capability icon={Clock} title="Round-the-clock cover">
              Emergency room staffed 24×7 by trained doctors and nurses — including weekends and public holidays.
            </Capability>
            <Capability icon={HeartPulse} title="ICU & Critical Care">
              Multi-para monitors, ventilators and intensivist-led care for medical and post-surgical patients.
            </Capability>
            <Capability icon={Stethoscope} title="On-site lab & imaging">
              ECG, X-ray and pathology on the same campus — faster diagnosis, faster treatment.
            </Capability>
            <Capability icon={Activity} title="Trauma readiness">
              Modular OT and orthopaedic / surgical teams on call for fractures, accidents and surgical emergencies.
            </Capability>
            <Capability icon={Truck} title="Ambulance support">
              Coordination for patient pick-up and inter-hospital transfer when needed.
            </Capability>
            <Capability icon={Siren} title="Cashless emergency admission">
              Pre-authorisation can begin while treatment starts — no waiting, no upfront payment hassles.
            </Capability>
          </div>
        </div>
      </section>

      <section className="bg-primary-soft py-12 md:py-16">
        <div className="container-prose grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">When should you come to the emergency?</h2>
            <ul className="mt-5 space-y-2 text-foreground">
              <li>• Chest pain, breathlessness, suspected heart attack or stroke</li>
              <li>• Major injury, road accident, fractures or heavy bleeding</li>
              <li>• Sudden severe abdominal pain</li>
              <li>• High fever with confusion or fits</li>
              <li>• Pregnancy emergencies — labour, bleeding, reduced foetal movement</li>
              <li>• Any sudden change in consciousness</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-primary p-8 text-primary-foreground shadow-card">
            <h3 className="font-display text-xl font-bold">Don't wait. Call ahead.</h3>
            <p className="mt-2 text-sm opacity-90">Calling on the way lets our team prepare for your arrival and start treatment faster.</p>
            <a href={`tel:${SITE.phoneTel}`} className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-5 py-3 font-bold text-primary hover:opacity-95">
              <Phone className="h-5 w-5" /> {SITE.phone}
            </a>
            <p className="mt-4 text-xs opacity-80">
              Address: {SITE.address.line1}, {SITE.address.line2}
            </p>
            <Link to="/contact" className="mt-3 inline-block text-sm underline opacity-90 hover:opacity-100">Or book a planned appointment →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Capability({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-emergency/10 text-emergency"><Icon className="h-6 w-6" /></div>
      <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{children}</p>
    </div>
  );
}

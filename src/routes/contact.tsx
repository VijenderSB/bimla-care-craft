import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, Send, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SITE, SPECIALITIES } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book Appointment | Bimla Devi Hospital" },
      { name: "description", content: "Book an appointment at Bimla Devi Hospital, Mayur Vihar Delhi. Call 011 4188 7777 or send a request — our care team will confirm your slot quickly." },
      { property: "og:title", content: "Contact & Book Appointment | Bimla Devi Hospital" },
      { property: "og:description", content: "Book an appointment, request a callback or visit us in Mayur Vihar Phase II, Delhi." },
      { property: "og:url", content: `${SITE.origin}/contact` },
    ],
    links: [{ rel: "canonical", href: `${SITE.origin}/contact` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Bimla Devi Hospital",
          url: `${SITE.origin}/contact`,
          mainEntity: {
            "@type": "Hospital",
            name: "Bimla Devi Hospital",
            telephone: `+91-${SITE.phoneTel}`,
            email: SITE.email,
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <PageHero
        eyebrow="Contact Us"
        title="Book an appointment or request a callback"
        description="Our care team is just a call, message or form away. We'll confirm your slot quickly — and help you with insurance, directions and pre-visit instructions."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="py-12 md:py-16">
        <div className="container-prose grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
            <h2 className="font-display text-2xl font-bold text-foreground">Appointment request</h2>
            <p className="mt-1 text-sm text-muted-foreground">Fill in the form and our team will get back within working hours.</p>

            {submitted ? (
              <div className="mt-8 flex flex-col items-center gap-3 rounded-xl bg-success/10 p-8 text-center text-success-foreground">
                <CheckCircle2 className="h-12 w-12 text-success" />
                <h3 className="font-display text-xl font-semibold text-foreground">Thank you!</h3>
                <p className="text-muted-foreground">Your request has been received. We'll call you back shortly. For urgent care, please call <a href={`tel:${SITE.phoneTel}`} className="font-semibold text-primary underline">{SITE.phone}</a>.</p>
              </div>
            ) : (
              <form
                className="mt-6 grid gap-4 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <Field label="Full name" required>
                  <input required type="text" name="name" className="input" placeholder="Your name" />
                </Field>
                <Field label="Phone number" required>
                  <input required type="tel" name="phone" pattern="[0-9+\s\-]{7,}" className="input" placeholder="+91 9XXXXXXXXX" />
                </Field>
                <Field label="Email">
                  <input type="email" name="email" className="input" placeholder="you@example.com" />
                </Field>
                <Field label="Speciality">
                  <select name="speciality" className="input">
                    <option value="">Select a speciality</option>
                    {SPECIALITIES.map((s) => <option key={s.slug}>{s.name}</option>)}
                  </select>
                </Field>
                <Field label="Preferred date">
                  <input type="date" name="date" className="input" />
                </Field>
                <Field label="Preferred time">
                  <select name="time" className="input">
                    <option>Morning (9 AM – 12 PM)</option>
                    <option>Afternoon (12 PM – 4 PM)</option>
                    <option>Evening (4 PM – 8 PM)</option>
                  </select>
                </Field>
                <Field label="Briefly describe your concern" className="sm:col-span-2">
                  <textarea name="message" rows={4} className="input" placeholder="Symptoms, duration, any prior treatment…" />
                </Field>
                <div className="sm:col-span-2 flex flex-wrap gap-3">
                  <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-soft hover:opacity-95">
                    <Send className="h-5 w-5" /> Request Appointment
                  </button>
                  <a href={`tel:${SITE.phoneTel}`} className="inline-flex items-center gap-2 rounded-lg border border-primary px-6 py-3 font-semibold text-primary hover:bg-primary-soft">
                    <Phone className="h-5 w-5" /> Call instead
                  </a>
                </div>
                <p className="sm:col-span-2 text-xs text-muted-foreground">
                  By submitting, you agree to be contacted by our team about your appointment. For emergencies, please call directly.
                </p>
              </form>
            )}
          </div>

          <aside className="space-y-4">
            <ContactCard icon={Phone} title="Call Us" highlight>
              <a href={`tel:${SITE.phoneTel}`} className="font-display text-xl font-bold hover:underline">{SITE.phone}</a>
              <p className="text-sm opacity-90">Available 24×7 for emergencies</p>
            </ContactCard>
            <ContactCard icon={MessageCircle} title="WhatsApp">
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener" className="font-semibold text-success hover:underline">
                Chat with us on WhatsApp
              </a>
            </ContactCard>
            <ContactCard icon={Mail} title="Email">
              <a href={`mailto:${SITE.email}`} className="text-foreground hover:underline">{SITE.email}</a>
            </ContactCard>
            <ContactCard icon={MapPin} title="Visit Us">
              <p className="text-foreground">{SITE.address.line1}, {SITE.address.line2}</p>
              <a href={SITE.address.mapUrl} target="_blank" rel="noopener" className="mt-2 inline-block text-sm font-semibold text-primary hover:underline">Open in Google Maps →</a>
            </ContactCard>
            <ContactCard icon={Clock} title="Hours">
              <p className="text-sm text-foreground"><strong>Emergency:</strong> {SITE.hours.emergency}</p>
              <p className="text-sm text-foreground"><strong>OPD:</strong> {SITE.hours.opd}</p>
            </ContactCard>
          </aside>
        </div>
      </section>

      <section>
        <div className="container-prose pb-16">
          <div className="overflow-hidden rounded-2xl border border-border shadow-card">
            <iframe
              title="Bimla Devi Hospital location"
              src="https://www.google.com/maps?q=Bimla+Devi+Hospital+Mayur+Vihar+Delhi&output=embed"
              className="h-96 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid var(--input);
          background: var(--background);
          padding: 0.75rem 0.875rem;
          font-size: 0.875rem;
          color: var(--foreground);
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .input:focus { border-color: var(--primary); box-shadow: 0 0 0 3px color-mix(in oklab, var(--primary) 18%, transparent); }
      `}</style>
    </div>
  );
}

function Field({ label, children, required, className = "" }: { label: string; children: React.ReactNode; required?: boolean; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-semibold text-foreground">
        {label} {required && <span className="text-emergency">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function ContactCard({ icon: Icon, title, children, highlight }: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode; highlight?: boolean }) {
  return (
    <div className={`rounded-2xl border border-border p-5 shadow-soft ${highlight ? "bg-primary text-primary-foreground" : "bg-card"}`}>
      <div className="flex items-center gap-3">
        <div className={`grid h-10 w-10 place-items-center rounded-lg ${highlight ? "bg-primary-foreground/15" : "bg-primary-soft text-primary"}`}>
          <Icon className="h-5 w-5" />
        </div>
        <h3 className={`font-display text-base font-semibold ${highlight ? "" : "text-foreground"}`}>{title}</h3>
      </div>
      <div className="mt-3 text-sm">{children}</div>
    </div>
  );
}

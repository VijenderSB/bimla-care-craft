import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone, ShieldCheck, HeartPulse, Stethoscope, Baby, Bone, Brain, Ear,
  Activity, Scissors, Star, MapPin, BadgeCheck, Clock, Award, Users,
} from "lucide-react";
import heroImg from "@/assets/hero-hospital.jpg";
import maternityImg from "@/assets/maternity.jpg";
import icuImg from "@/assets/facility-icu.jpg";
import otImg from "@/assets/facility-ot.jpg";
import { CTAButtons } from "@/components/CTAButtons";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import {
  SITE, STATS, SPECIALITIES, TREATMENTS, DOCTORS, INSURERS, TESTIMONIALS, FAQS_HOME,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bimla Devi Hospital — Affordable Multi-Speciality Hospital in Mayur Vihar, Delhi" },
      { name: "description", content: "Trusted multi-speciality hospital in Delhi with 24×7 emergency, ICU, modular OT, gynaecology, paediatrics, surgery and cashless mediclaim. Book your appointment today." },
      { property: "og:title", content: "Bimla Devi Hospital — Affordable Healthcare for Every Family" },
      { property: "og:description", content: "Multi-speciality hospital in Mayur Vihar, Delhi. ICU, 24×7 emergency, cashless mediclaim and trusted doctors." },
      { property: "og:image", content: "https://bimladevi.hospital/wp-content/uploads/2026/03/Bimla-Devi-Hospital-Excellence-in-Healthcare-1024x1024.webp" },
      { property: "twitter:image", content: "https://bimladevi.hospital/wp-content/uploads/2026/03/Bimla-Devi-Hospital-Excellence-in-Healthcare-1024x1024.webp" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS_HOME.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "gynaecology-obstetrics": HeartPulse,
  "paediatrics": Baby,
  "general-surgery": Scissors,
  "orthopaedics": Bone,
  "general-medicine": Stethoscope,
  "ent": Ear,
  "nephrology": Activity,
  "psychiatry-psychology": Brain,
  "dental": ShieldCheck,
  "urology": Activity,
};

function HomePage() {
  const featuredDoctors = DOCTORS.slice(0, 4);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Bright modern hospital lobby at Bimla Devi Hospital"
            className="h-full w-full object-cover"
            width={1600}
            height={1024}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" />
        </div>
        <div className="container-prose grid gap-10 py-16 md:grid-cols-2 md:py-24">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
              <BadgeCheck className="h-3.5 w-3.5" /> Trusted in East Delhi since decades
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground text-balance md:text-6xl">
              Affordable & Trusted Healthcare for{" "}
              <span className="text-primary">Every Family</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground text-pretty">
              Multi-speciality hospital in Mayur Vihar, Delhi with ICU, modular OT,
              expert consultants and 24×7 emergency care — backed by cashless mediclaim.
            </p>
            <div className="mt-7"><CTAButtons /></div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-background/60 p-3 text-center backdrop-blur">
                  <div className="font-display text-xl font-bold text-primary">{s.value}</div>
                  <div className="mt-1 text-[11px] leading-tight text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block" aria-hidden="true">
            <div className="relative h-full">
              <div className="absolute -bottom-4 -left-4 rounded-2xl bg-primary p-5 text-primary-foreground shadow-elevated">
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6" />
                  <div>
                    <p className="text-xs opacity-90">Emergency 24×7</p>
                    <a href={`tel:${SITE.phoneTel}`} className="font-display text-2xl font-bold">{SITE.phone}</a>
                  </div>
                </div>
              </div>
              <div className="absolute right-2 top-4 rounded-2xl bg-background/95 p-4 shadow-card border border-border">
                <div className="flex items-center gap-2 text-trust">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-1 text-sm font-semibold text-foreground">4.8 / 5</p>
                <p className="text-xs text-muted-foreground">Patient rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS STRIP */}
      <section className="border-y border-border bg-primary text-primary-foreground">
        <div className="container-prose grid grid-cols-2 gap-px bg-primary-foreground/10 md:grid-cols-4">
          {[
            { icon: Clock, label: "24×7 Emergency Services" },
            { icon: HeartPulse, label: "ICU & Critical Care" },
            { icon: Scissors, label: "Modular Operation Theatre" },
            { icon: ShieldCheck, label: "Cashless Mediclaim" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-3 bg-primary px-4 py-5 text-center">
              <Icon className="h-5 w-5 shrink-0" />
              <span className="text-sm font-semibold md:text-base">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SPECIALITIES */}
      <section className="py-16 md:py-20">
        <div className="container-prose">
          <SectionHeader
            eyebrow="Our Specialities"
            title="Comprehensive care across every major speciality"
            description="From newborn care to complex surgery, our experienced consultants and modern infrastructure cover the full spectrum of family healthcare."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SPECIALITIES.map((s) => {
              const Icon = ICONS[s.slug] ?? Stethoscope;
              return (
                <Link
                  key={s.slug}
                  to="/specialities/$slug"
                  params={{ slug: s.slug }}
                  className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-card"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{s.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.short}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-primary group-hover:underline">
                    Learn more →
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Link to="/specialities" className="inline-flex items-center gap-2 rounded-lg border border-primary px-5 py-3 font-semibold text-primary hover:bg-primary-soft">
              View all specialities
            </Link>
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container-prose">
          <SectionHeader
            eyebrow="Key Treatments"
            title="Trusted treatments — at affordable prices"
            description="Our most-requested procedures, performed safely in modern theatres with cashless insurance support."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TREATMENTS.map((t) => (
              <Link
                key={t.slug}
                to="/treatments/$slug"
                params={{ slug: t.slug }}
                className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary">
                  {t.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.short}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-primary">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTORS PREVIEW */}
      <section className="py-16 md:py-20">
        <div className="container-prose">
          <SectionHeader
            eyebrow="Meet Our Doctors"
            title="Experienced consultants who put patients first"
            description="Our senior team brings decades of combined experience across all major specialities."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredDoctors.map((d) => (
              <Link
                key={d.slug}
                to="/doctors/$slug"
                params={{ slug: d.slug }}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <div className="aspect-[4/5] overflow-hidden bg-primary-soft">
                  {d.image ? (
                    <img src={d.image} alt={d.name} loading="lazy" className="h-full w-full object-cover transition-transform group-hover:scale-105" width={768} height={896} />
                  ) : (
                    <div className="grid h-full place-items-center text-primary"><Users className="h-12 w-12" /></div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-semibold text-foreground">{d.name}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{d.qualification}</p>
                  <p className="mt-1 text-sm font-medium text-primary">{d.designation}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{d.experience} • {d.speciality}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/doctors" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-95">
              View all doctors
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-primary-soft py-16 md:py-20">
        <div className="container-prose grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Why Choose Bimla Devi Hospital"
              title="Quality care that's actually affordable"
              align="left"
            />
            <ul className="mt-8 space-y-4">
              {[
                { icon: BadgeCheck, title: "Transparent, Affordable Pricing", body: "No hidden charges. Clear estimates upfront, even for surgery." },
                { icon: Award, title: "Experienced Consultants", body: "Senior doctors across all major specialities with 10–40+ years of practice." },
                { icon: Activity, title: "Modern Infrastructure", body: "Modular OT, ICU, in-house lab and digital imaging — under one roof." },
                { icon: HeartPulse, title: "Patient-Centric Care", body: "Compassionate nursing, family counselling and clean, comfortable wards." },
                { icon: ShieldCheck, title: "Cashless Insurance Accepted", body: "Empanelled with all major TPAs and insurers for hassle-free admission." },
              ].map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex gap-4 rounded-xl bg-background p-4 shadow-soft">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{title}</h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <FacilityCard img={icuImg} title="ICU & Critical Care" />
            <FacilityCard img={otImg} title="Modular Operation Theatre" />
            <FacilityCard img={maternityImg} title="Maternity & Newborn" />
            <FacilityCard img={heroImg} title="Comfortable, Clean Wards" />
          </div>
        </div>
      </section>

      {/* INSURANCE */}
      <section className="py-16 md:py-20">
        <div className="container-prose">
          <SectionHeader
            eyebrow="Cashless Mediclaim"
            title="Empanelled with leading insurers & TPAs"
            description="Get treated without paying upfront. We coordinate directly with your TPA so you can focus on recovery."
          />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {INSURERS.map((name) => (
              <div key={name} className="rounded-xl border border-border bg-card px-4 py-4 text-center text-sm font-semibold text-foreground shadow-soft">
                {name}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/cashless" className="inline-flex items-center gap-2 rounded-lg bg-success px-5 py-3 font-semibold text-success-foreground hover:opacity-95">
              <ShieldCheck className="h-5 w-5" /> Check insurance eligibility
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container-prose">
          <SectionHeader
            eyebrow="Patient Stories"
            title="What families say about us"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex gap-1 text-trust">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-3 text-foreground text-pretty">"{t.quote}"</blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-semibold text-foreground">{t.name}</span>
                  <span className="text-muted-foreground"> • {t.relation}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCY BANNER */}
      <EmergencyBanner />

      {/* FAQS */}
      <section className="py-16 md:py-20">
        <div className="container-prose max-w-3xl">
          <SectionHeader eyebrow="FAQs" title="Common questions, answered" />
          <div className="mt-8 space-y-3">
            {FAQS_HOME.map((f) => (
              <details key={f.q} className="group rounded-xl border border-border bg-card p-5 open:shadow-soft">
                <summary className="cursor-pointer list-none font-display font-semibold text-foreground marker:hidden">
                  <span className="flex items-center justify-between gap-2">
                    {f.q}
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border text-primary group-open:rotate-45 transition-transform">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-primary-soft py-14">
        <div className="container-prose grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">Visit us in Mayur Vihar</h2>
            <p className="mt-3 text-muted-foreground">{SITE.address.line1}, {SITE.address.line2}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={SITE.address.mapUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-95">
                <MapPin className="h-5 w-5" /> Get Directions
              </a>
              <a href={`tel:${SITE.phoneTel}`} className="inline-flex items-center gap-2 rounded-lg border border-primary px-5 py-3 font-semibold text-primary hover:bg-background">
                <Phone className="h-5 w-5" /> {SITE.phone}
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-card">
            <iframe
              title="Bimla Devi Hospital location"
              src="https://www.google.com/maps?q=Bimla+Devi+Hospital+Mayur+Vihar+Delhi&output=embed"
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeader({
  eyebrow, title, description, align = "center",
}: { eyebrow?: string; title: string; description?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>}
      <h2 className="mt-2 font-display text-3xl font-bold text-foreground text-balance md:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-base text-muted-foreground text-pretty md:text-lg">{description}</p>}
    </div>
  );
}

function FacilityCard({ img, title }: { img: string; title: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border shadow-soft">
      <img src={img} alt={title} loading="lazy" className="aspect-[4/3] h-full w-full object-cover transition-transform group-hover:scale-105" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-3 text-primary-foreground">
        <p className="text-sm font-semibold">{title}</p>
      </div>
    </div>
  );
}

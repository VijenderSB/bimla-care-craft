import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2, Calendar, Phone, Stethoscope } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SPECIALITIES, DOCTORS, SITE } from "@/lib/site";

export const Route = createFileRoute("/specialities/$slug")({
  loader: ({ params }) => {
    const speciality = SPECIALITIES.find((s) => s.slug === params.slug);
    if (!speciality) throw notFound();
    const doctors = DOCTORS.filter((d) => d.speciality === speciality.name);
    return { speciality, doctors };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.speciality;
    if (!s) return { meta: [{ title: "Speciality not found — Bimla Devi Hospital" }] };
    const title = `${s.name} in Delhi | Bimla Devi Hospital`;
    const desc = `${s.name} at Bimla Devi Hospital, Mayur Vihar, Delhi. ${s.short} Cashless mediclaim accepted. Senior consultants, modern infrastructure.`.slice(0, 158);
    const faqs = [
      { q: `Do you have experienced doctors for ${s.name.toLowerCase()}?`, a: `Yes — Bimla Devi Hospital has senior consultants in ${s.name.toLowerCase()} with years of clinical experience.` },
      { q: "Is cashless mediclaim available?", a: "Yes, we are empanelled with all major TPAs and insurance companies for cashless treatment." },
      { q: "How do I book an appointment?", a: `Call ${SITE.phone}, send a WhatsApp message, or use our online appointment form.` },
    ];
    const url = `${SITE.origin}/specialities/${s.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalSpecialty",
            name: s.name,
            description: s.description,
            url,
            providedBy: { "@type": "Hospital", name: "Bimla Devi Hospital", url: SITE.origin },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE.origin },
              { "@type": "ListItem", position: 2, name: "Specialities", item: `${SITE.origin}/specialities` },
              { "@type": "ListItem", position: 3, name: s.name, item: url },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-prose py-20 text-center">
      <h1 className="font-display text-3xl font-bold">Speciality not found</h1>
      <Link to="/specialities" className="mt-6 inline-block text-primary underline">View all specialities</Link>
    </div>
  ),
  component: SpecialityPage,
});

function SpecialityPage() {
  const { speciality: s, doctors } = Route.useLoaderData();

  const faqs = [
    { q: `Do you have experienced doctors for ${s.name.toLowerCase()}?`, a: `Yes — Bimla Devi Hospital has senior consultants in ${s.name.toLowerCase()} with years of clinical experience.` },
    { q: "Is cashless mediclaim available?", a: "Yes, we are empanelled with all major TPAs and insurance companies for cashless treatment." },
    { q: "How do I book an appointment?", a: `Call ${SITE.phone}, send a WhatsApp message, or use our online appointment form.` },
  ];

  return (
    <div>
      <PageHero
        eyebrow="Speciality"
        title={`${s.name} in Mayur Vihar, Delhi`}
        description={s.description}
        crumbs={[{ label: "Specialities", to: "/specialities" }, { label: s.name }]}
      />

      <section className="py-12 md:py-16">
        <div className="container-prose grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-10">
            <Block title="Conditions we treat">
              <ul className="grid gap-2 sm:grid-cols-2">
                {s.conditions.map((c: string) => (
                  <li key={c} className="flex items-start gap-2 text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> {c}
                  </li>
                ))}
              </ul>
            </Block>
            <Block title="Treatments offered">
              <ul className="grid gap-2 sm:grid-cols-2">
                {s.treatments.map((t: string) => (
                  <li key={t} className="flex items-start gap-2 text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" /> {t}
                  </li>
                ))}
              </ul>
            </Block>
            <Block title={`Why choose Bimla Devi Hospital for ${s.name}?`}>
              <ul className="space-y-3">
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary" /><span><strong className="text-foreground">Experienced consultants</strong> — senior doctors with deep specialty experience.</span></li>
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary" /><span><strong className="text-foreground">Affordable & transparent pricing</strong> — clear estimates, no hidden charges.</span></li>
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary" /><span><strong className="text-foreground">Cashless mediclaim</strong> — empanelled with all major insurers.</span></li>
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary" /><span><strong className="text-foreground">Modern infrastructure</strong> — modular OT, ICU, in-house diagnostics.</span></li>
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary" /><span><strong className="text-foreground">24×7 emergency</strong> — round-the-clock cover with rapid escalation.</span></li>
              </ul>
            </Block>

            {doctors.length > 0 && (
              <Block title={`Our ${s.name} consultants`}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {doctors.map((d: typeof doctors[number]) => (
                    <Link key={d.slug} to="/doctors/$slug" params={{ slug: d.slug }} className="flex gap-3 rounded-xl border border-border bg-card p-3 hover:border-primary">
                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-primary-soft">
                        {d.image ? <img src={d.image} alt={d.name} className="h-full w-full object-cover" /> : <div className="grid h-full place-items-center text-primary"><Stethoscope className="h-6 w-6"/></div>}
                      </div>
                      <div>
                        <p className="font-display font-semibold text-foreground">{d.name}</p>
                        <p className="text-xs text-muted-foreground">{d.qualification}</p>
                        <p className="text-xs text-primary">{d.experience}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </Block>
            )}

            <Block title="Frequently asked questions">
              <div className="space-y-3">
                {faqs.map((f) => (
                  <details key={f.q} className="group rounded-xl border border-border bg-background p-4">
                    <summary className="cursor-pointer list-none font-semibold text-foreground marker:hidden">
                      <span className="flex items-center justify-between gap-2">{f.q}<span className="text-primary group-open:rotate-45 transition-transform">+</span></span>
                    </summary>
                    <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                  </details>
                ))}
              </div>
            </Block>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-primary p-6 text-primary-foreground shadow-card">
              <h3 className="font-display text-xl font-bold">Book {s.name} consultation</h3>
              <p className="mt-2 text-sm opacity-90">Speak to our care team — same-day appointments often available.</p>
              <div className="mt-5 flex flex-col gap-2">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-foreground px-4 py-3 font-semibold text-primary hover:opacity-95">
                  <Calendar className="h-5 w-5" /> Book Appointment
                </Link>
                <a href={`tel:${SITE.phoneTel}`} className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/40 px-4 py-3 font-semibold hover:bg-primary-foreground/10">
                  <Phone className="h-5 w-5" /> {SITE.phone}
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="font-display text-base font-semibold text-foreground">Cashless Mediclaim</h3>
              <p className="mt-2 text-sm text-muted-foreground">Empanelled with leading TPAs and insurers — get treated without paying upfront.</p>
              <Link to="/cashless" className="mt-3 inline-block text-sm font-semibold text-primary hover:underline">Check eligibility →</Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-bold text-foreground">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

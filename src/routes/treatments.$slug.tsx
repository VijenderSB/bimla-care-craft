import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Calendar,
  Phone,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ListChecks,
  Stethoscope,
  ClipboardList,
  AlertTriangle,
  BedDouble,
  Syringe,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { TREATMENTS, SPECIALITIES, SITE, type Treatment } from "@/lib/site";

export const Route = createFileRoute("/treatments/$slug")({
  loader: ({ params }) => {
    const treatment = TREATMENTS.find((t) => t.slug === params.slug);
    if (!treatment) throw notFound();
    const speciality = SPECIALITIES.find((s) => s.slug === treatment.speciality);
    const related = TREATMENTS.filter(
      (t) => t.speciality === treatment.speciality && t.slug !== treatment.slug,
    ).slice(0, 4);
    return { treatment, speciality, related };
  },
  head: ({ loaderData }) => {
    const t = loaderData?.treatment;
    if (!t) return { meta: [{ title: "Treatment not found — Bimla Devi Hospital" }] };
    const title = `${t.name} in Delhi — Cost, Recovery & Care | Bimla Devi Hospital`;
    const desc = `${t.name} at Bimla Devi Hospital, Mayur Vihar, Delhi — ${t.short} Cashless mediclaim accepted. Speak to our team today.`;
    const url = `${SITE.origin}/treatments/${t.slug}`;
    const procedureSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      name: t.name,
      description: t.body,
      url,
      bodyLocation: t.speciality,
      preparation: t.preparation?.join(". "),
      followup: t.recovery,
      howPerformed: t.procedure?.join(". "),
      ...(t.anaesthesia ? { procedureType: t.anaesthesia } : {}),
    };
    const faqSchema = t.faqs && t.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: t.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.origin },
        { "@type": "ListItem", position: 2, name: "Treatments", item: `${SITE.origin}/treatments` },
        { "@type": "ListItem", position: 3, name: t.name, item: url },
      ],
    };
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(procedureSchema) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
        ...(faqSchema ? [{ type: "application/ld+json", children: JSON.stringify(faqSchema) }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-prose py-20 text-center">
      <h1 className="font-display text-3xl font-bold">Treatment not found</h1>
      <Link to="/treatments" className="mt-6 inline-block text-primary underline">
        View all treatments
      </Link>
    </div>
  ),
  component: TreatmentPage,
});

function TreatmentPage() {
  const { treatment: t, speciality, related } = Route.useLoaderData();

  return (
    <div>
      <PageHero
        eyebrow="Treatment"
        title={t.name}
        description={t.short}
        crumbs={[{ label: "Treatments", to: "/treatments" }, { label: t.name }]}
      />

      {/* Quick fact strip */}
      {(t.stay || t.duration || t.anaesthesia || t.costFrom) && (
        <section className="border-b border-border bg-muted/30 py-6">
          <div className="container-prose grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {t.stay && <Fact icon={BedDouble} label="Hospital stay" value={t.stay} />}
            {t.duration && <Fact icon={Clock} label="Procedure time" value={t.duration} />}
            {t.anaesthesia && <Fact icon={Syringe} label="Anaesthesia" value={t.anaesthesia} />}
            {t.costFrom && <Fact icon={ShieldCheck} label="Cost / Insurance" value={t.costFrom} />}
          </div>
        </section>
      )}

      <section className="py-12 md:py-16">
        <div className="container-prose grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-10">
            <Block title="About this treatment">
              <p className="text-muted-foreground leading-relaxed">{t.body}</p>
            </Block>

            {t.whoNeedsIt && t.whoNeedsIt.length > 0 && (
              <Block title="Who needs this treatment" icon={ListChecks}>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {t.whoNeedsIt.map((w: string) => (
                    <li key={w} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {w}
                    </li>
                  ))}
                </ul>
              </Block>
            )}

            {t.procedure && t.procedure.length > 0 && (
              <Block title="What happens during the procedure" icon={Stethoscope}>
                <ol className="space-y-3">
                  {t.procedure.map((step: string, i: number) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        {i + 1}
                      </span>
                      <span className="text-sm text-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </Block>
            )}

            {t.preparation && t.preparation.length > 0 && (
              <Block title="How to prepare" icon={ClipboardList}>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {t.preparation.map((p: string) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 rounded-xl border border-border bg-card p-3 text-sm text-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {p}
                    </li>
                  ))}
                </ul>
              </Block>
            )}

            <Block title="Benefits at Bimla Devi Hospital">
              <ul className="grid gap-3 sm:grid-cols-2">
                {t.benefits.map((b: string) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 rounded-xl border border-border bg-card p-3 text-sm text-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> {b}
                  </li>
                ))}
              </ul>
            </Block>

            {t.recoveryTimeline && t.recoveryTimeline.length > 0 && (
              <Block title="Recovery timeline" icon={Clock}>
                <ol className="relative space-y-4 border-l-2 border-primary/30 pl-5">
                  {t.recoveryTimeline.map((r: { time: string; milestone: string }) => (
                    <li key={r.time} className="relative">
                      <span className="absolute -left-[27px] top-1 grid h-4 w-4 place-items-center rounded-full bg-primary ring-4 ring-background" />
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {r.time}
                      </p>
                      <p className="text-sm text-foreground">{r.milestone}</p>
                    </li>
                  ))}
                </ol>
                <p className="mt-4 text-xs text-muted-foreground">{t.recovery}</p>
              </Block>
            )}

            {t.risks && t.risks.length > 0 && (
              <Block title="Possible risks (discussed openly)" icon={AlertTriangle}>
                <p className="mb-3 text-sm text-muted-foreground">
                  Modern techniques and senior teams keep risks low. We always discuss these
                  honestly during your pre-procedure consultation.
                </p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {t.risks.map((r: string) => (
                    <li
                      key={r}
                      className="flex items-start gap-2 rounded-xl border border-border bg-card p-3 text-sm text-foreground"
                    >
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {r}
                    </li>
                  ))}
                </ul>
              </Block>
            )}

            <section className="grid gap-4 md:grid-cols-3">
              <InfoCard icon={ShieldCheck} title="Affordability">
                Transparent pricing with cashless insurance support. Clear estimate before
                admission.
              </InfoCard>
              <InfoCard icon={Clock} title="Recovery">
                {t.recovery}
              </InfoCard>
              <InfoCard icon={Phone} title="Support">
                Our team coordinates pre-admission, surgery and follow-up — call {SITE.phone}.
              </InfoCard>
            </section>

            {t.faqs && t.faqs.length > 0 && (
              <Block title="Frequently asked questions" icon={HelpCircle}>
                <div className="space-y-3">
                  {t.faqs.map((f: { q: string; a: string }) => (
                    <details
                      key={f.q}
                      className="group rounded-xl border border-border bg-card p-4 open:shadow-soft"
                    >
                      <summary className="flex cursor-pointer items-start justify-between gap-3 text-sm font-semibold text-foreground marker:hidden">
                        {f.q}
                        <span className="text-primary transition-transform group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                    </details>
                  ))}
                </div>
              </Block>
            )}

            {speciality && (
              <section className="rounded-2xl border border-border bg-primary-soft p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Department
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold text-foreground">
                  {speciality.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{speciality.short}</p>
                <Link
                  to="/specialities/$slug"
                  params={{ slug: speciality.slug }}
                  className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
                >
                  Visit {speciality.name} →
                </Link>
              </section>
            )}

            {related.length > 0 && (
              <Block title="Related treatments">
                <div className="grid gap-4 sm:grid-cols-2">
                  {related.map((r: Treatment) => (
                    <Link
                      key={r.slug}
                      to="/treatments/$slug"
                      params={{ slug: r.slug }}
                      className="group rounded-xl border border-border bg-card p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-card"
                    >
                      <h4 className="font-semibold text-foreground group-hover:text-primary">
                        {r.name}
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground">{r.short}</p>
                      <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                        Learn more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  ))}
                </div>
              </Block>
            )}
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-primary p-6 text-primary-foreground shadow-card">
              <h3 className="font-display text-xl font-bold">Talk to our care team</h3>
              <p className="mt-2 text-sm opacity-90">
                Get a clear estimate, insurance check and date — within one call.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-foreground px-4 py-3 font-semibold text-primary hover:opacity-95"
                >
                  <Calendar className="h-5 w-5" /> Book Appointment
                </Link>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/40 px-4 py-3 font-semibold hover:bg-primary-foreground/10"
                >
                  <Phone className="h-5 w-5" /> {SITE.phone}
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="font-display text-base font-semibold text-foreground">
                Cashless mediclaim accepted
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Empanelled with all major insurers. We handle the paperwork.
              </p>
              <Link
                to="/cashless"
                className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
              >
                Insurance details →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function Block({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex items-center gap-2">
        {Icon && (
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary-soft text-primary">
            <Icon className="h-4 w-4" />
          </div>
        )}
        <h2 className="font-display text-2xl font-bold text-foreground">{title}</h2>
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Fact({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-3 shadow-soft">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="text-sm font-semibold text-foreground">{value}</p>
      </div>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-3 font-display text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{children}</p>
    </div>
  );
}

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Calendar, Phone, CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { TREATMENTS, SPECIALITIES, SITE } from "@/lib/site";

export const Route = createFileRoute("/treatments/$slug")({
  loader: ({ params }) => {
    const treatment = TREATMENTS.find((t) => t.slug === params.slug);
    if (!treatment) throw notFound();
    const speciality = SPECIALITIES.find((s) => s.slug === treatment.speciality);
    return { treatment, speciality };
  },
  head: ({ loaderData }) => {
    const t = loaderData?.treatment;
    if (!t) return { meta: [{ title: "Treatment not found — Bimla Devi Hospital" }] };
    const title = `${t.name} in Delhi — Cost, Recovery & Care | Bimla Devi Hospital`;
    const desc = `${t.name} at Bimla Devi Hospital, Mayur Vihar, Delhi — ${t.short} Cashless mediclaim accepted. Speak to our team today.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-prose py-20 text-center">
      <h1 className="font-display text-3xl font-bold">Treatment not found</h1>
      <Link to="/treatments" className="mt-6 inline-block text-primary underline">View all treatments</Link>
    </div>
  ),
  component: TreatmentPage,
});

function TreatmentPage() {
  const { treatment: t, speciality } = Route.useLoaderData();
  return (
    <div>
      <PageHero
        eyebrow="Treatment"
        title={t.name}
        description={t.short}
        crumbs={[{ label: "Treatments", to: "/treatments" }, { label: t.name }]}
      />

      <section className="py-12 md:py-16">
        <div className="container-prose grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-10">
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground">About this treatment</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{t.body}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground">Benefits at Bimla Devi Hospital</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {t.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 rounded-xl border border-border bg-card p-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> {b}
                  </li>
                ))}
              </ul>
            </section>

            <section className="grid gap-4 md:grid-cols-3">
              <InfoCard icon={ShieldCheck} title="Affordability">
                Transparent pricing with cashless insurance support. Clear estimate before admission.
              </InfoCard>
              <InfoCard icon={Clock} title="Recovery">
                {t.recovery}
              </InfoCard>
              <InfoCard icon={Phone} title="Support">
                Our team coordinates pre-admission, surgery and follow-up — call {SITE.phone}.
              </InfoCard>
            </section>

            {speciality && (
              <section className="rounded-2xl border border-border bg-primary-soft p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">Department</p>
                <h3 className="mt-1 font-display text-xl font-semibold text-foreground">{speciality.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{speciality.short}</p>
                <Link to="/specialities/$slug" params={{ slug: speciality.slug }} className="mt-3 inline-block text-sm font-semibold text-primary hover:underline">
                  Visit {speciality.name} →
                </Link>
              </section>
            )}
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-primary p-6 text-primary-foreground shadow-card">
              <h3 className="font-display text-xl font-bold">Talk to our care team</h3>
              <p className="mt-2 text-sm opacity-90">Get a clear estimate, insurance check and date — within one call.</p>
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
              <h3 className="font-display text-base font-semibold text-foreground">Cashless mediclaim accepted</h3>
              <p className="mt-2 text-sm text-muted-foreground">Empanelled with all major insurers. We handle the paperwork.</p>
              <Link to="/cashless" className="mt-3 inline-block text-sm font-semibold text-primary hover:underline">Insurance details →</Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function InfoCard({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary"><Icon className="h-5 w-5" /></div>
      <h3 className="mt-3 font-display text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{children}</p>
    </div>
  );
}

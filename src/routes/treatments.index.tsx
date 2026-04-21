import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, BedDouble, Stethoscope, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { TREATMENTS, SPECIALITIES, SITE } from "@/lib/site";

export const Route = createFileRoute("/treatments/")({
  head: () => ({
    meta: [
      { title: "Treatments & Services — Bimla Devi Hospital | Affordable Surgery & Care in Delhi" },
      { name: "description", content: "Full list of treatments at Bimla Devi Hospital — maternity, laparoscopic surgery, ICU, fracture care, ENT, urology, dental, dialysis & more. Cashless mediclaim accepted." },
      { property: "og:title", content: "Treatments & Services at Bimla Devi Hospital, Delhi" },
      { property: "og:description", content: "20+ treatments across 10 specialities — modern, affordable, with senior consultants and cashless insurance." },
      { property: "og:url", content: `${SITE.origin}/treatments` },
    ],
    links: [{ rel: "canonical", href: `${SITE.origin}/treatments` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Treatments at Bimla Devi Hospital",
          itemListElement: TREATMENTS.map((t, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE.origin}/treatments/${t.slug}`,
            name: t.name,
          })),
        }),
      },
    ],
  }),
  component: TreatmentsIndex,
});

function TreatmentsIndex() {
  // Group treatments by speciality for clearer browsing
  const grouped = SPECIALITIES.map((s) => ({
    speciality: s,
    items: TREATMENTS.filter((t) => t.speciality === s.slug),
  })).filter((g) => g.items.length > 0);

  return (
    <div>
      <PageHero
        eyebrow="Treatments & Services"
        title="Comprehensive treatments — at affordable prices"
        description={`${TREATMENTS.length}+ procedures across ${grouped.length} specialities, performed safely in modern theatres by senior consultants — with cashless insurance support.`}
        crumbs={[{ label: "Treatments" }]}
      />

      {/* Quick highlights */}
      <section className="border-b border-border bg-muted/30 py-8">
        <div className="container-prose grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Stethoscope, label: "Senior consultants", sub: "30+ specialists" },
            { icon: BedDouble, label: "Modern facilities", sub: "ICU • Modular OT" },
            { icon: ShieldCheck, label: "Cashless mediclaim", sub: "All major insurers" },
            { icon: Clock, label: "24×7 emergency", sub: "Always open" },
          ].map((h) => (
            <div key={h.label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-soft">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary">
                <h.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{h.label}</p>
                <p className="text-xs text-muted-foreground">{h.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Grouped treatments */}
      <section className="py-12 md:py-16">
        <div className="container-prose space-y-14">
          {grouped.map(({ speciality, items }) => (
            <div key={speciality.slug} id={speciality.slug}>
              <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border pb-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">Department</p>
                  <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">{speciality.name}</h2>
                  <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{speciality.short}</p>
                </div>
                <Link
                  to="/specialities/$slug"
                  params={{ slug: speciality.slug }}
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  View department →
                </Link>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {items.map((t) => (
                  <Link
                    key={t.slug}
                    to="/treatments/$slug"
                    params={{ slug: t.slug }}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-card"
                  >
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary">
                      {t.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{t.short}</p>

                    <dl className="mt-4 grid grid-cols-2 gap-2 text-xs">
                      {t.stay && (
                        <div className="rounded-lg bg-muted/40 px-2 py-1.5">
                          <dt className="text-muted-foreground">Stay</dt>
                          <dd className="font-semibold text-foreground">{t.stay}</dd>
                        </div>
                      )}
                      {t.duration && (
                        <div className="rounded-lg bg-muted/40 px-2 py-1.5">
                          <dt className="text-muted-foreground">Duration</dt>
                          <dd className="font-semibold text-foreground">{t.duration}</dd>
                        </div>
                      )}
                      {t.anaesthesia && (
                        <div className="col-span-2 rounded-lg bg-muted/40 px-2 py-1.5">
                          <dt className="text-muted-foreground">Anaesthesia</dt>
                          <dd className="font-semibold text-foreground">{t.anaesthesia}</dd>
                        </div>
                      )}
                    </dl>

                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border bg-primary-soft py-12">
        <div className="container-prose text-center">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Not sure which treatment you need?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Our care team will guide you to the right department, share a clear estimate and check your insurance — usually within one call.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground shadow-card hover:opacity-95">
              Book Appointment
            </Link>
            <a href={`tel:${SITE.phoneTel}`} className="inline-flex items-center justify-center rounded-lg border border-primary px-5 py-3 font-semibold text-primary hover:bg-primary/10">
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

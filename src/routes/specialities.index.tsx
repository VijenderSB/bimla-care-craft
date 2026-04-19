import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SPECIALITIES } from "@/lib/site";

export const Route = createFileRoute("/specialities/")({
  head: () => ({
    meta: [
      { title: "Specialities — Bimla Devi Hospital | Multi-Speciality Hospital in Delhi" },
      { name: "description", content: "Explore all medical specialities at Bimla Devi Hospital — gynaecology, paediatrics, surgery, orthopaedics, ENT, nephrology, urology, psychiatry, dental and more." },
      { property: "og:title", content: "All Specialities at Bimla Devi Hospital, Delhi" },
      { property: "og:description", content: "Comprehensive multi-speciality care under one roof." },
    ],
  }),
  component: SpecialitiesIndex,
});

function SpecialitiesIndex() {
  return (
    <div>
      <PageHero
        eyebrow="Specialities"
        title="Comprehensive multi-speciality care under one roof"
        description="From newborn care to complex surgery, our experienced consultants and modern infrastructure cover the full spectrum of family healthcare."
        crumbs={[{ label: "Specialities" }]}
      />

      <section className="py-12 md:py-16">
        <div className="container-prose grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SPECIALITIES.map((s) => (
            <Link
              key={s.slug}
              to="/specialities/$slug"
              params={{ slug: s.slug }}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-card"
            >
              <h2 className="font-display text-xl font-semibold text-foreground group-hover:text-primary">{s.name}</h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

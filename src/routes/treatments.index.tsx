import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { TREATMENTS } from "@/lib/site";

export const Route = createFileRoute("/treatments/")({
  head: () => ({
    meta: [
      { title: "Key Treatments — Bimla Devi Hospital | Affordable Surgery & Care in Delhi" },
      { name: "description", content: "Trusted treatments at Bimla Devi Hospital — normal delivery, C-section, laparoscopic surgery, fracture care, ICU and 24×7 emergency, with cashless mediclaim." },
      { property: "og:title", content: "Key Treatments at Bimla Devi Hospital, Delhi" },
      { property: "og:description", content: "Affordable, modern treatments with senior consultants and cashless insurance." },
    ],
  }),
  component: TreatmentsIndex,
});

function TreatmentsIndex() {
  return (
    <div>
      <PageHero
        eyebrow="Treatments"
        title="Trusted treatments — at affordable prices"
        description="Most-requested procedures, performed safely in modern theatres by senior consultants — with cashless insurance support."
        crumbs={[{ label: "Treatments" }]}
      />

      <section className="py-12 md:py-16">
        <div className="container-prose grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TREATMENTS.map((t) => (
            <Link
              key={t.slug}
              to="/treatments/$slug"
              params={{ slug: t.slug }}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
            >
              <h2 className="font-display text-xl font-semibold text-foreground group-hover:text-primary">{t.name}</h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{t.short}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

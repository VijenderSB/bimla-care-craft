import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, HeartHandshake, Sparkles, Users } from "lucide-react";
import founderImg from "@/assets/founder-walia.jpg";
import { PageHero } from "@/components/PageHero";
import { CTAButtons } from "@/components/CTAButtons";
import { STATS } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Bimla Devi Hospital — Legacy of Affordable, Compassionate Care in Delhi" },
      { name: "description", content: "Founded by Dr. Ashok Kumar Walia, Bimla Devi Hospital has served East Delhi families with affordable, compassionate, multi-speciality care for decades. Read our story." },
      { property: "og:title", content: "About Bimla Devi Hospital — Our Story & Mission" },
      { property: "og:description", content: "A legacy of compassionate, affordable healthcare for East Delhi families." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title="A legacy of compassionate, affordable healthcare"
        description="For decades, Bimla Devi Hospital has stood as a cornerstone of trusted medical care in East Delhi — combining clinical excellence, modern facilities and a patient-first heart."
        crumbs={[{ label: "About" }]}
      />

      {/* Founding story */}
      <section className="py-14 md:py-20">
        <div className="container-prose grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-start">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl border border-border shadow-card">
              <img src={founderImg} alt="Dr. Ashok Kumar Walia, Founder" loading="lazy" width={768} height={960} className="w-full" />
            </div>
            <div className="rounded-xl bg-primary-soft p-4 text-sm">
              <p className="font-display font-semibold text-primary">Dr. Ashok Kumar Walia</p>
              <p className="text-muted-foreground">Founder · 08 December 1948 — 22 April 2021</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Founder</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
              A legendary healer, public servant and visionary
            </h2>
            <div className="prose prose-base mt-6 max-w-none text-muted-foreground">
              <p>
                A statesman par excellence and the founder of Mother Mary's School, <strong className="text-foreground">Dr. Ashok Kumar Walia</strong> was born on 8 December 1948.
                After completing his MBBS, he served as a doctor in several renowned hospitals — dedicating his early career to the betterment of the
                poor, the needy and the downtrodden.
              </p>
              <p>
                In 1983, he established the <strong className="text-foreground">Walia Nursing Home</strong> in Laxmi Nagar with state-of-the-art facilities.
                Upon entering active politics, the nursing home was entrusted to a charitable trust so that healthcare could remain accessible
                regardless of patients' ability to pay.
              </p>
              <p>
                Dr. Walia went on to serve four consecutive terms as a Member of the Legislative Assembly of Delhi and held key cabinet portfolios
                including Health & Family Welfare, Finance, Power, Urban Development, and Land & Building. As Public Works Minister he transformed Delhi's
                infrastructure with 65 flyovers, 60 foot-over bridges and major roads.
              </p>
              <p>
                His life's work in education and healthcare — multiple universities, colleges and hospitals — continues today through Bimla Devi Hospital,
                carrying forward his founding belief that <em className="text-foreground">quality care must be affordable, ethical and humane</em>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section className="bg-primary-soft py-14 md:py-20">
        <div className="container-prose">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">What we stand for</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Serving the community with compassion, affordability and clinical excellence — every day, for every family.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { icon: Sparkles, title: "Our Vision", body: "To be East Delhi's most trusted multi-speciality hospital — where world-class care is genuinely affordable for every family." },
              { icon: HeartHandshake, title: "Our Mission", body: "Deliver ethical, evidence-based medical care with empathy, transparency and respect — under one roof, around the clock." },
              { icon: Award, title: "Our Promise", body: "No hidden charges, no unnecessary procedures, and a patient-first attitude in every consultation, every admission, every discharge." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-border bg-background p-6 shadow-soft">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth journey + impact */}
      <section className="py-14 md:py-20">
        <div className="container-prose grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Journey</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">From a single nursing home to a multi-speciality hospital</h2>
            <ol className="mt-8 space-y-6 border-l-2 border-primary/30 pl-6">
              <Step year="1983" title="Walia Nursing Home founded">
                Dr. A.K. Walia opens the Walia Nursing Home in Laxmi Nagar with state-of-the-art facilities for the local community.
              </Step>
              <Step year="1990s" title="Expanding access">
                Services broaden to include obstetrics, surgery and paediatrics, with charitable trust governance to keep care affordable.
              </Step>
              <Step year="2000s" title="Multi-speciality growth">
                Bimla Devi Hospital takes shape in Mayur Vihar — adding ICU, modular OT, in-house lab, imaging and a dedicated emergency department.
              </Step>
              <Step year="Today" title="Trusted by 100,000+ families">
                A multi-speciality hospital with 30+ consultants across 10+ specialities, 24×7 emergency, and cashless empanelment with all leading insurers.
              </Step>
            </ol>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-primary" />
              <h3 className="font-display text-xl font-semibold text-foreground">Our impact, in numbers</h3>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-xl bg-primary-soft p-4 text-center">
                  <div className="font-display text-3xl font-bold text-primary">{s.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl bg-primary p-5 text-primary-foreground">
              <p className="font-display text-lg font-semibold">"Quality care, made affordable."</p>
              <p className="mt-2 text-sm opacity-90">
                We believe no family should have to choose between their savings and their health. That's why every patient — insured or not —
                receives the same quality of clinical care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 text-primary-foreground">
        <div className="container-prose flex flex-col items-center gap-5 text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Ready to experience trusted, affordable care?</h2>
          <p className="max-w-2xl opacity-90">
            Book your appointment today, or speak to our care team to understand your options.
          </p>
          <div className="mt-2"><CTAButtons /></div>
          <Link to="/doctors" className="mt-2 text-sm underline opacity-90 hover:opacity-100">Meet our doctors</Link>
        </div>
      </section>
    </div>
  );
}

function Step({ year, title, children }: { year: string; title: string; children: React.ReactNode }) {
  return (
    <li className="relative">
      <span className="absolute -left-[34px] top-1 grid h-6 w-6 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">●</span>
      <p className="text-xs font-semibold uppercase tracking-wider text-primary">{year}</p>
      <h3 className="mt-1 font-display text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{children}</p>
    </li>
  );
}

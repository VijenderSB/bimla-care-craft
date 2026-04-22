import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Search, Users, Calendar } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { DOCTORS } from "@/lib/site";

const SHOWCASE_DOCTORS = DOCTORS.filter((doctor) => Boolean(doctor.image));
const FEATURED_DOCTOR_SLUG = "dr-manish-s-kansal";

export const Route = createFileRoute("/doctors/")({
  head: () => ({
    meta: [
      { title: "Our Doctors | Bimla Devi Hospital, Delhi" },
      { name: "description", content: "Meet our senior consultants in gynaecology, paediatrics, surgery, orthopaedics, ENT, nephrology, urology & psychiatry. Book an appointment online." },
      { property: "og:title", content: "Our Doctors | Bimla Devi Hospital, Delhi" },
      { property: "og:description", content: "Senior consultants across all major specialities at Bimla Devi Hospital — book online or call." },
      { property: "og:url", content: "https://bimladevi.hospital/doctors" },
    ],
    links: [{ rel: "canonical", href: "https://bimladevi.hospital/doctors" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Doctors at Bimla Devi Hospital",
          itemListElement: SHOWCASE_DOCTORS.map((d, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `https://bimladevi.hospital/doctors/${d.slug}`,
            name: d.name,
          })),
        }),
      },
    ],
  }),
  component: DoctorsPage,
});

function DoctorsPage() {
  const [q, setQ] = useState("");
  const [spec, setSpec] = useState<string>("all");
  const featuredDoctor = SHOWCASE_DOCTORS.find((doctor) => doctor.slug === FEATURED_DOCTOR_SLUG);

  const specialities = useMemo(
    () => Array.from(new Set(SHOWCASE_DOCTORS.map((d) => d.speciality))).sort(),
    [],
  );

  const filtered = SHOWCASE_DOCTORS.filter((d) => {
    const match = (d.name + " " + d.speciality + " " + d.designation).toLowerCase().includes(q.toLowerCase());
    const inSpec = spec === "all" || d.speciality === spec;
    return match && inSpec;
  });

  return (
    <div>
      <PageHero
        eyebrow="Our Team"
        title="Senior consultants who put patients first"
        description="Decades of combined experience across every major speciality — backed by modern infrastructure and 24×7 emergency support."
        crumbs={[{ label: "Doctors" }]}
      />

      {featuredDoctor && (
        <section className="py-10">
          <div className="container-prose">
            <article className="grid overflow-hidden rounded-2xl border border-border bg-card shadow-card md:grid-cols-[260px_1fr]">
              <div className="aspect-[4/3] overflow-hidden bg-primary-soft md:aspect-auto">
                <img src={featuredDoctor.image} alt={featuredDoctor.name} loading="eager" width={768} height={896} className="h-full w-full object-cover object-top" />
              </div>
              <div className="p-6 md:p-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">Leadership Profile</p>
                <h2 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">{featuredDoctor.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{featuredDoctor.qualification}</p>
                <p className="mt-2 text-base font-semibold text-primary">{featuredDoctor.designation}</p>
                <p className="mt-1 text-sm text-muted-foreground">{featuredDoctor.experience} • {featuredDoctor.speciality}</p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  As Director & Medical Superintendent, Dr. Manish S Kansal oversees the daily functioning, clinical standards and patient-care systems of Bimla Devi Hospital. His leadership focuses on running the hospital with discipline, compassion and transparency while keeping quality healthcare affordable for families in East Delhi.
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  With 25+ years of experience and a clinical background in psychiatry, he works closely with doctors, nursing teams and hospital staff to carry forward the founder’s vision of ethical, accessible and community-centred medical care.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link to="/doctors/$slug" params={{ slug: featuredDoctor.slug }} className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground hover:border-primary hover:text-primary">
                    View profile
                  </Link>
                  <Link to="/contact" className="inline-flex items-center justify-center gap-1 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-95">
                    <Calendar className="h-4 w-4" /> Book Appointment
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      <section className="py-10">
        <div className="container-prose">
          <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by name, speciality or designation"
                className="w-full rounded-lg border border-input bg-background py-3 pl-10 pr-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <select
              value={spec}
              onChange={(e) => setSpec(e.target.value)}
              className="rounded-lg border border-input bg-background px-3 py-3 text-sm outline-none focus:border-primary"
            >
              <option value="all">All specialities</option>
              {specialities.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">{filtered.length} doctor{filtered.length === 1 ? "" : "s"} found</p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((d) => (
              <article key={d.slug} className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card">
                <div className="aspect-[4/3] overflow-hidden bg-primary-soft">
                  {d.image ? (
                    <img src={d.image} alt={d.name} loading="lazy" width={768} height={896} className="h-full w-full object-cover object-top" />
                  ) : (
                    <div className="grid h-full place-items-center text-primary"><Users className="h-12 w-12" /></div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground">{d.name}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{d.qualification}</p>
                  <p className="mt-1 text-sm font-semibold text-primary">{d.designation}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{d.experience} • {d.speciality}</p>
                  <div className="mt-4 flex gap-2">
                    <Link
                      to="/doctors/$slug"
                      params={{ slug: d.slug }}
                      className="flex-1 rounded-lg border border-border px-3 py-2 text-center text-sm font-semibold text-foreground hover:border-primary hover:text-primary"
                    >
                      View profile
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-1 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:opacity-95"
                    >
                      <Calendar className="h-4 w-4" /> Book
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-10 rounded-xl border border-dashed border-border p-10 text-center text-muted-foreground">
              No doctors match your search. Try clearing filters.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

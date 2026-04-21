import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Calendar, GraduationCap, Stethoscope, BadgeCheck, Phone, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { DOCTORS, SITE } from "@/lib/site";

export const Route = createFileRoute("/doctors/$slug")({
  loader: ({ params }) => {
    const doctor = DOCTORS.find((d) => d.slug === params.slug);
    if (!doctor) throw notFound();
    return { doctor };
  },
  head: ({ loaderData }) => {
    const d = loaderData?.doctor;
    if (!d) return { meta: [{ title: "Doctor not found — Bimla Devi Hospital" }] };
    const title = `${d.name} | ${d.speciality.split(" ")[0]} | Bimla Devi Hospital`.slice(0, 60);
    const desc = `${d.name} (${d.qualification}), ${d.designation} at Bimla Devi Hospital, Delhi. ${d.experience} in ${d.speciality}. Book an appointment.`.slice(0, 158);
    const url = `${SITE.origin}/doctors/${d.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "profile" },
        ...(d.image ? [{ property: "og:image", content: d.image }] : []),
        ...(d.image ? [{ name: "twitter:image", content: d.image }] : []),
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            name: d.name,
            url,
            medicalSpecialty: d.speciality,
            description: d.bio,
            image: d.image,
            jobTitle: d.designation,
            worksFor: {
              "@type": "Hospital",
              name: "Bimla Devi Hospital",
              url: SITE.origin,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Pocket B, Plot No. 5, Ram Kumar Gautam Marg",
                addressLocality: "Mayur Vihar Phase II, Patparganj",
                addressRegion: "Delhi",
                postalCode: "110091",
                addressCountry: "IN",
              },
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE.origin },
              { "@type": "ListItem", position: 2, name: "Doctors", item: `${SITE.origin}/doctors` },
              { "@type": "ListItem", position: 3, name: d.name, item: url },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-prose py-20 text-center">
      <h1 className="font-display text-3xl font-bold">Doctor not found</h1>
      <p className="mt-2 text-muted-foreground">Please return to our full doctors list.</p>
      <Link to="/doctors" className="mt-6 inline-block text-primary underline">View all doctors</Link>
    </div>
  ),
  component: DoctorPage,
});

function DoctorPage() {
  const { doctor } = Route.useLoaderData();
  return (
    <div>
      <PageHero
        eyebrow={doctor.speciality}
        title={doctor.name}
        description={`${doctor.designation} • ${doctor.experience} experience`}
        crumbs={[{ label: "Doctors", to: "/doctors" }, { label: doctor.name }]}
      />

      <section className="py-12 md:py-16">
        <div className="container-prose grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-start">
          <div>
            <div className="overflow-hidden rounded-2xl border border-border bg-primary-soft shadow-card">
              {doctor.image ? (
                <img src={doctor.image} alt={doctor.name} loading="lazy" width={768} height={896} className="w-full object-cover" />
              ) : (
                <div className="aspect-[4/5] grid place-items-center text-primary"><Users className="h-20 w-20" /></div>
              )}
            </div>

            <div className="mt-5 space-y-3">
              <Link to="/contact" className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-95">
                <Calendar className="h-5 w-5" /> Book Appointment
              </Link>
              <a href={`tel:${SITE.phoneTel}`} className="flex w-full items-center justify-center gap-2 rounded-lg border border-primary px-5 py-3 font-semibold text-primary hover:bg-primary-soft">
                <Phone className="h-5 w-5" /> Call {SITE.phone}
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <Block icon={GraduationCap} title="Qualification">
              <p className="text-foreground">{doctor.qualification}</p>
            </Block>
            <Block icon={Stethoscope} title="Speciality">
              <p className="text-foreground">{doctor.speciality}</p>
            </Block>
            <Block icon={BadgeCheck} title="About">
              <p className="text-muted-foreground leading-relaxed">{doctor.bio}</p>
            </Block>
            <Block icon={Stethoscope} title="Treatments handled">
              <ul className="grid gap-2 sm:grid-cols-2">
                {doctor.treatments.map((t: string) => (
                  <li key={t} className="flex items-start gap-2 text-foreground">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </Block>
          </div>
        </div>
      </section>
    </div>
  );
}

function Block({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary"><Icon className="h-5 w-5" /></div>
        <h2 className="font-display text-lg font-semibold text-foreground">{title}</h2>
      </div>
      <div className="mt-4 text-sm">{children}</div>
    </div>
  );
}

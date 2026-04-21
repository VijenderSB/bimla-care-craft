import { createFileRoute } from "@tanstack/react-router";
import { SITE, SPECIALITIES, TREATMENTS, DOCTORS, INSURERS } from "@/lib/site";

function buildLlmsTxt() {
  const base = SITE.origin.replace(/\/$/, "");

  const specialities = SPECIALITIES.map(
    (s) => `- [${s.name}](${base}/specialities/${s.slug}): ${s.short}`,
  ).join("\n");

  const treatments = TREATMENTS.slice(0, 25)
    .map((t) => `- [${t.name}](${base}/treatments/${t.slug}): ${t.short}`)
    .join("\n");

  const doctors = DOCTORS.slice(0, 20)
    .map(
      (d) =>
        `- [${d.name}](${base}/doctors/${d.slug}) — ${d.designation}, ${d.speciality} (${d.experience})`,
    )
    .join("\n");

  return `# ${SITE.name}

> ${SITE.description}

${SITE.name} is a multi-speciality hospital in Mayur Vihar Phase II, Patparganj, Delhi 110091, India. We offer 24×7 emergency care, ICU, modular operation theatres, maternity care, paediatrics, surgery, orthopaedics, ENT, nephrology, urology, dental and psychiatry — with cashless mediclaim support across all major insurers and TPAs.

## Quick Facts
- **Name**: ${SITE.name}
- **Type**: Multi-Speciality Hospital
- **Location**: ${SITE.address.line1}, ${SITE.address.line2}
- **City**: Delhi (East Delhi)
- **Country**: India
- **Phone**: ${SITE.phone}
- **Email**: ${SITE.email}
- **Emergency**: ${SITE.hours.emergency}
- **OPD Hours**: ${SITE.hours.opd}
- **Website**: ${base}

## Key Pages
- [Home](${base}/): Overview, specialities, doctors, testimonials
- [About Us](${base}/about): Founding story and mission
- [Specialities](${base}/specialities): All medical specialities offered
- [Treatments](${base}/treatments): Full list of procedures and services
- [Doctors](${base}/doctors): Senior consultants and visiting doctors
- [Cashless Mediclaim](${base}/cashless): Empanelled insurers and TPA process
- [24×7 Emergency](${base}/emergency): Emergency room, ICU and ambulance
- [Contact / Book Appointment](${base}/contact): Phone, WhatsApp, form, map

## Specialities
${specialities}

## Treatments (selected)
${treatments}

## Doctors (selected)
${doctors}

## Insurance & Cashless TPAs
${INSURERS.map((i) => `- ${i}`).join("\n")}

## Booking
Patients can book appointments by calling ${SITE.phone}, WhatsApp, or via the contact form at ${base}/contact. Walk-in OPD is also available during published hours. Emergency patients should call directly — the emergency room is open 24×7.
`;
}

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: () =>
        new Response(buildLlmsTxt(), {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        }),
    },
  },
});

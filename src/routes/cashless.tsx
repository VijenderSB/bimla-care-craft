import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, FileCheck, Phone, ClipboardList, IdCard, Stethoscope } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { INSURERS, SITE } from "@/lib/site";

export const Route = createFileRoute("/cashless")({
  head: () => ({
    meta: [
      { title: "Cashless Mediclaim Hospital in Delhi — Bimla Devi Hospital" },
      { name: "description", content: "Cashless hospital near Mayur Vihar — empanelled with Star Health, HDFC ERGO, ICICI Lombard, Care Health, MediAssist, FHPL, Vidal, Paramount, ECHS, CGHS and more." },
      { property: "og:title", content: "Cashless Mediclaim — Bimla Devi Hospital, Delhi" },
      { property: "og:description", content: "Get treated without paying upfront. Empanelled with all major TPAs and insurers." },
    ],
  }),
  component: CashlessPage,
});

const STEPS = [
  { icon: Phone, title: "Call us before admission", body: "Share your insurance details with our TPA desk — we verify eligibility upfront." },
  { icon: IdCard, title: "Carry your documents", body: "Health card, photo ID and doctor's prescription / referral if available." },
  { icon: FileCheck, title: "Pre-authorisation", body: "Our TPA desk submits the pre-authorisation form to your insurer / TPA." },
  { icon: Stethoscope, title: "Receive treatment", body: "Focus on your care — our team coordinates approvals through the stay." },
  { icon: ClipboardList, title: "Smooth discharge", body: "We handle final billing & claim closure with the insurer at discharge." },
];

const DOCS = [
  "Original health insurance card / e-card",
  "Government photo ID (Aadhaar / Voter / Passport)",
  "Doctor's prescription or referral letter",
  "Previous medical reports, if any",
  "Policy copy (helpful for planned procedures)",
];

export default function CashlessPage() { return null; }

function CashlessPageInner() {
  return (
    <div>
      <PageHero
        eyebrow="Cashless Mediclaim"
        title="Cashless hospital in Mayur Vihar — empanelled with all major insurers"
        description="Get treated without paying upfront. Our dedicated TPA desk handles approvals, paperwork and follow-up — so you can focus on recovery."
        crumbs={[{ label: "Cashless Mediclaim" }]}
      />

      <section className="py-12 md:py-16">
        <div className="container-prose">
          <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">Insurance & TPA partners</h2>
          <p className="mt-2 text-muted-foreground">A representative list — please call us to confirm your specific policy.</p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {INSURERS.map((name) => (
              <div key={name} className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-4 text-sm font-semibold text-foreground shadow-soft">
                <ShieldCheck className="h-5 w-5 shrink-0 text-success" />
                {name}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-success/10 p-5 text-sm text-foreground">
            <strong>Don't see your insurer above?</strong> Call our TPA desk at{" "}
            <a className="font-semibold text-primary underline" href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a> — we partner with most national insurers and TPAs.
          </div>
        </div>
      </section>

      <section className="bg-primary-soft py-12 md:py-16">
        <div className="container-prose">
          <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">How the cashless process works</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-5">
            {STEPS.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-border bg-background p-5 shadow-soft">
                <div className="flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i + 1}</span>
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-3 font-display text-base font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-prose grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">Documents required</h2>
            <ul className="mt-6 space-y-3">
              {DOCS.map((d) => (
                <li key={d} className="flex items-start gap-2 text-foreground">
                  <FileCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-primary p-8 text-primary-foreground shadow-card">
            <h3 className="font-display text-2xl font-bold">Check your eligibility</h3>
            <p className="mt-3 opacity-90">Share your policy details and our TPA desk will confirm cashless eligibility — usually within the same day.</p>
            <div className="mt-6 flex flex-col gap-2">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-foreground px-4 py-3 font-semibold text-primary hover:opacity-95">Check Eligibility</Link>
              <a href={`tel:${SITE.phoneTel}`} className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/40 px-4 py-3 font-semibold hover:bg-primary-foreground/10">
                <Phone className="h-5 w-5" /> Call {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// hack so default export not used; tanstack uses Route component
Route.options.component = CashlessPageInner;
function CashlessPage() { return <CashlessPageInner />; }

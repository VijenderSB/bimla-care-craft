import { useState } from "react";
import { Send, Phone, CheckCircle2, CalendarCheck } from "lucide-react";
import { SITE } from "@/lib/site";

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; mobile?: string; query?: string }>({});

  const validate = (name: string, mobile: string, query: string) => {
    const e: typeof errors = {};
    if (!name.trim() || name.trim().length > 100) e.name = "Please enter your name (max 100 chars).";
    if (!/^[0-9+\s\-]{7,15}$/.test(mobile.trim())) e.mobile = "Enter a valid mobile number.";
    if (!query.trim() || query.trim().length > 1000) e.query = "Please describe your query (max 1000 chars).";
    return e;
  };

  return (
    <section className="border-t border-border bg-primary-soft/40 py-12 md:py-16">
      <div className="container-prose">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-primary-foreground">
              <CalendarCheck className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-foreground md:text-2xl">Book an Appointment</h2>
              <p className="text-sm text-muted-foreground">Share a few details — our care team will call you back shortly.</p>
            </div>
          </div>

          {submitted ? (
            <div className="mt-6 flex flex-col items-center gap-2 rounded-xl bg-success/10 p-6 text-center">
              <CheckCircle2 className="h-10 w-10 text-success" />
              <h3 className="font-display text-lg font-semibold text-foreground">Request received</h3>
              <p className="text-sm text-muted-foreground">
                Thank you! We'll call you back shortly. For urgent care please call{" "}
                <a href={`tel:${SITE.phoneTel}`} className="font-semibold text-primary underline">{SITE.phone}</a>.
              </p>
            </div>
          ) : (
            <form
              className="mt-6 grid gap-4 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const name = String(fd.get("name") ?? "");
                const mobile = String(fd.get("mobile") ?? "");
                const query = String(fd.get("query") ?? "");
                const v = validate(name, mobile, query);
                setErrors(v);
                if (Object.keys(v).length === 0) setSubmitted(true);
              }}
              noValidate
            >
              <label className="block">
                <span className="text-sm font-semibold text-foreground">Name <span className="text-emergency">*</span></span>
                <input
                  required
                  type="text"
                  name="name"
                  maxLength={100}
                  placeholder="Your full name"
                  className="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                {errors.name && <span className="mt-1 block text-xs text-emergency">{errors.name}</span>}
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-foreground">Mobile Number <span className="text-emergency">*</span></span>
                <input
                  required
                  type="tel"
                  name="mobile"
                  maxLength={15}
                  placeholder="+91 9XXXXXXXXX"
                  className="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                {errors.mobile && <span className="mt-1 block text-xs text-emergency">{errors.mobile}</span>}
              </label>

              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold text-foreground">Your Query <span className="text-emergency">*</span></span>
                <textarea
                  required
                  name="query"
                  rows={4}
                  maxLength={1000}
                  placeholder="Briefly describe your concern, preferred speciality or doctor…"
                  className="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                {errors.query && <span className="mt-1 block text-xs text-emergency">{errors.query}</span>}
              </label>

              <div className="sm:col-span-2 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-95"
                >
                  <Send className="h-4 w-4" /> Request Appointment
                </button>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary-soft"
                >
                  <Phone className="h-4 w-4" /> Call {SITE.phone}
                </a>
                <p className="text-xs text-muted-foreground">For emergencies, please call directly — available 24×7.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

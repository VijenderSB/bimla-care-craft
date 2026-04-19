import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, MessageCircle, Calendar } from "lucide-react";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/specialities", label: "Specialities" },
  { to: "/treatments", label: "Treatments" },
  { to: "/doctors", label: "Doctors" },
  { to: "/cashless", label: "Cashless" },
  { to: "/emergency", label: "Emergency" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      {/* Top utility bar */}
      <div className="hidden md:block bg-primary text-primary-foreground text-sm">
        <div className="container-prose flex items-center justify-between py-2">
          <div className="flex items-center gap-6 opacity-95">
            <span>📍 Mayur Vihar Phase II, Delhi 110091</span>
            <span>🕒 OPD: {SITE.hours.opd}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-medium">Emergency 24×7:</span>
            <a href={`tel:${SITE.phoneTel}`} className="font-semibold hover:underline">
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="container-prose flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3" aria-label="Bimla Devi Hospital — Home">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground font-display text-lg font-bold shadow-soft">
            B
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-foreground text-base md:text-lg">
              Bimla Devi Hospital
            </div>
            <div className="text-[11px] md:text-xs text-muted-foreground">
              Affordable • Trusted • Multi-Speciality
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary-soft transition-colors"
              activeProps={{ className: "px-3 py-2 rounded-md text-sm font-semibold text-primary bg-primary-soft" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-semibold text-primary hover:bg-primary-soft transition-colors"
          >
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft hover:opacity-95 transition-opacity"
          >
            <Calendar className="h-4 w-4" /> Book Appointment
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-muted"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-prose flex flex-col py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-primary-soft hover:text-primary"
                activeProps={{ className: "rounded-md px-3 py-3 text-base font-semibold text-primary bg-primary-soft" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a href={`tel:${SITE.phoneTel}`} className="inline-flex items-center justify-center gap-2 rounded-lg bg-emergency px-3 py-3 text-sm font-semibold text-emergency-foreground">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-lg bg-success px-3 py-3 text-sm font-semibold text-success-foreground">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

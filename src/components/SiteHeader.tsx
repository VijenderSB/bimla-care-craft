import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, MessageCircle, Calendar, ChevronDown } from "lucide-react";
import { SITE, SPECIALITIES } from "@/lib/site";
import logo from "@/assets/logo-bdh.png";

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
        <Link to="/" className="flex items-center" aria-label="Bimla Devi Hospital — Home">
          <img
            src={logo}
            alt="Bimla Devi Hospital logo"
            className="h-16 w-auto md:h-20"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => n.to === "/specialities" ? (
            <div key={n.to} className="group relative">
              <Link
                to="/specialities"
                className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary-soft hover:text-primary"
                activeProps={{ className: "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-primary bg-primary-soft" }}
              >
                Specialities <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="invisible absolute left-0 top-full z-50 w-72 translate-y-2 rounded-lg border border-border bg-popover p-2 text-popover-foreground opacity-0 shadow-card transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {SPECIALITIES.map((speciality) => (
                  <Link
                    key={speciality.slug}
                    to="/specialities/$slug"
                    params={{ slug: speciality.slug }}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-primary-soft hover:text-primary"
                  >
                    {speciality.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
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
            {NAV.map((n) => n.to === "/specialities" ? (
              <div key={n.to} className="py-1">
                <Link
                  to="/specialities"
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-semibold text-foreground hover:bg-primary-soft hover:text-primary"
                  activeProps={{ className: "block rounded-md px-3 py-3 text-base font-semibold text-primary bg-primary-soft" }}
                >
                  Specialities
                </Link>
                <div className="ml-3 border-l border-border pl-2">
                  {SPECIALITIES.map((speciality) => (
                    <Link
                      key={speciality.slug}
                      to="/specialities/$slug"
                      params={{ slug: speciality.slug }}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-primary-soft hover:text-primary"
                    >
                      {speciality.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
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

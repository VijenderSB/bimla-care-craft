import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/site";
import logo from "@/assets/logo-bdh.png";

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-primary text-primary-foreground">
      <div className="container-prose grid gap-10 py-14 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <div className="inline-block rounded-xl bg-primary-foreground p-3">
            <img src={logo} alt="Bimla Devi Hospital logo" className="h-24 w-auto object-contain" />
          </div>
          <p className="mt-4 text-sm leading-relaxed opacity-90">
            Affordable, trusted, multi-speciality care for every family — backed by experienced
            doctors, modern infrastructure and 24×7 emergency services.
          </p>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="opacity-90 hover:opacity-100 hover:underline">About Us</Link></li>
            <li><Link to="/doctors" className="opacity-90 hover:opacity-100 hover:underline">Our Doctors</Link></li>
            <li><Link to="/specialities" className="opacity-90 hover:opacity-100 hover:underline">Specialities</Link></li>
            <li><Link to="/treatments" className="opacity-90 hover:opacity-100 hover:underline">Treatments</Link></li>
            <li><Link to="/cashless" className="opacity-90 hover:opacity-100 hover:underline">Cashless Mediclaim</Link></li>
            <li><Link to="/emergency" className="opacity-90 hover:opacity-100 hover:underline">24×7 Emergency & ICU</Link></li>
            <li><Link to="/contact" className="opacity-90 hover:opacity-100 hover:underline">Book Appointment</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold">Top Specialities</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/specialities/$slug" params={{ slug: "gynaecology-obstetrics" }} className="opacity-90 hover:underline">Gynaecology & Obstetrics</Link></li>
            <li><Link to="/specialities/$slug" params={{ slug: "paediatrics" }} className="opacity-90 hover:underline">Paediatrics</Link></li>
            <li><Link to="/specialities/$slug" params={{ slug: "orthopaedics" }} className="opacity-90 hover:underline">Orthopaedics</Link></li>
            <li><Link to="/specialities/$slug" params={{ slug: "general-surgery" }} className="opacity-90 hover:underline">Laparoscopic Surgery</Link></li>
            <li><Link to="/specialities/$slug" params={{ slug: "ent" }} className="opacity-90 hover:underline">ENT</Link></li>
            <li><Link to="/specialities/$slug" params={{ slug: "nephrology" }} className="opacity-90 hover:underline">Nephrology</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{SITE.address.line1}, {SITE.address.line2}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href={`tel:${SITE.phoneTel}`} className="font-semibold hover:underline">{SITE.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${SITE.email}`} className="break-all hover:underline">{SITE.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" />
              <span>Emergency: {SITE.hours.emergency}<br />OPD: {SITE.hours.opd}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container-prose flex flex-col items-center justify-between gap-2 py-5 text-center text-xs opacity-80 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Bimla Devi Hospital. All rights reserved.</p>
          <p>Empanelled with leading TPAs & insurers • Cashless mediclaim available</p>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "@tanstack/react-router";
import { Calendar, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function CTAButtons({ variant = "default" }: { variant?: "default" | "hero" }) {
  const isHero = variant === "hero";
  return (
    <div className={`flex flex-wrap gap-3 ${isHero ? "" : ""}`}>
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground shadow-soft hover:opacity-95 transition-opacity"
      >
        <Calendar className="h-5 w-5" /> Book Appointment
      </Link>
      <a
        href={`tel:${SITE.phoneTel}`}
        className="inline-flex items-center gap-2 rounded-lg bg-emergency px-5 py-3 font-semibold text-emergency-foreground shadow-soft hover:opacity-95 transition-opacity"
      >
        <Phone className="h-5 w-5" /> Emergency Call
      </a>
    </div>
  );
}

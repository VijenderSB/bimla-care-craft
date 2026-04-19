import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; to?: string };

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs = [],
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="gradient-soft border-b border-border">
      <div className="container-prose py-12 md:py-16">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                <ChevronRight className="h-3.5 w-3.5" />
                {c.to ? (
                  <Link to={c.to} className="hover:text-primary">{c.label}</Link>
                ) : (
                  <span className="text-foreground">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>
        )}
        <h1 className="font-display text-3xl font-bold text-foreground text-balance md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-3xl text-base text-muted-foreground text-pretty md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SITE, SPECIALITIES, TREATMENTS, DOCTORS } from "@/lib/site";

function buildSitemap() {
  const today = new Date().toISOString().split("T")[0];
  const base = SITE.origin.replace(/\/$/, "");

  type Entry = { loc: string; priority: string; changefreq: string };
  const staticPages: Entry[] = [
    { loc: "/", priority: "1.0", changefreq: "weekly" },
    { loc: "/about", priority: "0.8", changefreq: "monthly" },
    { loc: "/specialities", priority: "0.9", changefreq: "monthly" },
    { loc: "/treatments", priority: "0.9", changefreq: "monthly" },
    { loc: "/doctors", priority: "0.9", changefreq: "weekly" },
    { loc: "/cashless", priority: "0.8", changefreq: "monthly" },
    { loc: "/emergency", priority: "0.9", changefreq: "monthly" },
    { loc: "/contact", priority: "0.8", changefreq: "monthly" },
  ];

  const dynamicPages: Entry[] = [
    ...SPECIALITIES.map((s) => ({ loc: `/specialities/${s.slug}`, priority: "0.8", changefreq: "monthly" })),
    ...TREATMENTS.map((t) => ({ loc: `/treatments/${t.slug}`, priority: "0.7", changefreq: "monthly" })),
    ...DOCTORS.map((d) => ({ loc: `/doctors/${d.slug}`, priority: "0.7", changefreq: "monthly" })),
  ];

  const all = [...staticPages, ...dynamicPages];

  const urls = all
    .map(
      (p) =>
        `  <url>\n    <loc>${base}${p.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(buildSitemap(), {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        }),
    },
  },
});

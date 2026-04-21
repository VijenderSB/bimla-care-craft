import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingActions } from "@/components/FloatingActions";
import { AppointmentForm } from "@/components/AppointmentForm";
import { SITE } from "@/lib/site";

// Approx coordinates for Mayur Vihar Phase II, Delhi
const GEO = { lat: 28.6094, lng: 77.3186 };

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Hospital", "MedicalBusiness", "LocalBusiness"],
  "@id": `${SITE.origin}/#hospital`,
  name: SITE.name,
  alternateName: "Bimla Devi Health Hub",
  url: SITE.origin,
  logo: `${SITE.origin}/favicon.ico`,
  image: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/29bdbed8-bd01-49b4-88ce-26e96f21f448/id-preview-0948ab55--2f6686a9-457d-42db-ae92-40f2888be9da.lovable.app-1776746933676.png",
  telephone: `+91-${SITE.phoneTel}`,
  email: SITE.email,
  description: SITE.description,
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Cashless Mediclaim",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.line1,
    addressLocality: "Mayur Vihar Phase II, Patparganj",
    addressRegion: "Delhi",
    postalCode: SITE.address.pincode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: GEO.lat,
    longitude: GEO.lng,
  },
  hasMap: SITE.address.mapUrl,
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "Place", name: "Mayur Vihar" },
    { "@type": "Place", name: "Patparganj" },
    { "@type": "Place", name: "East Delhi" },
    { "@type": "Place", name: "Noida" },
    { "@type": "Place", name: "Ghaziabad" },
    { "@type": "Place", name: "Indirapuram" },
    { "@type": "Place", name: "Vasundhara Enclave" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "00:00",
      closes: "23:59",
      description: "Emergency 24x7",
    },
  ],
  availableService: [
    { "@type": "MedicalProcedure", name: "24x7 Emergency Care" },
    { "@type": "MedicalProcedure", name: "Intensive Care Unit (ICU)" },
    { "@type": "MedicalProcedure", name: "Modular Operation Theatre" },
    { "@type": "MedicalProcedure", name: "Maternity & Painless Delivery" },
    { "@type": "MedicalProcedure", name: "Laparoscopic Surgery" },
    { "@type": "MedicalProcedure", name: "Cashless Mediclaim" },
  ],
  medicalSpecialty: [
    "Gynecology", "Obstetrics", "Pediatrics", "GeneralSurgery",
    "Orthopedic", "Otolaryngologic", "Nephrologic", "Psychiatric", "Urologic",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "100",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.facebook.com/BimlaDeviHospital",
    "https://www.instagram.com/bimladevihospital",
    SITE.address.mapUrl,
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.origin}/#website`,
  url: SITE.origin,
  name: SITE.name,
  publisher: { "@id": `${SITE.origin}/#hospital` },
  inLanguage: "en-IN",
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4 py-20">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-95"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Bimla Devi Hospital | Multi-Speciality Hospital, Delhi" },
      { name: "description", content: "Multi-speciality hospital in Mayur Vihar, Delhi. 24×7 emergency, ICU, modular OT, maternity, surgery & cashless mediclaim. Book today." },
      { name: "author", content: SITE.name },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#1e40af" },
      // Geo / local SEO
      { name: "geo.region", content: "IN-DL" },
      { name: "geo.placename", content: "Mayur Vihar Phase II, Delhi" },
      { name: "geo.position", content: "28.6094;77.3186" },
      { name: "ICBM", content: "28.6094, 77.3186" },
      // Open Graph
      { property: "og:site_name", content: SITE.name },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:title", content: "Bimla Devi Hospital | Multi-Speciality Hospital, Delhi" },
      { property: "og:description", content: "Multi-speciality hospital in Mayur Vihar, Delhi. 24×7 emergency, ICU, modular OT, maternity, surgery & cashless mediclaim." },
      { property: "og:url", content: SITE.origin },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/29bdbed8-bd01-49b4-88ce-26e96f21f448/id-preview-0948ab55--2f6686a9-457d-42db-ae92-40f2888be9da.lovable.app-1776746933676.png" },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Bimla Devi Hospital | Multi-Speciality Hospital, Delhi" },
      { name: "twitter:description", content: "Multi-speciality hospital in Mayur Vihar, Delhi. 24×7 emergency, ICU, OT & cashless mediclaim." },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/29bdbed8-bd01-49b4-88ce-26e96f21f448/id-preview-0948ab55--2f6686a9-457d-42db-ae92-40f2888be9da.lovable.app-1776746933676.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE.origin },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(websiteSchema),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <AppointmentForm />
      <SiteFooter />
      <FloatingActions />
    </div>
  );
}

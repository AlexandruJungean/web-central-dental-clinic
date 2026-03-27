const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://centraldental.ro";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: "Central Dental Clinic",
  alternateName: "ROYAL 3D SMILE DESIGN S.R.L.",
  description:
    "Clinică stomatologică premium în Sighetu Marmației, Maramureș. Estetică dentară, fațete ceramice, implantologie avansată (All-on-4, All-on-6), ortodonție modernă. Fondată de Dr. Șofineți Ivan Marian.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/og-image.jpg`,
  telephone: "+40749165211",
  email: "ivanmariansofineti@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Strada Andrei Mureșan 5",
    addressLocality: "Sighetu Marmației",
    postalCode: "435500",
    addressRegion: "Maramureș",
    addressCountry: "RO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.926696,
    longitude: 23.88827,
  },
  hasMap: "https://maps.app.goo.gl/K2uBokYHSU35Y797A",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  priceRange: "€€",
  currenciesAccepted: "RON, EUR",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  areaServed: [
    {
      "@type": "City",
      name: "Sighetu Marmației",
    },
    {
      "@type": "AdministrativeArea",
      name: "Maramureș",
    },
  ],
  founder: {
    "@type": "Person",
    name: "Dr. Șofineți Ivan Marian",
    jobTitle: "Fondator · Medic Stomatolog · Estetică Dentară",
  },
  employee: [
    {
      "@type": "Dentist",
      name: "Dr. Șofineți Ivan Marian",
      jobTitle: "Fondator · Estetică Dentară",
      worksFor: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Dentist",
      name: "Dr. Brigitta",
      jobTitle: "Ortodonție",
      worksFor: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Dentist",
      name: "Dr. Andreea",
      jobTitle: "Parodontologie",
      worksFor: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Dentist",
      name: "Dr. Ionela",
      jobTitle: "Pedodonție",
      worksFor: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Dentist",
      name: "Dr. Ionuț",
      jobTitle: "Endodonție & Chirurgie",
      worksFor: { "@id": `${SITE_URL}/#organization` },
    },
  ],
  medicalSpecialty: [
    "Cosmetic Dentistry",
    "Dental Implants",
    "Orthodontics",
    "Pediatric Dentistry",
    "Periodontics",
    "Endodontics",
    "Oral Surgery",
  ],
  availableService: [
    { "@type": "MedicalProcedure", name: "Fațete dentare ceramice", procedureType: "https://schema.org/CosmeticProcedure" },
    { "@type": "MedicalProcedure", name: "Implant dentar All-on-4" },
    { "@type": "MedicalProcedure", name: "Implant dentar All-on-6" },
    { "@type": "MedicalProcedure", name: "Ortodonție cu alignere transparente" },
    { "@type": "MedicalProcedure", name: "Albire dentară profesională" },
    { "@type": "MedicalProcedure", name: "Endodonție (tratament de canal)" },
    { "@type": "MedicalProcedure", name: "Chirurgie orală" },
    { "@type": "MedicalProcedure", name: "Parodontologie" },
    { "@type": "MedicalProcedure", name: "Pedodonție (stomatologie pediatrică)" },
  ],
  sameAs: [
    "https://www.facebook.com/royal.3d.smile.design/",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "50",
    reviewCount: "50",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Central Dental Clinic",
  description: "Clinică stomatologică premium în Sighetu Marmației, Maramureș",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "ro-RO",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Acasă",
      item: SITE_URL,
    },
  ],
};

export function SchemaMarkup() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

export function FAQSchema({ items }: { items: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

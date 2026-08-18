import { HAZEL_IMAGES, HAZEL_INFO } from "@/lib/hazel-data";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["BeautySalon", "LocalBusiness"],
    name: HAZEL_INFO.name,
    description:
      "Hazel Beauty Salon is an editorial beauty salon in Johar Town, Lahore, offering verified hair, skin, makeup, bridal, waxing, and package services by appointment request.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    telephone: HAZEL_INFO.phoneTel,
    email: HAZEL_INFO.email,
    image: [HAZEL_IMAGES.homeHero, HAZEL_IMAGES.servicesHero, HAZEL_IMAGES.bridalHero],
    priceRange: "PKR 500 - PKR 40,000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dr Munir Avenue, Near Ghousia Chowk, College Road",
      addressLocality: "Johar Town",
      addressRegion: "Punjab",
      postalCode: "54770",
      addressCountry: "PK",
    },
    areaServed: {
      "@type": "City",
      name: "Lahore",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

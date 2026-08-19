import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BadgeCheck, Gem, Leaf, Sparkles } from "lucide-react";

import { FaqAccordion } from "@/components/faq-accordion";
import { HomeHero } from "@/components/home-hero";
import { SectionHeading } from "@/components/section-heading";
import { buildPageMetadata } from "@/lib/seo";
import { resolveHazelImageProps } from "@/lib/hazel-media";
import {
  HAZEL_EDITORIAL_CARDS,
  HAZEL_FAQS,
  HAZEL_HERO_SERVICE_TILES,
  HAZEL_INFO,
  HAZEL_PACKAGE_ITEMS,
  HAZEL_SERVICES,
} from "@/lib/hazel-data";

export const metadata = buildPageMetadata({
  title: "Hazel Beauty Salon, Johar Town, Lahore",
  description:
    "Hazel Beauty Salon in Johar Town, Lahore offers verified hair, skin, makeup, bridal, waxing, and package services by appointment request.",
  path: "/",
});

const editorialIconMap = {
  leaf: Leaf,
  "badge-check": BadgeCheck,
  sparkles: Sparkles,
  gem: Gem,
} as const;

export default function HomePage() {
  const featuredServiceIds = new Set([
    "facial-gold-jelly",
    "hair-layered-styling",
    "makeup-hairstyling",
    "waxing-eyebrows-upper-lips-forehead",
  ]);
  const featuredServices = HAZEL_SERVICES.filter((service) => featuredServiceIds.has(service.id));
  const featuredPackages = HAZEL_PACKAGE_ITEMS.slice(0, 2);

  return (
    <>
      <HomeHero />

      <section className="hazel-section pt-0">
        <div className="hazel-shell">
          <SectionHeading
            eyebrow="The Hazel Standard"
            title="Beauty care that feels personal."
            summary="A calm palette, clear navigation, and practical request flows keep the experience easy to use."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {HAZEL_EDITORIAL_CARDS.map((card) => {
              const Icon = editorialIconMap[card.icon as keyof typeof editorialIconMap];
              return (
                <article key={card.id} className="hazel-card p-6">
                  <Icon className="h-5 w-5 text-[color:var(--hazel-soft-gold)]" strokeWidth={1.5} />
                  <h3 className="mt-5 text-2xl text-[color:var(--hazel-ivory)]">{card.title}</h3>
                  <p className="mt-4 text-sm text-white/68">{card.summary}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="hazel-section pt-0">
        <div className="hazel-shell">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {HAZEL_HERO_SERVICE_TILES.map((tile) => (
              <article key={tile.eyebrow} className="hazel-card-soft p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--hazel-soft-gold)]">
                  {tile.eyebrow}
                </p>
                <h3 className="mt-5 text-2xl text-[color:var(--hazel-ivory)]">{tile.title}</h3>
                <p className="mt-3 text-sm text-white/68">{tile.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hazel-section pt-0">
        <div className="hazel-shell">
          <SectionHeading
            eyebrow="Featured Services"
            title="Services to start with"
            summary="Open the full services page for search, filtering, and details."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {featuredServices.map((service) => (
              <article key={service.id} className="hazel-card overflow-hidden">
                <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
                  <div className="relative min-h-[16rem]">
                    <Image
                      {...resolveHazelImageProps(service.image)}
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(min-width: 1024px) 28rem, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/16 to-transparent" />
                  </div>
                  <div className="p-6">
                    <p className="hazel-meta text-[color:var(--hazel-soft-gold)]">{service.section}</p>
                    <h3 className="mt-3 text-2xl leading-tight">{service.name}</h3>
                    <p className="mt-3 text-sm text-white/68">{service.summary}</p>
                    <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--hazel-soft-gold)]">
                      {service.priceLabel}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4">
                      <Link className="hazel-button-primary" href={`/book-appointment?service=${encodeURIComponent(service.name)}`}>
                        Book this service
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                      </Link>
                      <Link className="hazel-button-secondary border-white/20" href="/services">
                        Explore menu
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hazel-section pt-0">
        <div className="hazel-shell">
          <SectionHeading
            eyebrow="Package options"
            title="Beauty packages, made simple."
            summary="Some packages have fixed prices. Others are confirmed after review."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {featuredPackages.map((pkg) => (
              <article key={pkg.id} className="hazel-card overflow-hidden">
                <div className="grid gap-0 md:grid-cols-[0.92fr_1.08fr]">
                  <div className="relative min-h-[15rem]">
                    <Image
                      {...resolveHazelImageProps(pkg.image)}
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      sizes="(min-width: 1024px) 28rem, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/16 to-transparent" />
                  </div>
                  <div className="p-6">
                    <p className="hazel-meta text-[color:var(--hazel-soft-gold)]">{pkg.priceLabel}</p>
                    <h3 className="mt-3 text-2xl leading-tight">{pkg.name}</h3>
                    <p className="mt-3 text-sm text-white/68">{pkg.summary}</p>
                    <ul className="mt-4 space-y-2 text-sm text-white/62">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 bg-[color:var(--hazel-soft-gold)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-4">
                      <Link className="hazel-button-primary" href={`/packages?package=${encodeURIComponent(pkg.name)}#package-form`}>
                        Enquire
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                      </Link>
                      <Link className="hazel-button-secondary border-white/20" href="/packages">
                        View packages
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion items={HAZEL_FAQS.slice(0, 4)} />

      <section className="hazel-section pt-0">
        <div className="hazel-shell">
          <div className="hazel-card p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">Visit Hazel</p>
                <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                  Dr Munir Avenue, Near Ghousia Chowk, College Road, Johar Town, Lahore 54770.
                </h2>
                <p className="mt-5 max-w-2xl text-sm text-white/70 md:text-base">
                  Use the directions link for maps, the WhatsApp button for quick communication, or the appointment
                  request form if you are ready to send details for a confirmed response.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link className="hazel-button-primary" href="/contact">
                  Directions &amp; Contact
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
                <a className="hazel-button-secondary border-white/20" href={HAZEL_INFO.whatsappUrl} target="_blank" rel="noreferrer">
                  WhatsApp Hazel
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircleMore } from "lucide-react";

import { FaqAccordion } from "@/components/faq-accordion";
import { ServiceBrowser } from "@/components/service-browser";
import { buildPageMetadata } from "@/lib/seo";
import { HAZEL_FAQS, HAZEL_IMAGES, HAZEL_INFO, HAZEL_SERVICES } from "@/lib/hazel-data";
import { resolveHazelImageProps } from "@/lib/hazel-media";

export const metadata = buildPageMetadata({
  title: "Services",
  description:
    "Search the verified Hazel menu by hair, facials, makeup, waxing, and manicure/pedicure services. Some items are quote-based and marked Ask Hazel.",
  path: "/services",
  image: HAZEL_IMAGES.servicesHero,
});

export default function ServicesPage() {
  return (
    <div className="bg-[color:var(--hazel-bg)]">
      <section className="relative isolate overflow-hidden bg-[color:var(--hazel-bg)] pt-10 md:pt-20">
        <div className="hazel-shell">
          <div className="grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr]">
            <div className="relative z-10 max-w-xl">
              <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">Hazel Services</p>
              <h1 className="mt-6 max-w-[14ch] text-[clamp(2.35rem,4.8vw,4.25rem)] leading-[0.96] tracking-[-0.04em] text-white">
                Verified services, organized by category.
              </h1>
              <p className="mt-6 max-w-md text-sm text-white/74 md:text-base">
                Browse the Hazel menu by category, search for a treatment, and send a request when you are ready.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link className="hazel-button-primary" href="/book-appointment">
                  Book an Appointment
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
                <a
                  className="hazel-button-secondary border-white/20"
                  href={HAZEL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Hazel
                  <MessageCircleMore className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>
              <div className="mt-8 border-l border-[color:var(--hazel-gold)]/30 pl-5 text-sm text-white/68">
                Booking is an appointment request only. Hazel will contact you to confirm availability.
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[0.92/1] overflow-hidden bg-black md:aspect-[1/1.04]">
                <Image
                  {...resolveHazelImageProps(HAZEL_IMAGES.servicesHero)}
                  src={HAZEL_IMAGES.servicesHero}
                  alt="Hazel services editorial hero"
                  fill
                  priority
                  sizes="(min-width: 1024px) 56vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/45" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="hazel-divider mb-4" />
                  <p className="hazel-meta text-[color:var(--hazel-soft-gold)]">Hazel Noir &amp; Gold</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceBrowser services={HAZEL_SERVICES} />

      <FaqAccordion items={HAZEL_FAQS} />

      <section className="hazel-section pt-0 bg-[color:var(--hazel-bg)]">
        <div className="hazel-shell">
          <div className="hazel-card p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">Not sure what to book?</p>
                <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                  Send the service name or a short description and Hazel will help narrow the match.
                </h2>
                <p className="mt-5 max-w-2xl text-sm text-white/70 md:text-base">
                  The menu includes both fixed prices and quote-based entries. If you are unsure, send the request and
                  Hazel will help confirm the best fit.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link className="hazel-button-primary" href="/book-appointment">
                  Book Appointment
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
                <Link className="hazel-button-secondary border-white/20" href="/packages">
                  View Packages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

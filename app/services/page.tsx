import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircleMore } from "lucide-react";

import { FaqAccordion } from "@/components/faq-accordion";
import { ServiceBrowser } from "@/components/service-browser";
import { buildPageMetadata } from "@/lib/seo";
import { HAZEL_FAQS, HAZEL_INFO, HAZEL_SERVICES } from "@/lib/hazel-data";

const SERVICES_HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAqLpafSRDfiUtUwowiIoNsd3LqW1omXixzJvhESriHmuEpbf-81-BgJT1O--aMXar105S1DzmGhWzT9xJk7I5nFoB1zX5CV2T1J3cun8zpRwUzOt80Y4xQYi8WzBdKygxf2Xx2XrNdClPfHsjTfkoTfKwNwj12l8F2ErWlE8BZAWPeFf0zad3Wie3jMrgMiRpQz8cyvP12sz_LzU8EsjVsGv0Ko1GUcw0aEvZ7fh7cceb1BPR02-Q";

export const metadata = buildPageMetadata({
  title: "Services",
  description:
    "Search the verified Hazel menu by hair, skin, makeup, bridal, waxing, and finishing services. Some items are quote-based and marked Ask Hazel.",
  path: "/services",
  image: SERVICES_HERO_IMAGE,
});

export default function ServicesPage() {
  return (
    <div className="bg-[color:var(--hazel-bg)]">
      <section className="relative isolate overflow-hidden bg-[color:var(--hazel-bg)] pt-10 md:pt-20">
        <div className="hazel-shell">
          <div className="grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr]">
            <div className="relative z-10 max-w-xl">
              <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">Hazel Services</p>
              <h1 className="mt-6 max-w-[10ch] text-[clamp(3.25rem,6vw,6.5rem)] leading-[0.9] tracking-[-0.04em] text-white">
                BEAUTY,
                <br />
                <span className="italic text-[color:var(--hazel-soft-gold)]">DESIGNED</span>
                <br />
                AROUND YOU.
              </h1>
              <p className="mt-6 max-w-md text-sm text-white/74 md:text-base">
                Experience precision craftsmanship and personalised care. Our curated services are tailored to
                elevate your natural elegance in an atmosphere of pure tranquility.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link className="hazel-button-primary" href="/book-appointment">
                  Book an Appointment
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
                <a className="hazel-button-secondary border-white/20" href={HAZEL_INFO.whatsappUrl} target="_blank" rel="noreferrer">
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
                  src={SERVICES_HERO_IMAGE}
                  alt="Hazel services editorial hero"
                  fill
                  priority
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="object-cover object-center grayscale contrast-110"
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
                <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">Need help choosing?</p>
                <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                  Ask Hazel for guidance and a confirmed appointment window.
                </h2>
                <p className="mt-5 max-w-2xl text-sm text-white/70 md:text-base">
                  The salon menu includes fixed prices and quote-based entries. If you are uncertain about the right
                  service, send the request and Hazel will help you confirm the best fit.
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

import { PageHero } from "@/components/page-hero";
import { FaqAccordion } from "@/components/faq-accordion";
import { ServiceBrowser } from "@/components/service-browser";
import { buildPageMetadata } from "@/lib/seo";
import { HAZEL_FAQS, HAZEL_IMAGES, HAZEL_INFO, HAZEL_SERVICES } from "@/lib/hazel-data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = buildPageMetadata({
  title: "Services",
  description:
    "Search the verified Hazel menu by hair, skin, makeup, bridal, waxing, and finishing services. Some items are quote-based and marked Ask Hazel.",
  path: "/services",
  image: HAZEL_IMAGES.servicesHero,
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="The Hazel Collection"
        title={
          <>
            BEAUTY,
            <br />
            <span className="italic text-[color:var(--hazel-soft-gold)]">DESIGNED</span>
            <br />
            AROUND YOU.
          </>
        }
        summary={
          <>
            Search the verified Hazel service menu, compare prices, and open the details modal for the menu item you
            want. If a price says Ask Hazel, the final quote is confirmed after your request is reviewed.
          </>
        }
        image={HAZEL_IMAGES.servicesHero}
        imageAlt="Hazel services editorial hero"
        primaryCta={{ label: "Book Appointment", href: "/book-appointment" }}
        secondaryCta={{ label: "WhatsApp Hazel", href: HAZEL_INFO.whatsappUrl }}
        note="Booking is an appointment request only. Hazel will contact you to confirm availability."
      />

      <ServiceBrowser services={HAZEL_SERVICES} />

      <FaqAccordion items={HAZEL_FAQS} />

      <section className="hazel-section pt-0">
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
    </>
  );
}


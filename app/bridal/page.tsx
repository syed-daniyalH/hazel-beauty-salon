import { Suspense } from "react";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BadgeCheck, Gem, Leaf, Sparkles } from "lucide-react";

import { FaqAccordion } from "@/components/faq-accordion";
import { InquiryForm } from "@/components/inquiry-form";
import { PageHero } from "@/components/page-hero";
import { PortfolioViewer } from "@/components/portfolio-viewer";
import { SectionHeading } from "@/components/section-heading";
import { buildPageMetadata } from "@/lib/seo";
import {
  HAZEL_BRIDAL_DIARIES,
  HAZEL_BRIDAL_SERVICES,
  HAZEL_FAQS,
  HAZEL_IMAGES,
  HAZEL_INFO,
} from "@/lib/hazel-data";
import { resolveHazelImageProps } from "@/lib/hazel-media";

export const metadata = buildPageMetadata({
  title: "Bridal",
  description:
    "Explore Hazel bridal artistry, verified bridal services, and the bridal consultation request form for Nikkah, Mehndi, Barat, and Walima looks.",
  path: "/bridal",
  image: HAZEL_IMAGES.bridalHero,
});

const editorialIconMap = {
  leaf: Leaf,
  "badge-check": BadgeCheck,
  sparkles: Sparkles,
  gem: Gem,
} as const;

const bridalDiaryItems = HAZEL_BRIDAL_DIARIES.map((item) => ({
  id: item.id,
  title: item.title,
  category: "Bridal Diary",
  summary: item.summary,
  image: item.image,
}));

export default function BridalPage() {
  return (
    <>
      <PageHero
        eyebrow="Bridal Experience"
        title={
          <>
            YOUR MOMENT.
            <br />
            YOUR BEAUTY.
            <br />
            YOUR HAZEL.
          </>
        }
        summary={
          <>
            Hazel bridal artistry is built around your event, venue, and personal reference points. Send a bridal
            consultation request and Hazel will contact you to confirm availability.
          </>
        }
        image={HAZEL_IMAGES.bridalHero}
        imageAlt="Hazel bridal editorial hero"
        primaryCta={{ label: "Request Consultation", href: "#bridal-consultation" }}
        secondaryCta={{ label: "WhatsApp Hazel", href: HAZEL_INFO.whatsappUrl }}
        note="The bridal process is consultative. Pricing is verified on the bridal page and confirmed after review."
      />

      <section className="hazel-section pt-0">
        <div className="hazel-shell grid gap-6 lg:grid-cols-[1fr_0.92fr] lg:items-stretch">
          <div className="hazel-card p-6 md:p-8">
            <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">The Hazel Approach</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
              We don&apos;t create one bridal look. We create yours.
            </h2>
            <p className="mt-5 max-w-2xl text-sm text-white/70 md:text-base">
              From Nikkah to Barat and Walima, Hazel designs each finish around the bride, the light, and the moment.
              The goal is calm precision rather than a one-size-fits-all template.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Listen",
                  summary: "Understand the event, venue, jewelry, and comfort level before any direction is locked in.",
                  icon: "leaf",
                },
                {
                  title: "Create",
                  summary: "Shape a look that matches the moment while keeping the finish polished and editorial.",
                  icon: "sparkles",
                },
                {
                  title: "Perfect",
                  summary: "Refine tone, detail, and longevity so the final result feels considered and secure.",
                  icon: "badge-check",
                },
              ].map((item) => {
                const Icon = editorialIconMap[item.icon as keyof typeof editorialIconMap];
                return (
                  <article key={item.title} className="border border-white/10 p-4">
                    <Icon className="h-5 w-5 text-[color:var(--hazel-soft-gold)]" strokeWidth={1.5} />
                    <h3 className="mt-5 text-xl text-[color:var(--hazel-ivory)]">{item.title}</h3>
                    <p className="mt-3 text-sm text-white/68">{item.summary}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[24rem] overflow-hidden border border-white/10 bg-[color:var(--hazel-charcoal)]">
            <Image
              {...resolveHazelImageProps(HAZEL_IMAGES.bridalApproach)}
              src={HAZEL_IMAGES.bridalApproach}
              alt="Hazel bridal approach"
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-transparent" />
          </div>
        </div>
      </section>

      <PortfolioViewer
        items={bridalDiaryItems}
        eyebrow="The Bridal Diaries"
        title="Signature bridal stories"
        summary="Nikkah, Mehndi, and Barat are shown as mood-led stories so you can explore the Hazel bridal direction before sending a request."
      />

      <section className="hazel-section pt-0">
        <div className="hazel-shell">
          <SectionHeading
            eyebrow="Verified Bridal Services"
            title="What the bridal menu actually includes"
            summary="These are the verified bridal services available on the bridal page. Open them directly or ask Hazel for a tailored quote."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {HAZEL_BRIDAL_SERVICES.map((service) => (
              <article key={service.id} className="hazel-card p-6">
                <p className="hazel-meta text-[color:var(--hazel-soft-gold)]">{service.priceLabel}</p>
                <h3 className="mt-3 text-2xl leading-tight">{service.name}</h3>
                <p className="mt-4 text-sm text-white/68">{service.summary}</p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link className="hazel-button-primary" href={`/book-appointment?service=${encodeURIComponent(service.name)}`}>
                    Book this service
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="bridal-consultation" className="hazel-section pt-0">
        <div className="hazel-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">Bridal consultation</p>
            <h2 className="text-3xl leading-tight md:text-5xl">Begin your journey with a request, not a guess.</h2>
            <p className="max-w-xl text-sm text-white/70 md:text-base">
              Share the event date, venue, and bridal direction. Hazel will review the request and contact you to
              confirm availability. If you already have a reference look, include it in the notes.
            </p>
          </div>

          <Suspense
            fallback={<div className="hazel-card min-h-[28rem] animate-pulse bg-[color:var(--hazel-charcoal)]/60" />}
          >
            <InquiryForm
              title="Bridal consultation request"
              summary="Tell Hazel about the occasion, the venue, and the look you are considering."
              endpoint="/api/bridal-consultations"
              submitLabel="Request consultation"
              successMessage="Your bridal consultation request has been received. Hazel will contact you to confirm availability."
              fields={[
                { name: "name", label: "Full name", type: "text", placeholder: "Your name" },
                { name: "phone", label: "Phone", type: "tel", placeholder: "+92..." },
                { name: "email", label: "Email", type: "email", placeholder: "you@example.com", required: false },
                {
                  name: "eventType",
                  label: "Event type",
                  type: "select",
                  placeholder: "Choose an event",
                  options: ["Nikkah", "Mehndi", "Barat", "Walima", "Other"],
                },
                { name: "eventDate", label: "Event date", type: "date" },
                { name: "venue", label: "Venue / location", type: "text", placeholder: "Hotel, hall, or home address" },
                { name: "look", label: "Preferred bridal look", type: "text", placeholder: "Soft glam, classic bridal, etc." },
                { name: "notes", label: "Notes", type: "textarea", placeholder: "Add jewelry, time, or makeup references", span: 2, rows: 5, required: false },
              ]}
              queryPrefill={[{ param: "look", field: "look" }]}
              note="Bridal consultation requests are reviewed manually. No real-time slots are shown on this site."
            />
          </Suspense>
        </div>
      </section>

      <FaqAccordion items={HAZEL_FAQS.slice(0, 4)} />

      <section className="hazel-section pt-0">
        <div className="hazel-shell">
          <div className="hazel-card p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">Ready when you are</p>
                <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                  Tell Hazel the date and the look. Hazel will take it from there.
                </h2>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link className="hazel-button-primary" href="/book-appointment">
                  Book Appointment
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

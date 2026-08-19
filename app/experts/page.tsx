import Link from "next/link";
import { ArrowUpRight, BadgeCheck, Gem, Leaf, Sparkles } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { buildPageMetadata } from "@/lib/seo";
import { HAZEL_EDITORIAL_CARDS, HAZEL_IMAGES, HAZEL_INFO } from "@/lib/hazel-data";

export const metadata = buildPageMetadata({
  title: "Our Experts",
  description:
    "Explore the Hazel studio approach to consultations, finishing, hygiene, and occasion expertise without inventing staff profiles or credentials.",
  path: "/experts",
  image: HAZEL_IMAGES.editEye,
});

const editorialIconMap = {
  leaf: Leaf,
  "badge-check": BadgeCheck,
  sparkles: Sparkles,
  gem: Gem,
} as const;

export default function ExpertsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Experts"
        title={
          <>
            THE STUDIO
            <br />
            BEHIND THE WORK.
          </>
        }
        summary={
          <>
            Hazel does not invent staff bios or credentials. Instead, this page highlights the studio standard,
            consultation rhythm, and the expertise Hazel applies to every request.
          </>
        }
        image={HAZEL_IMAGES.editEye}
        imageAlt="Hazel expert detail"
        primaryCta={{ label: "Book Appointment", href: "/book-appointment" }}
        secondaryCta={{ label: "Contact Hazel", href: "/contact" }}
        note="Specific artist assignment, if applicable, is confirmed after the request is reviewed."
      />

      <section className="hazel-section pt-0">
        <div className="hazel-shell">
          <SectionHeading
            eyebrow="The Hazel Standard"
            title="A collective approach, not a made-up roster."
            summary="Personal care, professionalism, hygiene, and occasion expertise frame the studio language here."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {HAZEL_EDITORIAL_CARDS.map((card) => {
              const Icon = editorialIconMap[card.icon as keyof typeof editorialIconMap];
              return (
                <article key={card.id} className="hazel-card p-6">
                  <Icon className="h-5 w-5 text-[color:var(--hazel-soft-gold)]" strokeWidth={1.5} />
                  <h3 className="mt-5 text-2xl">{card.title}</h3>
                  <p className="mt-4 text-sm text-white/68">{card.summary}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="hazel-section pt-0">
        <div className="hazel-shell">
          <SectionHeading
            eyebrow="Studio rhythm"
            title="How Hazel handles every request"
            summary="This is the practical flow behind the concierge feel. The steps are kept simple so the experience stays calm."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                step: "01",
                title: "Listen",
                summary: "The request form captures the service, timing, and notes before any confirmation is made.",
              },
              {
                step: "02",
                title: "Review",
                summary: "Hazel checks the request against the available schedule and the exact menu entry.",
              },
              {
                step: "03",
                title: "Confirm",
                summary: "You receive a follow-up from Hazel with availability and the next step.",
              },
              {
                step: "04",
                title: "Prepare",
                summary: "If booked, the final service plan is kept focused on the verified request and finish.",
              },
            ].map((item) => (
              <article key={item.step} className="hazel-card-soft p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--hazel-soft-gold)]">
                  {item.step}
                </p>
                <h3 className="mt-5 text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm text-white/68">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hazel-section pt-0">
        <div className="hazel-shell">
          <div className="hazel-card p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">Need help deciding?</p>
                <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                  Send the look or service reference and Hazel will guide the request.
                </h2>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link className="hazel-button-primary" href="/services">
                  View Services
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

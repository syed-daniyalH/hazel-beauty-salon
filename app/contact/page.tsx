import { Suspense } from "react";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageCircleMore, Phone } from "lucide-react";

import { InquiryForm } from "@/components/inquiry-form";
import { PageHero } from "@/components/page-hero";
import { buildPageMetadata } from "@/lib/seo";
import { HAZEL_IMAGES, HAZEL_INFO } from "@/lib/hazel-data";
import { resolveHazelImageProps } from "@/lib/hazel-media";

export const metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Find Hazel Beauty Salon's verified phone, WhatsApp, email, and address, then send a contact form message.",
  path: "/contact",
  image: HAZEL_IMAGES.map,
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Hazel"
        title={
          <>
            DIRECTIONS,
            <br />
            DETAILS,
            <br />
            AND REQUESTS.
          </>
        }
        summary={
          <>
            Use the verified contact details below, open the directions link, or send Hazel a message through the
            contact form. The site keeps all interaction within the public website structure.
          </>
        }
        image={HAZEL_IMAGES.map}
        imageAlt="Hazel location map hero"
        primaryCta={{ label: "Directions", href: HAZEL_INFO.mapsUrl }}
        secondaryCta={{ label: "WhatsApp Hazel", href: HAZEL_INFO.whatsappUrl }}
        note="Johar Town, Lahore, Pakistan. Phone 0334 9794441 · WhatsApp 0335 4464192 · hello@hazelbeauty.com"
      />

      <section className="hazel-section pt-0">
        <div className="hazel-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="hazel-card p-6">
              <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">Verified contact details</p>
              <div className="mt-5 space-y-4 text-sm text-white/72">
                <a className="flex items-start gap-3 transition hover:text-[color:var(--hazel-soft-gold)]" href={HAZEL_INFO.mapsUrl} target="_blank" rel="noreferrer">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--hazel-soft-gold)]" strokeWidth={1.5} />
                  <span>{HAZEL_INFO.address}</span>
                </a>
                <a className="flex items-center gap-3 transition hover:text-[color:var(--hazel-soft-gold)]" href={`tel:${HAZEL_INFO.phoneTel}`}>
                  <Phone className="h-4 w-4 shrink-0 text-[color:var(--hazel-soft-gold)]" strokeWidth={1.5} />
                  <span>{HAZEL_INFO.phoneDisplay}</span>
                </a>
                <a className="flex items-center gap-3 transition hover:text-[color:var(--hazel-soft-gold)]" href={HAZEL_INFO.whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircleMore className="h-4 w-4 shrink-0 text-[color:var(--hazel-soft-gold)]" strokeWidth={1.5} />
                  <span>{HAZEL_INFO.whatsappDisplay}</span>
                </a>
                <a className="flex items-center gap-3 transition hover:text-[color:var(--hazel-soft-gold)]" href={`mailto:${HAZEL_INFO.email}`}>
                  <Mail className="h-4 w-4 shrink-0 text-[color:var(--hazel-soft-gold)]" strokeWidth={1.5} />
                  <span>{HAZEL_INFO.email}</span>
                </a>
              </div>
            </div>

            <div className="relative min-h-[18rem] overflow-hidden border border-white/10 bg-[color:var(--hazel-charcoal)]">
              <Image
                {...resolveHazelImageProps(HAZEL_IMAGES.aboutDetail)}
                src={HAZEL_IMAGES.aboutDetail}
                alt="Hazel contact editorial image"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-transparent" />
            </div>
          </div>

          <Suspense
            fallback={<div className="hazel-card min-h-[28rem] animate-pulse bg-[color:var(--hazel-charcoal)]/60" />}
          >
            <InquiryForm
              title="Send a message"
              summary="Use this form for general contact questions, directions, or requests that are not booking-specific."
              endpoint="/api/contact"
              submitLabel="Send message"
              successMessage="Your message has been received. Hazel will contact you shortly."
              fields={[
                { name: "name", label: "Full name", type: "text", placeholder: "Your name" },
                { name: "email", label: "Email", type: "email", placeholder: "you@example.com", required: false },
                { name: "phone", label: "Phone", type: "tel", placeholder: "+92..." },
                { name: "subject", label: "Subject", type: "text", placeholder: "How can Hazel help?", required: false },
                { name: "message", label: "Message", type: "textarea", placeholder: "Write your note to Hazel", span: 2, rows: 6 },
              ]}
              note="If you want an appointment request, use the Book Appointment page so Hazel can route it correctly."
            />
          </Suspense>
        </div>
      </section>

      <section className="hazel-section pt-0">
        <div className="hazel-shell">
          <div className="hazel-card p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">Need a faster reply?</p>
                <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                  WhatsApp opens Hazel directly with the salon request message.
                </h2>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <a className="hazel-button-primary" href={HAZEL_INFO.whatsappUrl} target="_blank" rel="noreferrer">
                  WhatsApp Hazel
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
                <Link className="hazel-button-secondary border-white/20" href="/book-appointment">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

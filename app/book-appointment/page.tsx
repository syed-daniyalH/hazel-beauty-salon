import { Suspense } from "react";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { FaqAccordion } from "@/components/faq-accordion";
import { InquiryForm } from "@/components/inquiry-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { buildPageMetadata } from "@/lib/seo";
import { HAZEL_FAQS, HAZEL_IMAGES, HAZEL_INFO, HAZEL_PACKAGE_ITEMS, HAZEL_SERVICES } from "@/lib/hazel-data";

export const metadata = buildPageMetadata({
  title: "Book Appointment",
  description:
    "Send Hazel Beauty Salon an appointment request for services, packages, or bridal consultations. The site does not show real-time slots.",
  path: "/book-appointment",
  image: HAZEL_IMAGES.servicesHero,
});

export default function BookAppointmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Book Appointment"
        title="Request an appointment."
        summary={
          <>
            Booking is request-based, not real-time scheduling. Use the form to tell Hazel what you need, and the
            salon will contact you to confirm availability.
          </>
        }
        image={HAZEL_IMAGES.servicesHero}
        imageAlt="Hazel appointment request hero"
        primaryCta={{ label: "Appointment Form", href: "#appointment-form" }}
        secondaryCta={{ label: "WhatsApp Hazel", href: HAZEL_INFO.whatsappUrl }}
        note="Booking is request-based. Hazel will contact you to confirm availability."
      />

      <section className="hazel-section pt-0">
        <div className="hazel-shell">
          <SectionHeading
            eyebrow="How it works"
            title="How the request works"
            summary="The site does not show live calendar slots. Hazel reviews the request and follows up when availability is confirmed."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                step: "01",
                title: "Pick a service",
                summary: "Use the menu, packages, bridal page, or the booking form itself to tell Hazel what you need.",
              },
              {
                step: "02",
                title: "Send the request",
                summary: "Fill in your details and submit the appointment request form.",
              },
              {
                step: "03",
                title: "Hazel reviews",
                summary: "The salon checks availability and the exact request before confirming.",
              },
              {
                step: "04",
                title: "Confirm next step",
                summary: "Hazel contacts you directly once the request is processed.",
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

      <section id="appointment-form" className="hazel-section pt-0">
        <div className="hazel-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">Appointment request</p>
            <h2 className="text-3xl leading-tight md:text-5xl">Use the form to request your appointment.</h2>
            <p className="max-w-xl text-sm text-white/70 md:text-base">
              The form can be prefilled from service and package links. If you already know the item you want, mention
              it in the service field and Hazel will route it correctly.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link className="hazel-button-primary" href="/services">
                Search Services
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
              <Link className="hazel-button-secondary border-white/20" href="/packages">
                View Packages
              </Link>
            </div>
          </div>

          <Suspense
            fallback={<div className="hazel-card min-h-[28rem] animate-pulse bg-[color:var(--hazel-charcoal)]/60" />}
          >
            <InquiryForm
              title="Appointment request form"
              summary="Tell Hazel what you want, when you want it, and how to contact you."
              endpoint="/api/appointment-requests"
              submitLabel="Request appointment"
              successMessage="Your appointment request has been received. Hazel will contact you to confirm availability."
              fields={[
                { name: "name", label: "Full name", type: "text", placeholder: "Your name" },
                { name: "phone", label: "Phone", type: "tel", placeholder: "+92..." },
                { name: "email", label: "Email", type: "email", placeholder: "you@example.com", required: false },
                { name: "serviceInterest", label: "Service or package", type: "text", placeholder: "Tell Hazel what you want" },
                { name: "preferredDate", label: "Preferred date", type: "date", required: false },
                { name: "preferredTime", label: "Preferred time", type: "time", required: false },
                { name: "notes", label: "Notes", type: "textarea", placeholder: "Add any extra details or references", span: 2, rows: 5, required: false },
              ]}
              queryPrefill={[
                { param: "service", field: "serviceInterest" },
                { param: "package", field: "serviceInterest" },
              ]}
              note="This page intentionally avoids real-time slots. Hazel will contact you after the request is received."
            />
          </Suspense>
        </div>
      </section>

      <FaqAccordion items={HAZEL_FAQS.slice(0, 5)} />

      <section className="hazel-section pt-0">
        <div className="hazel-shell">
          <div className="hazel-card p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">Not sure what to book?</p>
                <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                  Services, packages, and bridal requests all use the same request flow.
                </h2>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link className="hazel-button-primary" href="/services">
                  Services
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
                <Link className="hazel-button-secondary border-white/20" href="/bridal">
                  Bridal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

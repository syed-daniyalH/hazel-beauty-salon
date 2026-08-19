import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { JournalBrowser } from "@/components/journal-browser";
import { PageHero } from "@/components/page-hero";
import { buildPageMetadata } from "@/lib/seo";
import { HAZEL_IMAGES, HAZEL_INFO, HAZEL_JOURNAL } from "@/lib/hazel-data";

export const metadata = buildPageMetadata({
  title: "Beauty Journal",
  description:
    "Read the Hazel Beauty Journal for bridal notes, haircut guidance, and a short explanation of Ask Hazel pricing.",
  path: "/beauty-journal",
  image: HAZEL_IMAGES.servicesStillLife,
});

export default function BeautyJournalPage() {
  return (
    <>
      <PageHero
        eyebrow="Beauty Journal"
        title="Editorial notes."
        summary={
          <>
            The Hazel Journal is a concise space for bridal notes, hair guidance, and practical pricing explanations.
            Open any article to read the full piece.
          </>
        }
        image={HAZEL_IMAGES.servicesStillLife}
        imageAlt="Hazel beauty journal hero"
        primaryCta={{ label: "Book Appointment", href: "/book-appointment" }}
        secondaryCta={{ label: "WhatsApp Hazel", href: HAZEL_INFO.whatsappUrl }}
        note="The journal is descriptive only. It does not add medical claims, staff credentials, or invented testimonials."
      />

      <JournalBrowser
        articles={HAZEL_JOURNAL}
        eyebrow="Editorial archive"
        title="Read the Hazel notes"
        summary="Use the category chips to narrow the archive, then open any article for the full editorial note."
      />

      <section className="hazel-section pt-0">
        <div className="hazel-shell">
          <div className="hazel-card p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">Need a request instead of a read?</p>
                <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                  Move from editorial notes to an appointment request.
                </h2>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link className="hazel-button-primary" href="/contact">
                  Contact Hazel
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
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

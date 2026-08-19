import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { PortfolioViewer } from "@/components/portfolio-viewer";
import { buildPageMetadata } from "@/lib/seo";
import { HAZEL_COLLECTIONS, HAZEL_IMAGES, HAZEL_INFO } from "@/lib/hazel-data";

export const metadata = buildPageMetadata({
  title: "Hazel Collections",
  description:
    "Browse the Hazel Collections archive of bridal, makeup, hair, and beauty-care imagery in a full-screen portfolio viewer.",
  path: "/collections",
  image: HAZEL_IMAGES.collectionBridal,
});

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Hazel Collections"
        title={
          <>
            EDITORIAL
            <br />
            COLLECTIONS
          </>
        }
        summary={
          <>
            A quiet archive of Hazel bridal, hair, makeup, and beauty-care imagery. Click any piece to open the viewer
            and move through the collection in full screen.
          </>
        }
        image={HAZEL_IMAGES.collectionBridal}
        imageAlt="Hazel collections hero"
        primaryCta={{ label: "Book Appointment", href: "/book-appointment" }}
        secondaryCta={{ label: "WhatsApp Hazel", href: HAZEL_INFO.whatsappUrl }}
        note="The portfolio viewer stays within the existing Hazel brand language."
      />

      <PortfolioViewer
        items={HAZEL_COLLECTIONS}
        eyebrow="Portfolio Viewer"
        title="Move through the Hazel archive"
        summary="Use the category chips to narrow the archive and click any image for the full-screen viewer."
      />

      <section className="hazel-section pt-0">
        <div className="hazel-shell">
          <div className="hazel-card p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">Want a similar finish?</p>
                <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                  Send the reference look in your appointment request.
                </h2>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link className="hazel-button-primary" href="/book-appointment">
                  Book Appointment
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
                <Link className="hazel-button-secondary border-white/20" href="/contact">
                  Contact Hazel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

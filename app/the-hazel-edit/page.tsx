import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { PortfolioViewer } from "@/components/portfolio-viewer";
import { SectionHeading } from "@/components/section-heading";
import { buildPageMetadata } from "@/lib/seo";
import { HAZEL_COLLECTIONS, HAZEL_IMAGES, HAZEL_INFO } from "@/lib/hazel-data";
import { resolveHazelImageProps } from "@/lib/hazel-media";

export const metadata = buildPageMetadata({
  title: "The Hazel Edit",
  description:
    "Browse Hazel's editorial transformation archive with bridal, beauty, hair, and makeup lookbook pieces.",
  path: "/the-hazel-edit",
  image: HAZEL_IMAGES.editHero,
});

export default function TheHazelEditPage() {
  return (
    <>
      <PageHero
        eyebrow="The Hazel Edit"
        title={
          <>
            THE HAZEL EDIT
            <br />
            <span className="italic text-[color:var(--hazel-soft-gold)]">Precision in every detail.</span>
          </>
        }
        summary={
          <>
            The Hazel Edit is a curated lookbook of bridal, hair, makeup, and beauty-care imagery. Click any piece to
            open the viewer and explore the editorial archive.
          </>
        }
        image={HAZEL_IMAGES.editHero}
        imageAlt="Hazel edit editorial hero"
        primaryCta={{ label: "View Collections", href: "/collections" }}
        secondaryCta={{ label: "Book Appointment", href: "/book-appointment" }}
        note="The lookbook is intentionally quiet and cinematic, echoing the brand's noir-and-gold visual language."
      />

      <section className="hazel-section pt-0">
        <div className="hazel-shell grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="hazel-card p-6 md:p-8">
            <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">Featured story</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-5xl">Regal Barat</h2>
            <h3 className="mt-4 text-2xl italic text-[color:var(--hazel-soft-gold)]">“Precision in every detail.”</h3>
            <p className="mt-5 text-sm text-white/70 md:text-base">
              This section reflects the editorial direction of the brand, where imagery carries the story. The page remains a
              website, not a product carousel or commerce flow.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link className="hazel-button-primary" href="/services">
                Search services
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
              <a className="hazel-button-secondary border-white/20" href={HAZEL_INFO.whatsappUrl} target="_blank" rel="noreferrer">
                WhatsApp Hazel
              </a>
            </div>
          </div>

          <div className="relative min-h-[24rem] overflow-hidden border border-white/10 bg-[color:var(--hazel-charcoal)]">
            <Image
              {...resolveHazelImageProps(HAZEL_IMAGES.editDetail)}
              src={HAZEL_IMAGES.editDetail}
              alt="Hazel edit detail"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-transparent" />
          </div>
        </div>
      </section>

      <PortfolioViewer
        items={HAZEL_COLLECTIONS}
        eyebrow="Archive Viewer"
        title="Explore the full Hazel lookbook"
        summary="Use the filter chips to move between bridal, hair, makeup, and beauty-care pieces. Click any tile to open the full-screen viewer."
      />

      <section className="hazel-section pt-0">
        <div className="hazel-shell">
          <SectionHeading
            eyebrow="Let's create your Hazel look"
            title="A request is all Hazel needs to begin."
            summary="Send your appointment request with your preferred service or package, and Hazel will follow up to confirm availability."
          />

          <div className="mt-8 flex flex-wrap gap-4">
            <Link className="hazel-button-primary" href="/book-appointment">
              Book Appointment
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link className="hazel-button-secondary border-white/20" href="/packages">
              View Packages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

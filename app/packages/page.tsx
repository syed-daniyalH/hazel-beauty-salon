import { Suspense } from "react";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { InquiryForm } from "@/components/inquiry-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { buildPageMetadata } from "@/lib/seo";
import { HAZEL_IMAGES, HAZEL_INFO, HAZEL_PACKAGE_ITEMS } from "@/lib/hazel-data";

export const metadata = buildPageMetadata({
  title: "Packages",
  description:
    "Explore verified Hazel package combinations and send a package enquiry form when you want a tailored response.",
  path: "/packages",
  image: HAZEL_IMAGES.packagesHero,
});

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hazel Packages"
        title={
          <>
            MORE BEAUTY.
            <br />
            BEAUTIFULLY TOGETHER.
          </>
        }
        summary={
          <>
            Package combinations are kept editorial and simple. Some are priced directly while others are intentionally
            marked Ask Hazel until the exact request is reviewed.
          </>
        }
        image={HAZEL_IMAGES.packagesHero}
        imageAlt="Hazel packages hero"
        primaryCta={{ label: "Package Enquiry", href: "#package-form" }}
        secondaryCta={{ label: "WhatsApp Hazel", href: HAZEL_INFO.whatsappUrl }}
        note="These packages come from the stitched Figma exports and use only verified pricing or Ask Hazel where the quote must be confirmed."
      />

      <section className="hazel-section pt-0">
        <div className="hazel-shell">
          <SectionHeading
            eyebrow="Curated offerings"
            title="Package cards from the verified Hazel menu"
            summary="Select a package to jump to the enquiry form. Hazel will contact you to confirm the details after review."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {HAZEL_PACKAGE_ITEMS.map((pkg) => (
              <article key={pkg.id} className="hazel-card overflow-hidden">
                <div className="grid gap-0 md:grid-cols-[0.92fr_1.08fr]">
                  <div className="relative min-h-[16rem]">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      sizes="(min-width: 1024px) 28rem, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/16 to-transparent" />
                  </div>
                  <div className="p-6">
                    <p className="hazel-meta text-[color:var(--hazel-soft-gold)]">{pkg.priceLabel}</p>
                    <h3 className="mt-3 text-2xl leading-tight">{pkg.name}</h3>
                    <p className="mt-3 text-sm text-white/68">{pkg.summary}</p>
                    <ul className="mt-4 space-y-2 text-sm text-white/62">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 bg-[color:var(--hazel-soft-gold)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {pkg.note ? <p className="mt-4 text-xs uppercase tracking-[0.16em] text-white/44">{pkg.note}</p> : null}
                    <div className="mt-6 flex flex-wrap gap-4">
                      <Link className="hazel-button-primary" href={`/packages?package=${encodeURIComponent(pkg.name)}#package-form`}>
                        Enquire
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="package-form" className="hazel-section pt-0">
        <div className="hazel-shell">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6">
              <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">Package enquiry</p>
              <h2 className="text-3xl leading-tight md:text-5xl">Tell Hazel which package you want, and Hazel will confirm the next step.</h2>
              <p className="max-w-xl text-sm text-white/70 md:text-base">
                Package enquiries are reviewed manually. Use the form to tell Hazel which package you want and the date
                you are aiming for, then wait for a confirmation response.
              </p>
            </div>

            <Suspense
              fallback={<div className="hazel-card min-h-[28rem] animate-pulse bg-[color:var(--hazel-charcoal)]/60" />}
            >
              <InquiryForm
                title="Package enquiry form"
                summary="Choose a package, add your date, and send Hazel the details."
                endpoint="/api/package-enquiries"
                submitLabel="Send enquiry"
                successMessage="Your package enquiry has been received. Hazel will contact you to confirm availability."
                fields={[
                  { name: "name", label: "Full name", type: "text", placeholder: "Your name" },
                  { name: "phone", label: "Phone", type: "tel", placeholder: "+92..." },
                  { name: "email", label: "Email", type: "email", placeholder: "you@example.com", required: false },
                  {
                    name: "package",
                    label: "Package",
                    type: "select",
                    placeholder: "Choose a package",
                    options: HAZEL_PACKAGE_ITEMS.map((pkg) => pkg.name),
                  },
                  { name: "eventDate", label: "Event date", type: "date", required: false },
                  { name: "notes", label: "Notes", type: "textarea", placeholder: "Add style references, timing, or add-on requests", span: 2, rows: 5, required: false },
                ]}
                queryPrefill={[{ param: "package", field: "package" }]}
                note="If the package includes Ask Hazel, the final quote is confirmed only after the request is reviewed."
              />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="hazel-section pt-0">
        <div className="hazel-shell">
          <div className="hazel-card p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">Need another option?</p>
                <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                  Hazel can also confirm services and bridal requests from the full menu.
                </h2>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link className="hazel-button-primary" href="/services">
                  View Services
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

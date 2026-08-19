import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageCircleMore, Phone } from "lucide-react";

import { HAZEL_INFO } from "@/lib/hazel-data";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Bridal", href: "/bridal" },
  { label: "The Hazel Edit", href: "/the-hazel-edit" },
];

const experienceLinks = [
  { label: "Packages", href: "/packages" },
  { label: "Collections", href: "/collections" },
  { label: "Beauty Journal", href: "/beauty-journal" },
  { label: "Book Appointment", href: "/book-appointment" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[color:var(--hazel-bg)]">
      <div className="hazel-shell py-16 md:py-20">
        <div className="grid gap-12 xl:grid-cols-[1.25fr_0.85fr_0.85fr_1fr]">
          <div className="max-w-xl">
            <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">HAZEL</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-5xl">Hazel Beauty Salon in Johar Town.</h2>
            <p className="mt-5 max-w-lg text-sm text-white/70 md:text-base">
              Verified services, direct contact details, and appointment requests handled with care in Lahore.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link className="hazel-button-primary" href="/book-appointment">
                Book Appointment
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
              <a className="hazel-button-secondary" href={HAZEL_INFO.whatsappUrl} target="_blank" rel="noreferrer">
                WhatsApp Hazel
                <MessageCircleMore className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <p className="hazel-meta text-[color:var(--hazel-soft-gold)]">Explore</p>
            <div className="mt-4 grid gap-3 text-sm text-white/72">
              {exploreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between border-b border-white/10 pb-3 transition hover:text-[color:var(--hazel-soft-gold)]"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="hazel-meta text-[color:var(--hazel-soft-gold)]">Experience</p>
            <div className="mt-4 grid gap-3 text-sm text-white/72">
              {experienceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between border-b border-white/10 pb-3 transition hover:text-[color:var(--hazel-soft-gold)]"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="hazel-meta text-[color:var(--hazel-soft-gold)]">Visit</p>
            <div className="mt-4 space-y-4 text-sm text-white/72">
              <a
                className="flex items-start gap-3 transition hover:text-[color:var(--hazel-soft-gold)]"
                href={HAZEL_INFO.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--hazel-soft-gold)]" strokeWidth={1.5} />
                <span>{HAZEL_INFO.address}</span>
              </a>
              <a
                className="flex items-center gap-3 transition hover:text-[color:var(--hazel-soft-gold)]"
                href={HAZEL_INFO.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[color:var(--hazel-soft-gold)]" strokeWidth={1.5} />
                <span>Get directions</span>
              </a>
              <div className="space-y-1 border-t border-white/10 pt-4">
                <p className="hazel-meta text-[color:var(--hazel-soft-gold)]">Hours</p>
                <p>By appointment</p>
              </div>

              <div className="space-y-1 border-t border-white/10 pt-4">
                <p className="hazel-meta text-[color:var(--hazel-soft-gold)]">Contact</p>
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
                <p className="pt-2 text-white/60">Instagram {HAZEL_INFO.instagram}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Hazel Beauty Salon. All rights reserved.</p>
          <p>Johar Town, Lahore · Appointment requests only.</p>
        </div>
      </div>
    </footer>
  );
}

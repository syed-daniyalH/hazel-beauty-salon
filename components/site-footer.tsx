import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageCircleMore, Phone } from "lucide-react";

import { HAZEL_INFO, HAZEL_PRIMARY_NAV_LINKS } from "@/lib/hazel-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[color:var(--hazel-bg)]">
      <div className="hazel-shell py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div className="max-w-xl">
            <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">Hazel Beauty Salon</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
              Beauty, designed around you.
            </h2>
            <p className="mt-5 max-w-lg text-sm text-white/70 md:text-base">
              Private concierge support, verified services, and appointment requests handled with the Hazel Noir &amp;
              Gold editorial standard.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link className="hazel-button-primary" href="/book-appointment">
                Book Appointment
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
              <a className="hazel-button-secondary" href={HAZEL_INFO.whatsappUrl} target="_blank" rel="noreferrer">
                WhatsApp
                <MessageCircleMore className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <p className="hazel-meta text-[color:var(--hazel-soft-gold)]">Navigation</p>
            <div className="mt-4 grid gap-3 text-sm text-white/72">
              {HAZEL_PRIMARY_NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="flex items-center justify-between border-b border-white/10 pb-3 transition hover:text-[color:var(--hazel-soft-gold)]">
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="hazel-meta text-[color:var(--hazel-soft-gold)]">Contact</p>
            <div className="mt-4 space-y-4 text-sm text-white/72">
              <a className="flex items-start gap-3 transition hover:text-[color:var(--hazel-soft-gold)]" href={HAZEL_INFO.mapsUrl} target="_blank" rel="noreferrer">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--hazel-soft-gold)]" strokeWidth={1.5} />
                <span>{HAZEL_INFO.address}</span>
              </a>
              <a className="flex items-center gap-3 transition hover:text-[color:var(--hazel-soft-gold)]" href={`tel:${HAZEL_INFO.phoneTel}`}>
                <Phone className="h-4 w-4 shrink-0 text-[color:var(--hazel-soft-gold)]" strokeWidth={1.5} />
                <span>{HAZEL_INFO.phoneDisplay}</span>
              </a>
              <a className="flex items-center gap-3 transition hover:text-[color:var(--hazel-soft-gold)]" href={`mailto:${HAZEL_INFO.email}`}>
                <Mail className="h-4 w-4 shrink-0 text-[color:var(--hazel-soft-gold)]" strokeWidth={1.5} />
                <span>{HAZEL_INFO.email}</span>
              </a>
              <a className="flex items-center gap-3 transition hover:text-[color:var(--hazel-soft-gold)]" href={HAZEL_INFO.whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircleMore className="h-4 w-4 shrink-0 text-[color:var(--hazel-soft-gold)]" strokeWidth={1.5} />
                <span>{HAZEL_INFO.whatsappDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.16em] text-white/40 md:flex-row md:items-center md:justify-between">
          <p>Hazel Beauty Salon · Johar Town, Lahore</p>
          <p>Booking is handled by appointment request only.</p>
        </div>
      </div>
    </footer>
  );
}

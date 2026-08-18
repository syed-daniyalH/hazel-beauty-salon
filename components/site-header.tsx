"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { HAZEL_INFO, HAZEL_NAV_LINKS, HAZEL_PRIMARY_NAV_LINKS } from "@/lib/hazel-data";
import { cn } from "@/lib/utils";

const HAZEL_SECONDARY_NAV_LINKS = HAZEL_NAV_LINKS.filter(
  (link) => !HAZEL_PRIMARY_NAV_LINKS.some((primaryLink) => primaryLink.href === link.href),
);

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const activePath = useMemo(() => pathname ?? "/", [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300",
          scrolled && "border-white/10 bg-[color:rgba(7,7,7,0.94)] backdrop-blur-2xl",
        )}
      >
        <div className="hazel-shell flex h-20 items-center justify-between gap-5">
          <Link href="/" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border border-[color:var(--hazel-gold)] text-[0.75rem] font-semibold tracking-[0.18em] text-[color:var(--hazel-gold)]">
              H
            </span>
            <span className="hidden text-xs uppercase tracking-[0.35em] text-white/80 md:block">
              {HAZEL_INFO.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            {HAZEL_PRIMARY_NAV_LINKS.map((link) => {
              const active = activePath === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition",
                    active ? "text-[color:var(--hazel-soft-gold)]" : "text-white/72 hover:text-[color:var(--hazel-soft-gold)]",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-11 items-center gap-2 border border-white/15 px-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white transition hover:border-[color:var(--hazel-gold)] hover:text-[color:var(--hazel-soft-gold)] lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="hazel-menu"
            >
              {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
              <span className="hidden sm:inline">Menu</span>
            </button>
            <Link className="hazel-button-primary" href="/book-appointment">
              Book Appointment
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>

        </div>

        {open ? (
          <div className="border-t border-white/10 bg-[color:rgba(7,7,7,0.98)] backdrop-blur-2xl lg:hidden">
            <div className="hazel-shell py-6">
              <div className="grid gap-6">
                <div className="space-y-4">
                  <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">Browse Hazel</p>
                  <p className="max-w-2xl text-sm text-white/68">
                    Use the main pages here for quick navigation. The remaining editorial pages stay available in the
                    footer so the top bar can remain clean and professional.
                  </p>
                </div>

                <div className="grid gap-2 sm:grid-cols-2">
                  {HAZEL_PRIMARY_NAV_LINKS.map((link) => {
                    const active = activePath === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between border-b border-white/10 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition hover:text-[color:var(--hazel-soft-gold)]",
                          active && "text-[color:var(--hazel-soft-gold)]",
                        )}
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                      </Link>
                    );
                  })}
                </div>

                <div className="grid gap-2 border-t border-white/10 pt-6 sm:grid-cols-2">
                  {HAZEL_SECONDARY_NAV_LINKS.map((link) => {
                    const active = activePath === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between border-b border-white/10 py-3 text-sm font-medium uppercase tracking-[0.12em] text-white/72 transition hover:text-[color:var(--hazel-soft-gold)]",
                          active && "text-[color:var(--hazel-soft-gold)]",
                        )}
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                      </Link>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-3 border-t border-white/10 pt-6">
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
        ) : null}
      </header>
    </>
  );
}

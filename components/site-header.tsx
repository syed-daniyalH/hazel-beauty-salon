"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { HAZEL_INFO, HAZEL_NAV_LINKS, HAZEL_PRIMARY_NAV_LINKS } from "@/lib/hazel-data";
import { cn } from "@/lib/utils";

const HAZEL_SECONDARY_NAV_LINKS = HAZEL_NAV_LINKS.filter(
  (link) => !HAZEL_PRIMARY_NAV_LINKS.some((primaryLink) => primaryLink.href === link.href),
);

const desktopNavLinkBase =
  "relative inline-flex items-center pb-1 text-[0.7rem] font-semibold uppercase tracking-[0.09em] text-white/72 transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-[color:var(--hazel-gold)] after:transition-transform after:duration-200 after:content-[''] hover:text-[color:var(--hazel-soft-gold)] hover:after:scale-x-100";

const mobileNavCardBase =
  "group flex items-start justify-between gap-4 border border-white/10 bg-[rgba(255,255,255,0.02)] px-4 py-4 text-left transition-colors duration-200 hover:border-[color:var(--hazel-gold)]/30 hover:bg-[rgba(201,154,56,0.04)]";

const desktopHeaderCtaBase =
  "flex h-12 items-center justify-center gap-2 border border-[color:var(--hazel-gold)] bg-[color:var(--hazel-gold)] px-4 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#070707] transition-colors duration-200 hover:border-[color:var(--hazel-soft-gold)] hover:bg-[color:var(--hazel-soft-gold)]";

const mobileMenuActionBase =
  "inline-flex h-12 items-center justify-center gap-2 border border-[color:var(--hazel-gold)] bg-[color:var(--hazel-gold)] px-4 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#070707] transition-colors duration-200 hover:border-[color:var(--hazel-soft-gold)] hover:bg-[color:var(--hazel-soft-gold)]";

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

  const activePath = pathname ?? "/";
  const closeMenu = () => setOpen(false);
  const headerSizeClass = scrolled ? "h-[68px] md:h-[76px]" : "h-[72px] md:h-[84px]";
  const headerSurfaceClass = scrolled
    ? "border-[rgba(201,154,56,0.12)] bg-[color:rgba(7,7,7,0.94)] shadow-[0_1px_0_rgba(201,154,56,0.08)] backdrop-blur-[18px]"
    : "border-[rgba(201,154,56,0.1)] bg-[color:rgba(7,7,7,0.98)]";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-[height,background-color,border-color,box-shadow,backdrop-filter] duration-300",
          headerSizeClass,
          headerSurfaceClass,
        )}
      >
        <div className="hazel-shell flex h-full items-center justify-between gap-4">
          <Link href="/" className="group flex min-w-0 items-center gap-2 md:gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[color:var(--hazel-gold)] bg-[rgba(201,154,56,0.04)] text-[0.8rem] font-semibold tracking-[0.12em] text-[color:var(--hazel-gold)]">
              H
            </span>
            <span className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 md:hidden">
              HAZEL
            </span>
            <span className="hidden whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 md:inline md:text-[12px]">
              {HAZEL_INFO.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {HAZEL_PRIMARY_NAV_LINKS.map((link) => {
              const active = activePath === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    desktopNavLinkBase,
                    active && "text-[color:var(--hazel-soft-gold)] after:scale-x-100",
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
              className="inline-flex h-11 items-center gap-2 border border-white/12 bg-white/[0.02] px-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:border-[color:var(--hazel-gold)]/40 hover:text-[color:var(--hazel-soft-gold)] lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-haspopup="dialog"
            >
              {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
              <span>Menu</span>
            </button>
            <Link className={cn("hidden lg:inline-flex", desktopHeaderCtaBase)} href="/book-appointment">
              Book Appointment
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>

        </div>

        {open ? (
          <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Hazel menu">
            <div
              aria-hidden="true"
              className="absolute inset-0 cursor-default bg-[color:rgba(7,7,7,0.96)] backdrop-blur-[18px]"
              onClick={closeMenu}
            />

            <div className="relative flex min-h-screen flex-col">
              <div className="hazel-shell flex h-[72px] items-center justify-between border-b border-[color:rgba(201,154,56,0.12)]">
                <Link href="/" className="group flex min-w-0 items-center gap-2 md:gap-3" onClick={closeMenu}>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[color:var(--hazel-gold)] bg-[rgba(201,154,56,0.04)] text-[0.8rem] font-semibold tracking-[0.12em] text-[color:var(--hazel-gold)]">
                    H
                  </span>
                  <span className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 md:hidden">
                    HAZEL
                  </span>
                  <span className="hidden whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 md:inline md:text-[12px]">
                    {HAZEL_INFO.name}
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={closeMenu}
                  className="inline-flex h-11 items-center gap-2 border border-white/12 bg-white/[0.02] px-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:border-[color:var(--hazel-gold)]/40 hover:text-[color:var(--hazel-soft-gold)]"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" strokeWidth={1.5} />
                  <span>Close</span>
                </button>
              </div>

              <div className="hazel-shell flex flex-1 flex-col justify-between gap-10 py-8">
                <div className="grid gap-8">
                  <section className="space-y-4">
                    <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">Main pages</p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {HAZEL_PRIMARY_NAV_LINKS.map((link) => {
                        const active = activePath === link.href;

                        return (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={closeMenu}
                            aria-current={active ? "page" : undefined}
                            className={cn(mobileNavCardBase, active && "border-[color:var(--hazel-gold)]/30")}
                          >
                            <span className="min-w-0 space-y-1 text-left">
                              <span
                                className={cn(
                                  "block text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-white/88 transition-colors duration-200",
                                  active && "text-[color:var(--hazel-soft-gold)]",
                                )}
                              >
                                {link.label}
                              </span>
                              <span className="block text-xs leading-relaxed text-white/56">{link.description}</span>
                            </span>
                            <ArrowUpRight
                              className={cn(
                                "mt-0.5 h-4 w-4 shrink-0 text-white/50 transition-colors duration-200",
                                active && "text-[color:var(--hazel-soft-gold)]",
                              )}
                              strokeWidth={1.5}
                            />
                          </Link>
                        );
                      })}
                    </div>
                  </section>

                  <section className="space-y-4 border-t border-white/10 pt-8">
                    <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">More pages</p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {HAZEL_SECONDARY_NAV_LINKS.map((link) => {
                        const active = activePath === link.href;

                        return (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={closeMenu}
                            aria-current={active ? "page" : undefined}
                            className={cn(mobileNavCardBase, active && "border-[color:var(--hazel-gold)]/30")}
                          >
                            <span className="min-w-0 space-y-1 text-left">
                              <span
                                className={cn(
                                  "block text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-white/88 transition-colors duration-200",
                                  active && "text-[color:var(--hazel-soft-gold)]",
                                )}
                              >
                                {link.label}
                              </span>
                              <span className="block text-xs leading-relaxed text-white/56">{link.description}</span>
                            </span>
                            <ArrowUpRight
                              className={cn(
                                "mt-0.5 h-4 w-4 shrink-0 text-white/50 transition-colors duration-200",
                                active && "text-[color:var(--hazel-soft-gold)]",
                              )}
                              strokeWidth={1.5}
                            />
                          </Link>
                        );
                      })}
                    </div>
                  </section>
                </div>

                <div className="grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
                  <Link className={cn(mobileMenuActionBase, "w-full")} href="/book-appointment" onClick={closeMenu}>
                    Book Appointment
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </Link>
                  <a
                    className={cn(
                      mobileMenuActionBase,
                      "w-full border-white/20 bg-transparent text-white hover:border-[color:var(--hazel-soft-gold)] hover:bg-transparent hover:text-[color:var(--hazel-soft-gold)]",
                    )}
                    href={HAZEL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp Hazel
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
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

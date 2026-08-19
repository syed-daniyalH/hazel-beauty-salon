"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { ArrowUpRight, Search, Sparkles } from "lucide-react";

import { HAZEL_INFO, HAZEL_SERVICE_FILTERS, HAZEL_SERVICE_SECTIONS } from "@/lib/hazel-data";
import { resolveHazelImageProps } from "@/lib/hazel-media";
import { ServiceItem } from "@/lib/types";
import { cn } from "@/lib/utils";

import { ModalShell } from "./modal-shell";

const filterLabelMap = new Map(HAZEL_SERVICE_FILTERS.map((filter) => [filter.id, filter.label]));

function buildServiceHref(service: ServiceItem) {
  return `/book-appointment?service=${encodeURIComponent(service.name)}`;
}

export function ServiceBrowser({ services }: { services: ServiceItem[] }) {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [selected, setSelected] = useState<ServiceItem | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
    };

    if (selected) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  const visibleServices = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return services.filter((service) => {
      const matchesFilter = activeFilter === "all" || service.category === activeFilter;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [service.name, service.summary, service.section, service.priceLabel, ...(service.details ?? [])]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query, services]);

  const sections = useMemo(() => {
    return HAZEL_SERVICE_SECTIONS.map((section) => ({
      ...section,
      services: visibleServices.filter((service) => service.section === section.label),
    })).filter((section) => section.services.length > 0);
  }, [visibleServices]);

  const visibleCount = visibleServices.length;
  const visibleCountLabel = visibleCount === 1 ? "SERVICE" : "SERVICES";

  return (
    <>
      <section className="hazel-section pt-0 bg-[color:var(--hazel-bg)]">
        <div className="hazel-shell">
          <div className="border border-[color:var(--hazel-outline)] bg-[color:var(--hazel-charcoal)] px-6 py-6 md:px-8 md:py-7">
            <div className="grid gap-5 lg:grid-cols-12 lg:items-start lg:gap-6">
              <div className="lg:col-span-3 lg:min-w-0">
                <label className="block">
                  <span className="hazel-label text-[color:var(--hazel-soft-gold)]">SEARCH SERVICES</span>
                  <div className="mt-3 flex items-center gap-3 border-b border-white/12 pb-2 transition-colors focus-within:border-[color:var(--hazel-gold)]">
                    <Search className="h-4 w-4 shrink-0 text-[color:var(--hazel-soft-gold)]" strokeWidth={1.75} />
                    <input
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      className="h-9 w-full min-w-0 bg-transparent text-[0.92rem] text-[color:var(--hazel-ivory)] outline-none placeholder:text-white/32"
                      placeholder="Search services..."
                      type="text"
                      autoComplete="off"
                      inputMode="search"
                    />
                  </div>
                </label>
              </div>

              <div className="lg:col-span-6 lg:min-w-0">
                <div className="space-y-3">
                  <p className="hazel-label text-[color:var(--hazel-soft-gold)]">FILTER BY CATEGORY</p>
                  <div className="-mr-1 flex min-w-0 flex-nowrap gap-2 overflow-x-auto pb-1 pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:gap-0.5 lg:pb-0">
                    {HAZEL_SERVICE_FILTERS.map((filter) => (
                      <button
                        key={filter.id}
                        type="button"
                        onClick={() => setActiveFilter(filter.id)}
                        aria-pressed={activeFilter === filter.id}
                        className={cn(
                          "flex h-11 shrink-0 items-center border px-3 text-left text-[0.78rem] font-medium leading-tight tracking-[0.01em] transition-colors duration-200 focus-visible:border-[color:var(--hazel-gold)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[color:var(--hazel-gold)] lg:px-0.5 lg:text-[0.6rem] lg:tracking-[0em]",
                          activeFilter === filter.id
                            ? "border-[color:var(--hazel-gold)] bg-[color:var(--hazel-gold)] text-[color:#070707]"
                            : "border-white/12 bg-[color:rgba(18,18,18,0.6)] text-[color:var(--hazel-ivory)] hover:border-[color:var(--hazel-soft-gold)] hover:text-[color:var(--hazel-soft-gold)]",
                        )}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 lg:min-w-0 lg:pl-2">
                <div className="flex h-full flex-col justify-between gap-3 lg:items-end lg:text-right">
                  <div className="space-y-2">
                    <p
                      className="text-[1.5rem] font-semibold uppercase leading-none tracking-[0.1em] text-[color:var(--hazel-ivory)]"
                      aria-live="polite"
                    >
                      {visibleCount} {visibleCountLabel}
                    </p>
                    <p className="max-w-xs text-sm leading-relaxed text-white/68">
                      Prices reflect Hazel&apos;s current menu. Quote-based services are marked "Ask Hazel".
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hazel-section pt-0 bg-[color:var(--hazel-bg)]">
        <div className="hazel-shell space-y-16">
          {sections.length > 0 ? (
            sections.map((section, index) => (
              <div key={section.id} className="space-y-6">
                <div className={cn("flex flex-col gap-3", index === 0 ? "items-center text-center" : "md:flex-row md:items-end md:justify-between")}>
                  <div className={cn(index === 0 && "max-w-2xl")}>
                    <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">{section.label}</p>
                    <p className="mt-2 max-w-2xl text-sm text-white/68">{section.description}</p>
                  </div>
                  <p className="hazel-meta">{section.services.length} result{section.services.length === 1 ? "" : "s"}</p>
                </div>

                <div className="grid gap-5 xl:grid-cols-2">
                  {section.services.map((service) => (
                    <article key={service.id} className="hazel-card group overflow-hidden">
                      <div className="grid h-full gap-0 md:grid-cols-[0.95fr_1.05fr]">
                        <div className="relative min-h-[16rem] overflow-hidden">
                          <Image
                            {...resolveHazelImageProps(service.image, "transition duration-500 group-hover:scale-[1.03]")}
                            src={service.image}
                            alt={service.name}
                            fill
                            sizes="(min-width: 1280px) 24rem, 100vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/18 to-transparent" />
                          <div className="absolute inset-x-0 bottom-0 p-5">
                            <p className="hazel-meta text-[color:var(--hazel-soft-gold)]">{service.section}</p>
                          </div>
                        </div>

                        <div className="flex flex-col justify-between p-5 md:p-6">
                          <div>
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <p className="hazel-meta">{filterLabelMap.get(service.category) ?? service.category}</p>
                                <h3 className="mt-2 text-2xl leading-tight text-[color:var(--hazel-ivory)]">
                                  {service.name}
                                </h3>
                              </div>
                              <p className="text-right text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--hazel-soft-gold)]">
                                {service.priceLabel}
                              </p>
                            </div>

                            <p className="mt-4 text-sm text-white/68 md:text-base">{service.summary}</p>

                            {service.details?.length ? (
                              <ul className="mt-5 space-y-2 text-sm text-white/62">
                                {service.details.map((detail) => (
                                  <li key={detail} className="flex items-start gap-2">
                                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--hazel-soft-gold)]" strokeWidth={1.5} />
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </div>

                          <div className="mt-6 flex flex-wrap items-center gap-4">
                            <button
                              type="button"
                              onClick={() => setSelected(service)}
                              className="hazel-button-secondary border-white/20"
                            >
                              View details
                              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                            </button>
                            <Link className="hazel-button-primary" href={buildServiceHref(service)}>
                              Book this service
                              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="hazel-card p-8 text-center">
              <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">No matches</p>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-white/68">
                We could not find a service matching your search. Try a broader term or choose a different filter.
              </p>
            </div>
          )}
        </div>
      </section>

      <ModalShell
        open={selected !== null}
        onClose={() => setSelected(null)}
        panelClassName="max-w-5xl"
      >
        {selected ? (
          <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-[18rem] lg:min-h-full">
              <Image
                {...resolveHazelImageProps(selected.image)}
                src={selected.image}
                alt={selected.name}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/18 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">{selected.section}</p>
                <p className="mt-2 text-2xl text-[color:var(--hazel-ivory)]">{selected.name}</p>
              </div>
            </div>

            <div className="p-6 pt-16 md:p-8">
              <p className="hazel-meta text-[color:var(--hazel-soft-gold)]">{selected.badge ?? filterLabelMap.get(selected.category) ?? selected.category}</p>
              <h3 className="mt-4 text-3xl leading-tight">{selected.name}</h3>
              <p className="mt-4 text-sm text-white/70 md:text-base">{selected.summary}</p>
              <p className="mt-5 text-lg font-semibold uppercase tracking-[0.16em] text-[color:var(--hazel-soft-gold)]">
                {selected.priceLabel}
              </p>

              {selected.details?.length ? (
                <ul className="mt-6 space-y-3 text-sm text-white/68">
                  {selected.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[color:var(--hazel-soft-gold)]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-4">
                <Link className="hazel-button-primary" href={buildServiceHref(selected)}>
                  Book this service
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
                <a className="hazel-button-secondary border-white/20" href={HAZEL_INFO.whatsappUrl} target="_blank" rel="noreferrer">
                  WhatsApp Hazel
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </ModalShell>
    </>
  );
}

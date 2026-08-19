"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { ArrowUpRight } from "lucide-react";

import { resolveHazelImageProps } from "@/lib/hazel-media";
import { LookbookItem } from "@/lib/types";
import { cn } from "@/lib/utils";

import { ModalShell } from "./modal-shell";

export function PortfolioViewer({
  items,
  eyebrow,
  title,
  summary,
  panelClassName = "max-w-6xl",
}: {
  items: LookbookItem[];
  eyebrow: string;
  title: string;
  summary: string;
  panelClassName?: string;
}) {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<LookbookItem | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
    };

    if (selected) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  const categories = useMemo(() => {
    return ["all", ...new Set(items.map((item) => item.category))];
  }, [items]);

  const visibleItems = useMemo(() => {
    if (filter === "all") {
      return items;
    }

    return items.filter((item) => item.category === filter);
  }, [filter, items]);

  return (
    <>
      <section className="hazel-section pt-0">
        <div className="hazel-shell">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="max-w-2xl">
              <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">{eyebrow}</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">{title}</h2>
              <p className="mt-5 text-sm text-white/70 md:text-base">{summary}</p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFilter(category)}
                  className={cn(
                    "border px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition",
                    filter === category
                      ? "border-[color:var(--hazel-gold)] bg-[color:var(--hazel-gold)] text-[color:var(--hazel-bg)]"
                      : "border-white/10 text-white/70 hover:border-[color:var(--hazel-gold)] hover:text-[color:var(--hazel-soft-gold)]",
                  )}
                >
                  {category === "all" ? "All" : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="hazel-section pt-0">
        <div className="hazel-shell">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {visibleItems.map((item, index) => {
              const isLarge = index % 5 === 0;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelected(item)}
                  className={cn(
                    "group relative overflow-hidden border border-white/10 bg-[color:var(--hazel-charcoal)] text-left",
                    isLarge ? "sm:col-span-2 xl:col-span-2" : "",
                  )}
                >
                  <div className={cn("relative overflow-hidden", isLarge ? "aspect-[16/9]" : "aspect-[4/5]")}>
                    <Image
                      {...resolveHazelImageProps(item.image, "transition duration-500 group-hover:scale-[1.04]")}
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes={isLarge ? "(min-width: 1280px) 50vw, 100vw" : "(min-width: 1280px) 32vw, 50vw"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/16 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                      <p className="hazel-meta text-[color:var(--hazel-soft-gold)]">{item.category}</p>
                      <h3 className="mt-2 text-2xl leading-tight text-[color:var(--hazel-ivory)]">{item.title}</h3>
                    </div>
                  </div>
                  <div className="p-5 md:p-6">
                    <p className="text-sm text-white/66">{item.summary}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--hazel-soft-gold)]">
                      View piece
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <ModalShell open={selected !== null} onClose={() => setSelected(null)} panelClassName={panelClassName}>
        {selected ? (
          <div className="grid lg:grid-cols-[1fr_0.9fr]">
            <div className="relative min-h-[18rem] lg:min-h-full">
              <Image
                {...resolveHazelImageProps(selected.image)}
                src={selected.image}
                alt={selected.title}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/18 to-transparent" />
            </div>
            <div className="p-6 pt-16 md:p-8">
              <p className="hazel-meta text-[color:var(--hazel-soft-gold)]">{selected.category}</p>
              <h3 className="mt-4 text-3xl leading-tight">{selected.title}</h3>
              <p className="mt-4 text-sm text-white/70 md:text-base">{selected.summary}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="hazel-button-secondary border-white/20"
                >
                  Close viewer
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </ModalShell>
    </>
  );
}

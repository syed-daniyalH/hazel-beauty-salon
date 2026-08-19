"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { ArrowUpRight } from "lucide-react";

import { resolveHazelImageProps } from "@/lib/hazel-media";
import { JournalArticle } from "@/lib/types";
import { cn } from "@/lib/utils";

import { ModalShell } from "./modal-shell";

export function JournalBrowser({
  articles,
  eyebrow,
  title,
  summary,
}: {
  articles: JournalArticle[];
  eyebrow: string;
  title: string;
  summary: string;
}) {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<JournalArticle | null>(null);

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

  const categories = useMemo(() => ["all", ...new Set(articles.map((article) => article.category))], [articles]);

  const visibleArticles = useMemo(() => {
    if (filter === "all") {
      return articles;
    }
    return articles.filter((article) => article.category === filter);
  }, [articles, filter]);

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
          <div className="grid gap-5 lg:grid-cols-2">
            {visibleArticles.map((article) => (
              <button
                key={article.id}
                type="button"
                onClick={() => setSelected(article)}
                className="group overflow-hidden border border-white/10 bg-[color:var(--hazel-charcoal)] text-left"
              >
                <div className="grid gap-0 md:grid-cols-[0.92fr_1.08fr]">
                  <div className="relative min-h-[16rem] overflow-hidden">
                    <Image
                      {...resolveHazelImageProps(article.image, "transition duration-500 group-hover:scale-[1.03]")}
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(min-width: 1024px) 24rem, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/16 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="hazel-meta text-[color:var(--hazel-soft-gold)]">{article.category}</p>
                    </div>
                  </div>

                  <div className="p-5 md:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="hazel-meta">{article.readTime}</p>
                        <h3 className="mt-2 text-2xl leading-tight text-[color:var(--hazel-ivory)]">
                          {article.title}
                        </h3>
                      </div>
                      <ArrowUpRight className="mt-1 h-5 w-5 text-[color:var(--hazel-soft-gold)]" strokeWidth={1.5} />
                    </div>
                    <p className="mt-4 text-sm text-white/66">{article.summary}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--hazel-soft-gold)]">
                      Read editorial
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <ModalShell open={selected !== null} onClose={() => setSelected(null)} panelClassName="max-w-6xl">
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
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/45">{selected.readTime}</p>
              <p className="mt-4 text-sm text-white/70 md:text-base">{selected.summary}</p>
              <div className="mt-6 space-y-4 text-sm text-white/68">
                {selected.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="hazel-button-secondary border-white/20"
                >
                  Close article
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </ModalShell>
    </>
  );
}

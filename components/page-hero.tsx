import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  summary,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
  reverse = false,
  note,
  className,
  imagePriority = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  summary?: ReactNode;
  image: string;
  imageAlt: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  reverse?: boolean;
  note?: ReactNode;
  className?: string;
  imagePriority?: boolean;
  }) {
  const renderCta = (cta: { label: string; href: string }, className: string) => {
    const isExternal = /^(https?:\/\/|mailto:|tel:|#)/.test(cta.href);

    if (isExternal) {
      return (
        <a className={className} href={cta.href} target="_blank" rel="noreferrer">
          {cta.label}
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
        </a>
      );
    }

    return (
      <Link className={className} href={cta.href}>
        {cta.label}
        <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
      </Link>
    );
  };

  return (
    <section className={cn("hazel-section pt-8 md:pt-12", className)}>
      <div className="hazel-shell">
        <div
          className={cn(
            "grid items-end gap-8 lg:grid-cols-[1.02fr_0.98fr]",
            reverse && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1",
          )}
        >
          <div className="max-w-3xl">
            {eyebrow ? <p className="hazel-kicker mb-4 text-[color:var(--hazel-soft-gold)]">{eyebrow}</p> : null}
            <h1 className="text-4xl leading-[0.95] text-[color:var(--hazel-ivory)] md:text-6xl xl:text-[5.5rem]">
              {title}
            </h1>
            {summary ? <div className="mt-6 max-w-2xl text-sm text-white/72 md:text-base">{summary}</div> : null}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {primaryCta ? renderCta(primaryCta, "hazel-button-primary") : null}
              {secondaryCta ? renderCta(secondaryCta, "hazel-button-secondary") : null}
            </div>
            {note ? <div className="mt-8 max-w-2xl border-l border-[color:var(--hazel-outline-strong)] pl-5 text-sm text-white/62">{note}</div> : null}
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-none bg-[radial-gradient(circle_at_center,rgba(201,154,56,0.12),transparent_60%)]" />
            <div className="relative aspect-[4/5] overflow-hidden bg-[color:var(--hazel-bg)]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority={imagePriority}
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/18 via-black/8 to-black/55" />
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[color:var(--hazel-bg)] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                <div className="hazel-divider mb-4" />
                <p className="hazel-meta text-[color:var(--hazel-soft-gold)]">Hazel Noir &amp; Gold</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

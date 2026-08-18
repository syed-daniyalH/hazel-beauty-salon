import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  summary,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  summary?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <p className="hazel-kicker mb-3 text-[color:var(--hazel-soft-gold)]">{eyebrow}</p> : null}
      <h2 className="text-3xl leading-tight text-[color:var(--hazel-ivory)] md:text-5xl">{title}</h2>
      {summary ? <p className="mt-5 text-sm text-white/70 md:text-base">{summary}</p> : null}
    </div>
  );
}


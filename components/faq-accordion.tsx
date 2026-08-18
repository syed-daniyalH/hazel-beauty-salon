import { ChevronDown } from "lucide-react";

import { FaqItem } from "@/lib/types";

export function FaqAccordion({
  items,
  title = "Frequently asked questions",
}: {
  items: FaqItem[];
  title?: string;
}) {
  return (
    <section className="hazel-section">
      <div className="hazel-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="max-w-xl">
            <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">FAQs</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-5xl">{title}</h2>
            <p className="mt-5 text-sm text-white/70 md:text-base">
              These answers reflect the verified Hazel menu and booking flow. If a price says Ask Hazel, the final quote
              is confirmed after Hazel reviews your request.
            </p>
          </div>

          <div className="space-y-3">
            {items.map((item) => (
              <details key={item.id} className="hazel-card group overflow-hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left">
                  <span className="text-sm font-medium text-[color:var(--hazel-ivory)] md:text-base">
                    {item.question}
                  </span>
                  <ChevronDown className="h-4 w-4 shrink-0 text-[color:var(--hazel-soft-gold)] transition group-open:rotate-180" strokeWidth={1.5} />
                </summary>
                <div className="border-t border-white/10 px-5 pb-5 pt-4 text-sm text-white/70 md:text-base">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


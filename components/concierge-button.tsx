import Link from "next/link";

import { MessageCircleMore } from "lucide-react";

import { HAZEL_INFO } from "@/lib/hazel-data";

export function ConciergeButton() {
  return (
    <Link
      href={HAZEL_INFO.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Message Hazel on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-16 w-16 items-center justify-center border border-[color:var(--hazel-gold)] bg-[color:var(--hazel-bg)] text-[color:var(--hazel-gold)] shadow-[0_0_0_1px_rgba(201,154,56,0.12)] transition hover:scale-105 hover:bg-[color:var(--hazel-charcoal)]"
    >
      <MessageCircleMore className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
    </Link>
  );
}


import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Gem,
  Mail,
  MapPin,
  MessageCircle,
  MessageCircleMore,
  Phone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { buildPageMetadata } from "@/lib/seo";
import { HAZEL_IMAGES, HAZEL_INFO } from "@/lib/hazel-data";
import { resolveHazelImageProps } from "@/lib/hazel-media";

export const metadata = buildPageMetadata({
  title: "About Hazel",
  description:
    "Discover Hazel Beauty Salon's editorial philosophy, private sanctuary, and verified contact details in Johar Town, Lahore.",
  path: "/about",
  image: HAZEL_IMAGES.aboutHero,
});

const ABOUT_PHILOSOPHY: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Listen",
    description:
      "Before we touch a brush or shears, we listen. Understanding your vision, your lifestyle, and your comfort is the foundation of our craft.",
    icon: MessageCircle,
  },
  {
    title: "Create",
    description:
      "Artistry meets precision. We blend technical mastery with intuitive creativity to design looks that are both timeless and uniquely yours.",
    icon: Sparkles,
  },
  {
    title: "Perfect",
    description:
      "Excellence is in the details. We obsess over the final polish, ensuring every element of your experience meets the exacting Hazel standard.",
    icon: Gem,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            {...resolveHazelImageProps(HAZEL_IMAGES.aboutHero)}
            src={HAZEL_IMAGES.aboutHero}
            alt="Close-up editorial beauty hero for Hazel Beauty Salon"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/4 via-transparent to-black/22" />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--hazel-bg)]/56 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 flex min-h-[calc(100vh-5rem)] items-center justify-center px-0 py-20">
          <div className="hazel-shell w-full text-center">
            <div className="mx-auto max-w-4xl">
              <h1 className="mx-auto max-w-4xl text-[clamp(3rem,7vw,7.5rem)] leading-[0.92] tracking-[-0.04em] text-white drop-shadow-[0_0_28px_rgba(0,0,0,0.35)]">
                BEAUTY IS PERSONAL.
                <br />
                <span className="italic text-[color:var(--hazel-soft-gold)]">SO IS EVERYTHING WE DO.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base font-light text-white/78 md:text-xl">
                A premium sanctuary in Johar Town, Lahore, where expert artistry meets a deeply personal touch.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a className="hazel-button-primary" href="#philosophy">
                  Discover our philosophy
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--hazel-ivory)] py-16 text-[#121212] md:py-24">
        <div className="hazel-shell">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="relative lg:col-span-5">
              <div className="relative min-h-[30rem] overflow-hidden border border-black/10 shadow-[0_24px_80px_rgba(7,7,7,0.16)] md:min-h-[40rem]">
                <Image
                  {...resolveHazelImageProps(HAZEL_IMAGES.aboutDetail)}
                  src={HAZEL_IMAGES.aboutDetail}
                  alt="Editorial Hazel salon story image"
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-32 w-32 border border-[color:var(--hazel-gold)]/40" />
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <p className="hazel-kicker text-[color:var(--hazel-gold)]">The Hazel Story</p>
              <h2 className="mt-5 text-[clamp(2.5rem,4vw,4.75rem)] leading-[0.96] tracking-[-0.03em] text-[#121212]">
                CREATED FOR BEAUTY
                <br />
                <span className="italic text-[#7b5800]">THAT FEELS LIKE YOU.</span>
              </h2>

              <div className="mt-8 space-y-6 text-base text-[#313030] md:text-lg">
                <p>
                  At Hazel, we believe that true luxury lies in being seen. Our salon wasn&apos;t born from a desire
                  to dictate trends, but to uncover the unique aesthetic identity of every individual who walks
                  through our doors.
                </p>
                <p>
                  We approach beauty not as a standard to meet, but as a deeply personal narrative to be written.
                  Every stroke of the brush, every consultation, and every treatment is a dialogue between our
                  artisans and your inherent elegance.
                </p>
                <p className="border-t border-[color:var(--hazel-gold)]/30 pt-6">
                  Professional care should always feel personal. Welcome to your new beauty sanctuary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="philosophy" className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
          <div className="h-[800px] w-[800px] rounded-full bg-[color:var(--hazel-gold)] blur-[150px]" />
        </div>

        <div className="hazel-shell relative z-10">
          <div className="text-center">
            <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">Our Philosophy</p>
            <div className="mx-auto mt-6 h-px w-16 bg-[color:var(--hazel-soft-gold)]" />
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {ABOUT_PHILOSOPHY.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group border border-white/10 bg-[rgba(18,18,18,0.82)] p-8 transition duration-500 hover:-translate-y-1 hover:border-[color:var(--hazel-gold)]/30 md:p-10"
                >
                  <Icon
                    className="mb-8 h-12 w-12 text-[color:var(--hazel-soft-gold)] transition-transform duration-500 group-hover:scale-105"
                    strokeWidth={1.5}
                  />
                  <h3 className="mb-4 text-2xl uppercase tracking-[0.18em] text-white md:text-[1.65rem]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/70 md:text-base">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="sanctuary" className="border-t border-white/10 bg-[color:var(--hazel-charcoal)] py-16 md:py-24">
        <div className="hazel-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.98fr] lg:items-center">
            <div>
              <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">The Sanctuary</p>
              <h2 className="mt-5 text-[clamp(2.5rem,4vw,4.75rem)] leading-[0.94] tracking-[-0.03em] text-white">
                Located in the heart of Johar Town, our salon is designed to be an escape from the city&apos;s pulse.
              </h2>
              <p className="mt-6 max-w-2xl text-base text-white/70 md:text-lg">
                A quiet space dedicated to your rejuvenation, with verified contact details and a concierge flow that
                keeps the experience personal.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin
                    className="mt-1 h-5 w-5 shrink-0 text-[color:var(--hazel-soft-gold)]"
                    strokeWidth={1.5}
                  />
                  <div>
                    <h3 className="text-lg text-white">Visit Us</h3>
                    <p className="mt-2 max-w-xl text-sm text-white/68 md:text-base">{HAZEL_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-[color:var(--hazel-soft-gold)]" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-lg text-white">Contact</h3>
                    <div className="mt-2 space-y-2 text-sm text-white/68 md:text-base">
                      <a className="block transition hover:text-[color:var(--hazel-soft-gold)]" href={`tel:${HAZEL_INFO.phoneTel}`}>
                        {HAZEL_INFO.phoneDisplay}
                      </a>
                      <a
                        className="block transition hover:text-[color:var(--hazel-soft-gold)]"
                        href={HAZEL_INFO.whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        WhatsApp {HAZEL_INFO.whatsappDisplay}
                      </a>
                      <a className="block transition hover:text-[color:var(--hazel-soft-gold)]" href={`mailto:${HAZEL_INFO.email}`}>
                        {HAZEL_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  className="hazel-button-primary"
                  href={HAZEL_INFO.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Directions
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
                <a
                  className="hazel-button-secondary border-white/20"
                  href={HAZEL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Hazel
                </a>
              </div>
            </div>

            <div className="relative min-h-[32rem] overflow-hidden bg-[color:var(--hazel-bg)]">
              <Image
                {...resolveHazelImageProps(
                  HAZEL_IMAGES.map,
                  "transition-transform duration-700 hover:scale-[1.03] opacity-85",
                )}
                src={HAZEL_IMAGES.map}
                alt="Hazel salon location map"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-[color:var(--hazel-gold)]/20 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--hazel-bg)] py-16 text-center md:py-24">
        <div className="hazel-shell">
          <h2 className="mx-auto max-w-5xl text-[clamp(2.5rem,4.5vw,4.8rem)] leading-[0.95] tracking-[-0.04em] italic text-white">
            &quot;WHERE BEAUTY MEETS PERFECTION.&quot;
          </h2>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[color:var(--hazel-ivory)] py-20 text-center text-[#121212] md:py-28">
        <div className="hazel-shell">
          <p className="hazel-kicker text-[color:var(--hazel-gold)]">Private concierge support</p>
          <h2 className="mt-5 text-[clamp(2.5rem,4vw,4.75rem)] leading-[0.96] tracking-[-0.03em] text-[#121212]">
            LET&apos;S CREATE SOMETHING BEAUTIFUL.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base text-[#313030] md:text-lg">
            Experience the Hazel standard of personalized beauty care.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              className="inline-flex items-center justify-center gap-2 bg-[color:var(--hazel-charcoal)] px-6 py-4 text-[0.75rem] font-bold uppercase tracking-[0.14em] text-[color:var(--hazel-ivory)] transition hover:bg-[color:var(--hazel-bg)] hover:scale-[1.01]"
              href="/book-appointment"
            >
              Book Appointment
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <a
              className="inline-flex items-center justify-center gap-2 border-b border-[color:var(--hazel-charcoal)] pb-1 text-[0.75rem] font-bold uppercase tracking-[0.14em] text-[color:var(--hazel-charcoal)] transition hover:border-[color:var(--hazel-gold)] hover:text-[color:var(--hazel-gold)]"
              href={HAZEL_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Hazel
              <MessageCircleMore className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

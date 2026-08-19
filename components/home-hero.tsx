"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useState, type PointerEvent as ReactPointerEvent } from "react";

import { HAZEL_IMAGES, HAZEL_INFO } from "@/lib/hazel-data";
import { resolveHazelImageProps } from "@/lib/hazel-media";

const heroEase = [0.22, 1, 0.36, 1] as const;

const contentGroupVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const contentItemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(3px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: heroEase,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 1.03,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.95,
      ease: heroEase,
      delay: 0.12,
    },
  },
};

export function HomeHero() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [canParallax, setCanParallax] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 100, damping: 22, mass: 0.35 });
  const springY = useSpring(pointerY, { stiffness: 100, damping: 22, mass: 0.35 });
  const parallaxX = useTransform(springX, [-1, 1], [-8, 8]);
  const parallaxY = useTransform(springY, [-1, 1], [-6, 6]);
  const shouldAnimate = !prefersReducedMotion;
  const imageProps = resolveHazelImageProps(HAZEL_IMAGES.homeHero);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanParallax(mediaQuery.matches);

    update();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", update);
      return () => mediaQuery.removeEventListener("change", update);
    }

    mediaQuery.addListener(update);
    return () => mediaQuery.removeListener(update);
  }, []);

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!canParallax || prefersReducedMotion || event.pointerType !== "mouse") {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;

    pointerX.set(x);
    pointerY.set(y);
  };

  const resetParallax = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section className="hazel-section relative isolate overflow-hidden pt-8 pb-0 md:pt-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[70vh] bg-[radial-gradient(circle_at_82%_18%,rgba(201,154,56,0.08),transparent_42%),radial-gradient(circle_at_10%_12%,rgba(18,18,18,0.72),transparent_40%)]"
      />

      <div className="hazel-shell">
        <div className="grid gap-10 lg:min-h-[calc(100svh-10rem)] lg:grid-cols-[0.92fr_1.08fr] lg:items-center xl:gap-14">
          <motion.div
            className="max-w-2xl pt-2"
            variants={contentGroupVariants}
            initial={shouldAnimate ? "hidden" : false}
            animate="show"
          >
            <motion.p
              className="hazel-kicker text-[color:var(--hazel-soft-gold)]"
              variants={contentItemVariants}
            >
              HAZEL BEAUTY SALON · JOHAR TOWN, LAHORE
            </motion.p>

            <motion.h1
              id="home-hero-title"
              className="mt-4 max-w-3xl text-[clamp(2.6rem,6vw,5.25rem)] leading-[0.96] tracking-[-0.04em] text-[color:var(--hazel-ivory)] sm:text-[clamp(3rem,5.5vw,5.25rem)]"
              variants={contentItemVariants}
            >
              <span className="block">Beauty,</span>
              <span className="block">
                made <span className="italic text-[color:var(--hazel-soft-gold)]">personal.</span>
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-2xl text-[15px] leading-7 text-white/72 md:text-base"
              variants={contentItemVariants}
            >
              A refined beauty salon in Johar Town for personalised hair, skin, makeup and bridal care, thoughtfully
              shaped around you and your occasion.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
              variants={contentItemVariants}
            >
              <Link className="hazel-button-primary w-full sm:w-auto" href="/book-appointment">
                Book Your Experience
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
              <Link className="hazel-button-secondary w-full sm:w-auto" href="/services">
                Explore Services
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </motion.div>

            <motion.div
              className="mt-8 max-w-2xl border-l border-[color:var(--hazel-outline-strong)] pl-5 text-sm text-white/62"
              variants={contentItemVariants}
            >
              <p>{HAZEL_INFO.byAppointmentNote} Use WhatsApp or the request form to confirm availability.</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative lg:pl-6"
            variants={imageVariants}
            initial={shouldAnimate ? "hidden" : false}
            animate="show"
          >
            <div className="absolute -inset-8 -z-10 bg-[radial-gradient(circle_at_72%_28%,rgba(201,154,56,0.08),transparent_58%)]" />

            <div
              className="relative aspect-[4/5] overflow-hidden rounded-none border border-[rgba(201,154,56,0.15)] bg-[color:var(--hazel-bg)] shadow-[0_22px_70px_rgba(0,0,0,0.32)] md:aspect-[5/6]"
              onPointerLeave={resetParallax}
              onPointerMove={handlePointerMove}
            >
              <motion.div
                className="absolute inset-0 will-change-transform"
                style={canParallax && !prefersReducedMotion ? { x: parallaxX, y: parallaxY } : undefined}
              >
                <Image
                  {...imageProps}
                  src={HAZEL_IMAGES.homeHero}
                  alt="Editorial portrait representing Hazel Beauty Salon in Johar Town, Lahore"
                  fill
                  priority
                  sizes="(min-width: 1280px) 56vw, (min-width: 1024px) 54vw, 100vw"
                />
              </motion.div>

              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,7,0.9)_0%,rgba(7,7,7,0.7)_18%,rgba(7,7,7,0.16)_54%,rgba(7,7,7,0)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(7,7,7,0.7))]" />

              <div className="absolute left-4 top-4 inline-flex items-center gap-2 border border-white/10 bg-[rgba(7,7,7,0.34)] px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/78 backdrop-blur-[8px]">
                <span className="h-1.5 w-1.5 bg-[color:var(--hazel-gold)]" />
                HAZEL · JOHAR TOWN
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

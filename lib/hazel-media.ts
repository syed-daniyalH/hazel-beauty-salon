import { HAZEL_IMAGES } from "./hazel-data";
import { cn } from "./utils";

export type HazelImageTreatment = {
  focalClassName?: string;
  toneClassName?: string;
  unoptimized?: boolean;
};

export const HAZEL_IMAGE_TREATMENTS: Record<string, HazelImageTreatment> = {
  [HAZEL_IMAGES.homeHero]: {
    focalClassName: "object-[78%_center] md:object-[80%_center] lg:object-[82%_center]",
    toneClassName: "saturate-90 contrast-105",
  },
  [HAZEL_IMAGES.servicesHero]: {
    focalClassName: "object-[70%_38%] md:object-[72%_34%]",
    toneClassName: "saturate-90 contrast-105",
    unoptimized: true,
  },
  [HAZEL_IMAGES.bridalHero]: {
    focalClassName: "object-[50%_26%] md:object-[50%_30%]",
    toneClassName: "saturate-95 contrast-105",
    unoptimized: true,
  },
  [HAZEL_IMAGES.packagesHero]: {
    focalClassName: "object-center",
    toneClassName: "saturate-95 contrast-105",
    unoptimized: true,
  },
  [HAZEL_IMAGES.aboutDetail]: {
    focalClassName: "object-[50%_18%] md:object-[50%_14%]",
    toneClassName: "saturate-95 contrast-105",
    unoptimized: true,
  },
  [HAZEL_IMAGES.bridalApproach]: {
    focalClassName: "object-[50%_24%] md:object-[50%_18%]",
    toneClassName: "saturate-95 contrast-105",
    unoptimized: true,
  },
  [HAZEL_IMAGES.editUpdo]: {
    focalClassName: "object-[50%_40%] md:object-[50%_34%]",
    toneClassName: "saturate-95 contrast-105",
    unoptimized: true,
  },
  [HAZEL_IMAGES.editDetail]: {
    focalClassName: "object-center",
    toneClassName: "saturate-92 contrast-105",
    unoptimized: true,
  },
  [HAZEL_IMAGES.editEye]: {
    focalClassName: "object-center",
    toneClassName: "saturate-95 contrast-105",
    unoptimized: true,
  },
  [HAZEL_IMAGES.collectionBridal]: {
    focalClassName: "object-center",
    toneClassName: "saturate-92 contrast-105",
    unoptimized: true,
  },
  [HAZEL_IMAGES.collectionVanity]: {
    focalClassName: "object-center",
    toneClassName: "saturate-92 contrast-105",
    unoptimized: true,
  },
  [HAZEL_IMAGES.collectionPalette]: {
    focalClassName: "object-center",
    toneClassName: "saturate-92 contrast-105",
    unoptimized: true,
  },
  [HAZEL_IMAGES.collectionTexture]: {
    focalClassName: "object-center",
    toneClassName: "saturate-92 contrast-105",
    unoptimized: true,
  },
  [HAZEL_IMAGES.collectionBottles]: {
    focalClassName: "object-center",
    toneClassName: "saturate-92 contrast-105",
    unoptimized: true,
  },
  [HAZEL_IMAGES.collectionEye]: {
    focalClassName: "object-center",
    toneClassName: "saturate-95 contrast-105",
    unoptimized: true,
  },
  [HAZEL_IMAGES.collectionNikkah]: {
    focalClassName: "object-center",
    toneClassName: "saturate-95 contrast-105",
    unoptimized: true,
  },
  [HAZEL_IMAGES.collectionBarat]: {
    focalClassName: "object-center",
    toneClassName: "saturate-95 contrast-105",
    unoptimized: true,
  },
  [HAZEL_IMAGES.servicesStillLife]: {
    focalClassName: "object-center",
    toneClassName: "saturate-92 contrast-105",
    unoptimized: true,
  },
  [HAZEL_IMAGES.map]: {
    focalClassName: "object-center",
    toneClassName: "saturate-90 contrast-105",
    unoptimized: true,
  },
};

export function isRemoteHazelImage(src: string) {
  return /^https?:\/\//i.test(src);
}

export function resolveHazelImageProps(src: string, className?: string) {
  const treatment = HAZEL_IMAGE_TREATMENTS[src];

  return {
    className: cn("object-cover", treatment?.focalClassName, treatment?.toneClassName, className),
    unoptimized: treatment?.unoptimized ?? isRemoteHazelImage(src),
  };
}

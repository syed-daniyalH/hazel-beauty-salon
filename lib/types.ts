export type SitePath =
  | "/"
  | "/services"
  | "/bridal"
  | "/about"
  | "/the-hazel-edit"
  | "/packages"
  | "/collections"
  | "/experts"
  | "/beauty-journal"
  | "/contact"
  | "/book-appointment";

export interface NavLink {
  label: string;
  href: SitePath;
  description: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  category: "hair" | "skin" | "makeup" | "bridal" | "waxing" | "hands-feet";
  section: string;
  priceLabel: string;
  summary: string;
  details?: string[];
  badge?: string;
  image: string;
}

export interface PackageItem {
  id: string;
  name: string;
  category: "makeup-hair" | "skin-glow" | "hair" | "bridal";
  priceLabel: string;
  summary: string;
  includes: string[];
  features?: string[];
  timeline?: string;
  note?: string;
  badge?: string;
  image: string;
}

export interface BridalDiaryItem {
  id: string;
  title: string;
  summary: string;
  image: string;
}

export interface LookbookItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  image: string;
}

export interface EditorialCard {
  id: string;
  title: string;
  summary: string;
  icon: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  image: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

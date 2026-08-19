import {
  BridalDiaryItem,
  EditorialCard,
  FaqItem,
  JournalArticle,
  LookbookItem,
  NavLink,
  PackageItem,
  ServiceItem,
  SitePath,
} from "./types";

export const HAZEL_PATHS: Array<{ label: string; href: SitePath }> = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Bridal", href: "/bridal" },
  { label: "The Hazel Edit", href: "/the-hazel-edit" },
  { label: "About", href: "/about" },
  { label: "Packages", href: "/packages" },
  { label: "Hazel Collections", href: "/collections" },
  { label: "Our Experts", href: "/experts" },
  { label: "Beauty Journal", href: "/beauty-journal" },
  { label: "Contact", href: "/contact" },
  { label: "Book Appointment", href: "/book-appointment" },
];

export const HAZEL_NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/", description: "Salon overview and highlights" },
  { label: "Services", href: "/services", description: "Search the service menu" },
  { label: "Bridal", href: "/bridal", description: "Bridal services and consultation" },
  { label: "The Hazel Edit", href: "/the-hazel-edit", description: "Portfolio and transformations" },
  { label: "About", href: "/about", description: "Philosophy and location" },
  { label: "Packages", href: "/packages", description: "Package options and enquiries" },
  { label: "Hazel Collections", href: "/collections", description: "Portfolio archive" },
  { label: "Our Experts", href: "/experts", description: "Studio standards and process" },
  { label: "Beauty Journal", href: "/beauty-journal", description: "Practical notes and pricing" },
  { label: "Contact", href: "/contact", description: "Directions, phone, and form" },
  { label: "Book Appointment", href: "/book-appointment", description: "Appointment request form" },
];

export const HAZEL_PRIMARY_NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/", description: "Salon overview and highlights" },
  { label: "Services", href: "/services", description: "Search the service menu" },
  { label: "Bridal", href: "/bridal", description: "Bridal services and consultation" },
  { label: "About", href: "/about", description: "Philosophy and location" },
  { label: "Packages", href: "/packages", description: "Package options and enquiries" },
  { label: "Contact", href: "/contact", description: "Directions, phone, and form" },
];

export const HAZEL_INFO = {
  name: "Hazel Beauty Salon",
  tagline: "Beauty care, made personal.",
  location: "Johar Town, Lahore, Pakistan",
  address:
    "Dr Munir Avenue, Near Ghousia Chowk, College Road, Johar Town, Lahore 54770, Pakistan",
  phoneDisplay: "0334 9794441",
  phoneTel: "+923349794441",
  whatsappDisplay: "0335 4464192",
  whatsappTel: "+923354464192",
  email: "hello@hazelbeauty.com",
  instagram: "@hazel.beautysalon",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Dr+Munir+Avenue+Near+Ghousia+Chowk+College+Road+Johar+Town+Lahore+54770+Pakistan",
  whatsappUrl:
    "https://wa.me/923354464192?text=Hello%20Hazel%2C%20I%20would%20like%20to%20make%20an%20appointment%20request.",
  byAppointmentNote: "Appointments are handled by request only.",
};

export const HAZEL_IMAGES = {
  homeHero:
    "/hero-home.png",
  servicesHero:
    "/services-hero.jpg",
  servicesStillLife:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC5wlJOc20ZKe6PEDEfiFf5X3OWDt5IYUt6FDXuhmPBeMeZ762NVGwJssMB_msnpcowVfuIPplNxkoSlSQfaAVzyK1aDq5EHPf4zcGCPHfwjnpkvXFun2IfZPsDKBZt5-iCRiJ8_zHaXP6-z-8TwJCgR8b0tVz5cFd1mJgq_VNRum_HByyLgf87K1nVh4gbETT_FbJFXqXxqApJLDDtlUAzRtvIsO-KUocv_dik_SZQ5GxWpWERWBqYUA",
  bridalHero:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBOjGpZcCPnBU4kX3XAOWlJZGpcz7bzmB4W6pGv1oQiNDXZGi0QTkCWWZq3esaJzhF_y8XUbNM3dhHkeUEDD-hVmnVVDnfK3YYgb1Y0hISo7BOT1K8yL_DUXMmn0snaxDJAVxK3gEpyqkKV_VbjWrK5oNPl36TakuljEDs1MaXQfj1-jCr9l9phsfLjgQdF0afqr7mkXEEmD-8SVAQ29GGHcTfMNP-87WHvXXOcLH3x9VttnExbHs9xkw",
  bridalApproach:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDYg_sbxUDMkwzWzSwFcV4T3QCpjO9CHa_JhYDsJh842keA05qU7hVsqmeip5ULco2ZNmKWIqAfV5gC7BU1qXko0Sgmwfjx0we3O_QbL9FhdP9igkxJzO-bkgWmpXbrCDARTnASPzhVw99E0c6sgJJt2SLBYde6K_IzIjhC32QQpXkaRUBBo7q8OzVutOJq_omdC9I-LXKlY5VEyWhYllQuSrOde5BjfWDy6sKVd9KR9yN6Dq-50EIk0A",
  bridalDiaryNikkah:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBqTrWQfi5pFhYOfPfP13Gqv4_qdizv9Hh4VVE3awcCVIffRgK7O8QrgTa5PvnkMreKpQ6juqAes5mb5asKGcCEsS2YikxEnX6q4kuVrIyEqnA29BbP7HQMsnR-X22X6fPBO908N8A-T5ASFX9UXYYBWqrD5xcHFECm3lUSAvjM3oXrzS-k4gpX8SqBPpLdPestLlKruZS9-3wsTzLloDFO_ikaAmEVFfCkCCrL_dZu_hp44RoebzH4PA",
  packagesHero:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCHKJZ9EjINPYPlxfepvupo5kZKFg9h1-lGwsh_QWaTYHr5W4K-wXonvIRrk0WFj1EaTrPY8R1I0vCc2ci55CUoftpLNOVn2Z8GIMwaJjEEBw0n6YLXLW3vuzwyGp8WzP0I3myWw2uxLhV9Y-chJQzkgp1IPosbtyU5U0UuOJDQL68KMeAq5w9SDCVwo0EXn8_NZudeegvRFGzeMH9pkOOT4peLwNk3HIzvlf8oNsIUEvEKy9pLQDQTcw",
  aboutHero:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBv66S_juRKSa4DhEEk3U9WcwM1_Dj831IFAGLTrfgkf0D8W8oVekth4N1tmgTcS3Mk9yAE_JWu1fTXrj8G9xJZmrEGVBfQHMV53jNEOEKP2TKDvleBrhuLtWQplOWDVeKg0aTzXW6oVrSlFBMZrEkAvxiNudkjFa4onwXnwKa85tXNXedZBzohvF0PBuOkEzqc7zhR3kmTCTlLtZXeRtmVdwKyCX0sbMDklWfgxc8A8ZuiEWM8g8GgJA",
  aboutDetail:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBv66S_juRKSa4DhEEk3U9WcwM1_Dj831IFAGLTrfgkf0D8W8oVekth4N1tmgTcS3Mk9yAE_JWu1fTXrj8G9xJZmrEGVBfQHMV53jNEOEKP2TKDvleBrhuLtWQplOWDVeKg0aTzXW6oVrSlFBMZrEkAvxiNudkjFa4onwXnwKa85tXNXedZBzohvF0PBuOkEzqc7zhR3kmTCTlLtZXeRtmVdwKyCX0sbMDklWfgxc8A8ZuiEWM8g8GgJA",
  editHero:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB7UXjO48l1cEnOeeUvL0fPucfXUIEULx1EjpColcYU4ElKEvhjv41afq7w0iGc0pvBoshBw9le45TMkWEp9VLj1dAKIwp0PZbHogQu-tnPhFdzJfM4gWDxevOnXIxk9CEykDn0znd_WOAkKnEUju3mPqqGXaa5GFVO4nPaeH47qJHIGoVs875mIQfDkNTgDw4615HRqiNIT85nZlhCva8hfyRl2RupENU3fOm9Cs8nHYwWkZ4Tp2ejhA",
  editDetail:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBGWWuNjKyqkBMI-cWsdHgGUNpqQGtfIjTkXC2ecQ4ydlRasQm3x8Mjn6HrjvKF_8AYI3lMgBDML855xsx_WX1XoTmBeJvH6tl9nWtYDjtNZaZzsCdwLOD96zazAZ4uztihouPG8rC-BHHAEy3UvuxJq2YdHg20L0qUOHJSpWArL3kdbKIY6LA_Qq_KGzAd_heFQxLR4kHy6lCd5qljQ1KJw3jb5_v9CnfQEWik2Jco7QfX4iGaSwu_rg",
  editBridal:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDYg_sbxUDMkwzWzSwFcV4T3QCpjO9CHa_JhYDsJh842keA05qU7hVsqmeip5ULco2ZNmKWIqAfV5gC7BU1qXko0Sgmwfjx0we3O_QbL9FhdP9igkxJzO-bkgWmpXbrCDARTnASPzhVw99E0c6sgJJt2SLBYde6K_IzIjhC32QQpXkaRUBBo7q8OzVutOJq_omdC9I-LXKlY5VEyWhYllQuSrOde5BjfWDy6sKVd9KR9yN6Dq-50EIk0A",
  editEye:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuADW6N5v57gikb5OICr4HikVw8taasp6XaPHGa7kJC1Wbc1pq6NCF7VYVGi6_jFqA995yBupix_fvX0cGUz_AydXSkUBlFiYG4mHvkfagG6SXIz8BrB4in0529RP0UpL2sw0MR4oD9leIeYh5uHeIYxpfvtYKS2-qQC8SjJCS6g46_rc3m4OlpH4U9XNVeUq0EfIWqJY5E6dErQMDXnAQmwdo1UFCkD7WdOe7gfsIdA4htVR9UVUikf0w",
  editUpdo:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB7UXjO48l1cEnOeeUvL0fPucfXUIEULx1EjpColcYU4ElKEvhjv41afq7w0iGc0pvBoshBw9le45TMkWEp9VLj1dAKIwp0PZbHogQu-tnPhFdzJfM4gWDxevOnXIxk9CEykDn0znd_WOAkKnEUju3mPqqGXaa5GFVO4nPaeH47qJHIGoVs875mIQfDkNTgDw4615HRqiNIT85nZlhCva8hfyRl2RupENU3fOm9Cs8nHYwWkZ4Tp2ejhA",
  collectionVanity:
    "https://lh3.googleusercontent.com/aida/AP1WRLtU8o4bOeCmNFWp3Oc_2TUoNLS6TfNknMy8mlKspgg4Wv4V8trEIvMDcM3Joyxp59T8qGF6zWHxk9Y_EQiUq1MRPv1-fJQVFQ4telRsourIeaC4bF1pilKQUNHMFDdogmMcV4X1ZrF7bIjCTLpXeWah1JUq80oBUERzse0ZWGPa4h48M-waHr9B8ZS6Rom7I7ncNoQKH6bQ7ZnIymC3_k_GID5ls9VUX8ZtITA_9URMNgGbsyif86CcoFyt",
  collectionPalette:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDT_ldQDbAkRHeK1mhrpSoClQBcWtsAeYhJwp0K5T9C0wtHGBf1UoTGryUO0ISPwLVqKhds9GO9NleS1LkMj7YsXkmusN-FCXB39boIe-9AHGACmkGYsBV9S1xXSawMg8GkAfCZEaTE4Pcm-9O4_-YyMJTlvHOq6sXItIBi5XVI3QFASo0NclMSVihIbJlvyc0dQYjEAbokIX04VYFz5QNu2Ri_OhW_6uC26Z4aOK13smBY-9-mtN8YbQ",
  collectionTexture:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBAjQcoMd0HaVIOO5bnVrd0FDYJ3Cr2cTIdHgJYwdrL2bcHkxg_LPC-zFpsy7ViscaRtgfAkUlY29jrfn3QcSn1NSej4PdmULZ43Gd1n8kxl7VK1YufGd8rcEyPbwrm8ntFVDhPHftffUApwnAjlOZDxcDtD6FakKxoySxCcUxcdiKvDCpZC6G2R8jn-OS1G49SJXYmFhi5KDVQk8-ZK9Dx7ud0donggaVLh4Yvhjxj-D5KImNvqjEhcg",
  collectionBottles:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA6UZ6dvyHOufl6XA6totIPSRCnLaLFlltz6W6LmIQG6TMawKC1s2jK19RTNDtKX4sZCcVId4nftSj_fKibTgvaUsSY1HXd7YG4ul7-BMygjwAtJkPxS3N5OiDO03QaI-sitxUIiJ4J2bDIKJOFYnkrSQr9da6Cx3es2OnTZSLlaLZxMu9h-qPGsMGtZvB9ZrW-PM_7ZtGUrdX4KDTUcdKOGaXJKGCjbZssTbXeg6lTnMu8VjxxT6We-Q",
  collectionEye:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAqLpafSRDfiUtUwowiIoNsd3LqW1omXixzJvhESriHmuEpbf-81-BgJT1O--aMXar105S1DzmGhWzT9xJk7I5nFoB1zX5CV2T1J3cun8zpRwUzOt80Y4xQYi8WzBdKygxf2Xx2XrNdClPfHsjTfkoTfKwNwj12l8F2ErWlE8BZAWPeFf0zad3Wie3Vj2jMrgMiRpQz8cyvP12sz_LzU8EsjVsGv0Ko1GUcw0aEvZ7fh7cceb1BPR02-Q",
  collectionBridal:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCyskjrBy-9jjPke3yJ8yxXsCbFWxOCtJMTjs91GS7yO5xvIHhDdG4_IMHf_k6_1-GZ1dqOYluRe2e0AxctBOKQk3dW0LbXeE6XDfwFgiuB89ZZZbKk2sKksDGhPYBZJpzh9TBSkNS8uGTkZioiIhXOrtj4-5eAlKru7YxHhr9ASGVQvLFjSYbXaWAqskTj4oUbVMMtWvz6flZsSN4ir91-02-OVQwVvOKANjrHpNuftKE8cXtQoc7Dmw",
  collectionNikkah:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA_WY0187DkuvFTBCHCmTsCbiVLLM_MyHdzyU31Zmy4xKN6Pn3Qvijei8trnniiHiIlfMDcTDUCqT8YcT_yvtjuyrY6thcdfsdlU8Zem490Hg-WHeOBhXrAZJ2x30sZrJAcqkgRK8rJcMA6KDmSbZUVRIC20RVUjp7q87UxlcvnIy4rdmbv6R3fGUq2wiFAS_v0dCOXFTSrig2o8ou1wezwCpIOJF0BD5-TJv3LtKWPMzgXKJ01omvRqw",
  collectionBarat:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCgvk6Y6EveGaXql56g3iR5MlK_7hAeWGXk-fVX9l8P0mH83fP7DRJD6Gu-5VtAPiYzS_nHzw8XZ1YkWPahxVtc5ulYasjy_omgGkFqvo4RmLCREBUCKoyc5UMhlcwKRyhiJ89bk0EH4EuT2EZq02mSOCTIrByZ_Q7z5N55toMfNmPprElKneC4HEHYHmvPaMknvT3z0Jtq75pUZ3S6vtZTOvHIZk85D9qH3zuLOdrUELDB0_Rzh-R1_w",
  map:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC5Mq2anbIV9K8vOJky_ntbjoylq0P09meuJx7ovgxzS08ry5UnHQsMrl0mwfF8Ml4rOt6l0IbqMi3V2vyNiSO3fJP3BVZTg5er3Fww2Gea41KpIzVPtAxzyW2anMfOkFT9-zRTYyT5-ufQzBZvzevobjJiap-0LIu_efET3PubjYzOaAbcMQOgg9aHJHBA2iL9rV97a3UrCESJ7_skGV_vKVk_vx63-lTLtWLXhQ0r3oYRFPjjr_Qfcw",
};

export const HAZEL_EDITORIAL_CARDS: EditorialCard[] = [
  {
    id: "personalised-care",
    title: "Personalised Care",
    summary: "Consultations start with your event, routine, and what feels comfortable.",
    icon: "leaf",
  },
  {
    id: "professional-approach",
    title: "Professional Approach",
    summary: "Clear communication and careful technique from start to finish.",
    icon: "badge-check",
  },
  {
    id: "hygiene-comfort",
    title: "Hygiene & Comfort",
    summary: "Clean tools, tidy stations, and a calm space.",
    icon: "sparkles",
  },
  {
    id: "occasion-expertise",
    title: "Occasion Expertise",
    summary: "Bridal and event work tailored to the day.",
    icon: "gem",
  },
];

export const HAZEL_HERO_SERVICE_TILES = [
  {
    eyebrow: "01",
    title: "Hair",
    summary: "Precision cuts, color, and styling.",
  },
  {
    eyebrow: "02",
    title: "Skin",
    summary: "Facials and polished skin rituals.",
  },
  {
    eyebrow: "03",
    title: "Makeup",
    summary: "Soft glam, event, and bridal artistry.",
  },
  {
    eyebrow: "04",
    title: "Bridal",
    summary: "Nikkah, Barat, and Walima looks.",
  },
  {
    eyebrow: "05",
    title: "Beauty Care",
    summary: "Waxing, brows, and finishing touches.",
  },
];

export const HAZEL_SERVICE_SECTIONS = [
  {
    id: "facials-skin",
    label: "Facials & Skin",
    description: "Professional facials and skin-polish services focused on care, freshness, and a polished finish.",
  },
  {
    id: "hair",
    label: "Hair",
    description: "Haircuts and styling designed around your preferred shape, finish, and occasion.",
  },
  {
    id: "makeup",
    label: "Makeup",
    description: "Makeup and makeup-plus-hairstyling options for everyday polish or special events.",
  },
  {
    id: "waxing-brows",
    label: "Waxing & Brows",
    description: "Practical waxing and brow-shaping services with a light touch.",
  },
  {
    id: "manicure-pedicure",
    label: "Manicure & Pedicure",
    description: "Hand and foot care available by request.",
  },
];

export const HAZEL_SERVICE_FILTERS = [
  { id: "all", label: "All Services" },
  { id: "facials-skin", label: "Facials & Skin" },
  { id: "hair", label: "Hair" },
  { id: "makeup", label: "Makeup" },
  { id: "waxing-brows", label: "Waxing & Brows" },
  { id: "manicure-pedicure", label: "Manicure & Pedicure" },
];

export const HAZEL_SERVICES: ServiceItem[] = [
  {
    id: "facial-gold-jelly",
    name: "Gold Facial with Crystal Jelly",
    category: "facials-skin",
    section: "Facials & Skin",
    priceLabel: "PKR 5,000",
    summary: "A richer facial focused on hydration and a luminous finish.",
    badge: "Signature",
    image: HAZEL_IMAGES.collectionPalette,
  },
  {
    id: "facial-zafrani-korean",
    name: "Zafrani Korean Facial",
    category: "facials-skin",
    section: "Facials & Skin",
    priceLabel: "PKR 3,000",
    summary: "A brightening facial with a smoother, more refined finish.",
    badge: "Signature",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "facial-gold",
    name: "Gold Facial",
    category: "facials-skin",
    section: "Facials & Skin",
    priceLabel: "PKR 2,000",
    summary: "A classic facial for a clean, refreshed glow.",
    image: HAZEL_IMAGES.collectionBottles,
  },
  {
    id: "facial-brightening",
    name: "Brightening Facial",
    category: "facials-skin",
    section: "Facials & Skin",
    priceLabel: "PKR 1,500",
    summary: "A lighter facial for a fresh and polished look.",
    image: HAZEL_IMAGES.collectionBottles,
  },
  {
    id: "facial-acne-care",
    name: "Acne Care Facial",
    category: "facials-skin",
    section: "Facials & Skin",
    priceLabel: "PKR 3,000",
    summary: "A focused facial for blemish-prone skin.",
    image: HAZEL_IMAGES.collectionBottles,
  },
  {
    id: "skin-gold-polish",
    name: "Gold Skin Polish",
    category: "facials-skin",
    section: "Facials & Skin",
    priceLabel: "PKR 2,000",
    summary: "A brightening polish with a smooth finish.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "skin-polish-plus-facial",
    name: "Skin Polish + Facial",
    category: "facials-skin",
    section: "Facials & Skin",
    priceLabel: "PKR 3,000",
    summary: "A combined polish and facial for a cleaner, softer feel.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "skin-essential-polish",
    name: "Essential Skin Polish",
    category: "facials-skin",
    section: "Facials & Skin",
    priceLabel: "PKR 500",
    summary: "A simple polish for a quick refresh.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "skin-brightening-polish",
    name: "Brightening Skin Polish",
    category: "facials-skin",
    section: "Facials & Skin",
    priceLabel: "PKR 1,500",
    summary: "A polish treatment for a lighter glow.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "hair-layered-styling",
    name: "Layered Haircut + Styling",
    category: "hair",
    section: "Hair",
    priceLabel: "PKR 2,500",
    summary: "Layers finished with styling for movement and shape.",
    image: HAZEL_IMAGES.collectionEye,
  },
  {
    id: "hair-layered-cut",
    name: "Layered Haircut",
    category: "hair",
    section: "Hair",
    priceLabel: "PKR 2,000",
    summary: "A clean layered cut with a softer finish.",
    image: HAZEL_IMAGES.collectionEye,
  },
  {
    id: "hair-butterfly-styling",
    name: "Butterfly Haircut + Styling",
    category: "hair",
    section: "Hair",
    priceLabel: "PKR 2,500",
    summary: "A face-framing butterfly cut with styling.",
    image: HAZEL_IMAGES.collectionEye,
  },
  {
    id: "hair-butterfly-cut",
    name: "Butterfly Haircut",
    category: "hair",
    section: "Hair",
    priceLabel: "PKR 2,000",
    summary: "The butterfly shape without added styling.",
    image: HAZEL_IMAGES.collectionEye,
  },
  {
    id: "hair-multi-layer-feather",
    name: "Multi-Layer + Feather Haircut",
    category: "hair",
    section: "Hair",
    priceLabel: "PKR 2,500",
    summary: "A feathered shape with softer layers.",
    image: HAZEL_IMAGES.collectionEye,
  },
  {
    id: "hair-step-cut",
    name: "Step Haircut",
    category: "hair",
    section: "Hair",
    priceLabel: "PKR 2,500",
    summary: "A structured step cut with clean movement.",
    image: HAZEL_IMAGES.collectionEye,
  },
  {
    id: "hair-simple-bangs",
    name: "Simple Bangs",
    category: "hair",
    section: "Hair",
    priceLabel: "PKR 500",
    summary: "Light fringe shaping.",
    image: HAZEL_IMAGES.collectionEye,
  },
  {
    id: "hair-curtain-bangs",
    name: "Curtain Bangs",
    category: "hair",
    section: "Hair",
    priceLabel: "PKR 500",
    summary: "Soft curtain fringe shaping.",
    image: HAZEL_IMAGES.collectionEye,
  },
  {
    id: "hair-bob-cut",
    name: "Bob Cut",
    category: "hair",
    section: "Hair",
    priceLabel: "PKR 2,500",
    summary: "A polished bob with a clean silhouette.",
    image: HAZEL_IMAGES.collectionEye,
  },
  {
    id: "hair-u-cut",
    name: "U-Cut",
    category: "hair",
    section: "Hair",
    priceLabel: "PKR 1,000",
    summary: "A classic U-shaped cut.",
    image: HAZEL_IMAGES.collectionEye,
  },
  {
    id: "hair-zero-cut",
    name: "Zero Cut",
    category: "hair",
    section: "Hair",
    priceLabel: "PKR 500",
    summary: "A minimal tidy-up cut.",
    image: HAZEL_IMAGES.collectionEye,
  },
  {
    id: "makeup-makeup",
    name: "Makeup",
    category: "makeup",
    section: "Makeup",
    priceLabel: "PKR 2,000",
    summary: "A classic makeup application for everyday or occasion wear.",
    image: HAZEL_IMAGES.collectionVanity,
  },
  {
    id: "makeup-hairstyling",
    name: "Makeup + Hairstyling",
    category: "makeup",
    section: "Makeup",
    priceLabel: "From PKR 2,500",
    summary: "Makeup paired with hairstyling for a complete finish.",
    image: HAZEL_IMAGES.collectionVanity,
  },
  {
    id: "waxing-full-body",
    name: "Full Body Wax",
    category: "waxing-brows",
    section: "Waxing & Brows",
    priceLabel: "PKR 3,000",
    summary: "A full body waxing service.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "waxing-full-arms-legs",
    name: "Full Arms + Full Legs + Selected Areas",
    category: "waxing-brows",
    section: "Waxing & Brows",
    priceLabel: "PKR 2,500",
    summary: "A bundled waxing service for larger areas.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "waxing-half-arms-legs-selected",
    name: "Half Arms + Half Legs + Selected Areas",
    category: "waxing-brows",
    section: "Waxing & Brows",
    priceLabel: "PKR 2,000",
    summary: "A bundled waxing service for moderate coverage.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "waxing-half-arms-legs",
    name: "Half Arms + Half Legs",
    category: "waxing-brows",
    section: "Waxing & Brows",
    priceLabel: "PKR 1,200",
    summary: "A wax service for half arm and leg coverage.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "waxing-full-face",
    name: "Full Face Wax",
    category: "waxing-brows",
    section: "Waxing & Brows",
    priceLabel: "PKR 700",
    summary: "Full-face waxing for a cleaner finish.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "waxing-side",
    name: "Side Wax",
    category: "waxing-brows",
    section: "Waxing & Brows",
    priceLabel: "PKR 500",
    summary: "Waxing for the side areas of the face.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "waxing-selected-area",
    name: "Selected-Area Waxing",
    category: "waxing-brows",
    section: "Waxing & Brows",
    priceLabel: "PKR 1,000",
    summary: "Waxing for a selected area.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "waxing-eyebrows-upper-lips-forehead",
    name: "Eyebrows + Upper Lips + Forehead",
    category: "waxing-brows",
    section: "Waxing & Brows",
    priceLabel: "PKR 350",
    summary: "Brows and upper-face clean-up.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "waxing-plucking-shaping",
    name: "Plucking + Shaping",
    category: "waxing-brows",
    section: "Waxing & Brows",
    priceLabel: "PKR 300",
    summary: "A shaping service for brows and edges.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "waxing-simple-plucking",
    name: "Simple Plucking",
    category: "waxing-brows",
    section: "Waxing & Brows",
    priceLabel: "PKR 200",
    summary: "A simple brow tidy-up.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "waxing-upper-lips",
    name: "Upper Lips",
    category: "waxing-brows",
    section: "Waxing & Brows",
    priceLabel: "PKR 80",
    summary: "Upper lip waxing.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "mani-special",
    name: "Special Mani-Pedi with Paraffin",
    category: "manicure-pedicure",
    section: "Manicure & Pedicure",
    priceLabel: "Ask Hazel",
    summary: "Hand and foot care with a paraffin finish.",
    image: HAZEL_IMAGES.servicesStillLife,
  },
  {
    id: "mani-brightening",
    name: "Brightening Mani-Pedi",
    category: "manicure-pedicure",
    section: "Manicure & Pedicure",
    priceLabel: "Ask Hazel",
    summary: "A brighter mani-pedi finish confirmed on request.",
    image: HAZEL_IMAGES.servicesStillLife,
  },
];

export const HAZEL_BRIDAL_SERVICES: ServiceItem[] = [
  {
    id: "bridal-nikkah-makeup",
    name: "Nikkah Makeup & Styling",
    category: "bridal",
    section: "Bridal Artistry",
    priceLabel: "From PKR 25,000",
    summary: "A soft, refined look for the Nikkah ceremony.",
    image: HAZEL_IMAGES.bridalHero,
  },
  {
    id: "bridal-barat-package",
    name: "Barat Bridal Package",
    category: "bridal",
    section: "Bridal Artistry",
    priceLabel: "From PKR 40,000",
    summary: "A fuller bridal look for the wedding day celebration.",
    image: HAZEL_IMAGES.bridalHero,
  },
  {
    id: "bridal-walima-package",
    name: "Walima Bridal Package",
    category: "bridal",
    section: "Bridal Artistry",
    priceLabel: "From PKR 35,000",
    summary: "A polished bridal look for the Walima celebration.",
    image: HAZEL_IMAGES.bridalHero,
  },
];

export const HAZEL_PACKAGE_ITEMS: PackageItem[] = [
  {
    id: "pkg-occasion",
    name: "The Occasion Package",
    category: "makeup-hair",
    priceLabel: "From PKR 2,500",
    summary: "Makeup and hairstyling in one concise package.",
    includes: ["Makeup", "Hairstyling"],
    image: HAZEL_IMAGES.packagesHero,
  },
  {
    id: "pkg-glow",
    name: "The Glow Package",
    category: "skin-glow",
    priceLabel: "Ask Hazel",
    summary: "A skin-led package with a facial and polish.",
    includes: ["Gold Facial", "Essential Skin Polish"],
    note: "Service value shown as PKR 2,500 in the design export.",
    image: HAZEL_IMAGES.packagesHero,
  },
  {
    id: "pkg-premium-glow",
    name: "Premium Glow Package",
    category: "skin-glow",
    priceLabel: "Ask Hazel",
    summary: "A richer glow package with two skin rituals.",
    includes: ["Gold Facial with Crystal Jelly", "Gold Skin Polish"],
    note: "Service value shown as PKR 7,000 in the design export.",
    image: HAZEL_IMAGES.packagesHero,
  },
  {
    id: "pkg-signature-cut",
    name: "The Signature Cut",
    category: "hair",
    priceLabel: "From PKR 2,000 - 2,500",
    summary: "A haircut package with layered, butterfly, step, and bob options.",
    includes: ["Layered", "Butterfly", "Step", "Bob"],
    image: HAZEL_IMAGES.packagesHero,
  },
];

export const HAZEL_BRIDAL_DIARIES: BridalDiaryItem[] = [
  {
    id: "nikkah",
    title: "Nikkah",
    summary: "A soft, steady look centered on clean skin and subtle detail.",
    image: HAZEL_IMAGES.bridalDiaryNikkah,
  },
  {
    id: "mehndi",
    title: "Mehndi",
    summary: "Brighter color and a finish that lasts through the celebration.",
    image: HAZEL_IMAGES.collectionBridal,
  },
  {
    id: "barat",
    title: "Barat",
    summary: "A fuller bridal look with enough structure to hold through the day.",
    image: HAZEL_IMAGES.collectionBarat,
  },
];

export const HAZEL_COLLECTIONS: LookbookItem[] = [
  {
    id: "regal-barat",
    title: "Regal Barat",
    category: "Featured Look",
    summary: "A celebratory bridal statement with rich depth and editorial detail.",
    image: HAZEL_IMAGES.collectionBarat,
  },
  {
    id: "nikkah-look",
    title: "Nikkah",
    category: "Bridal",
    summary: "Soft glamour with luminous skin and refined detailing.",
    image: HAZEL_IMAGES.collectionNikkah,
  },
  {
    id: "mehndi-look",
    title: "Mehndi",
    category: "Bridal",
    summary: "Jewel-toned celebration beauty with bold warmth.",
    image: HAZEL_IMAGES.collectionBridal,
  },
  {
    id: "barat-look",
    title: "Barat",
    category: "Bridal",
    summary: "A classic red bridal look with strong editorial presence.",
    image: HAZEL_IMAGES.collectionBarat,
  },
  {
    id: "eye-detail",
    title: "Eye Detail",
    category: "Makeup",
    summary: "Precision eye work from the bridal edit.",
    image: HAZEL_IMAGES.collectionEye,
  },
  {
    id: "hair-detail",
    title: "Bridal Hair",
    category: "Hair",
    summary: "An updo finished with floral detail.",
    image: HAZEL_IMAGES.editUpdo,
  },
  {
    id: "vanity-detail",
    title: "Vanity Still Life",
    category: "Beauty Care",
    summary: "Tools and textures from the Hazel ritual.",
    image: HAZEL_IMAGES.collectionVanity,
  },
  {
    id: "palette-detail",
    title: "Palette Notes",
    category: "Makeup",
    summary: "A close study of product textures and tone.",
    image: HAZEL_IMAGES.collectionPalette,
  },
  {
    id: "bottles-detail",
    title: "Bottles and Pumps",
    category: "Skin",
    summary: "A monochrome still life from the Hazel edit.",
    image: HAZEL_IMAGES.collectionBottles,
  },
  {
    id: "texture-detail",
    title: "Texture Study",
    category: "Transformations",
    summary: "A close-up of finish, polish, and motion.",
    image: HAZEL_IMAGES.collectionTexture,
  },
];

export const HAZEL_JOURNAL: JournalArticle[] = [
  {
    id: "bridal-trial",
    title: "What to Bring to a Bridal Trial at Hazel",
    category: "Bridal Notes",
    readTime: "4 min read",
    summary:
      "A calm, practical guide to getting the most out of a bridal consultation and keeping the morning focused.",
    image: HAZEL_IMAGES.bridalApproach,
    content: [
      "Bring your event date, venue details, jewelry notes, and a few reference photos that feel close to the look you want.",
      "If you are comparing Nikkah, Mehndi, Barat, or Walima styling, Hazel can help you narrow the finish down before the appointment request is confirmed.",
      "Keep the trial focused on tone, texture, and comfort so the final day feels calm instead of rushed.",
    ],
  },
  {
    id: "hair-cut-choice",
    title: "Choosing Between a Layered Cut and a Butterfly Cut",
    category: "Hair Notes",
    readTime: "3 min read",
    summary:
      "A visual comparison of Hazel's most common haircut directions.",
    image: HAZEL_IMAGES.servicesHero,
    content: [
      "A layered cut gives you movement and shape, while the butterfly cut leans into softness and lift around the face.",
      "Both can be styled with polish or kept airy, depending on how much structure you want from the final finish.",
      "Bring a note about your daily routine so Hazel can help narrow the request to the right cut and styling path.",
    ],
  },
  {
    id: "ask-hazel-pricing",
    title: "Why Some Hazel Prices Say Ask Hazel",
    category: "Service Notes",
    readTime: "2 min read",
    summary:
      "A short guide to the menu items that are intentionally left as quote-based services.",
    image: HAZEL_IMAGES.servicesStillLife,
    content: [
      "Some menu entries are explicitly marked Ask Hazel, which means the final quote depends on the exact request or tailoring.",
      "When a service includes multiple versions or custom add-ons, Hazel uses the consultation to confirm the final price rather than guessing.",
      "If you want a precise quote, send the service name with your preferred date through the appointment request form.",
    ],
  },
];

export const HAZEL_FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Is booking live scheduling or an appointment request?",
    answer:
      "Booking is an appointment request only. After you submit the form, Hazel reviews availability and contacts you to confirm the next step.",
  },
  {
    id: "faq-2",
    question: "Can I request a bridal consultation separately?",
    answer:
      "Yes. Use the bridal consultation form with your event date, venue details, and the bridal style you are considering.",
  },
  {
    id: "faq-3",
    question: "What if a price says Ask Hazel?",
    answer:
      "That means the service needs a tailored quote. Send the request and Hazel will confirm the right pricing based on the exact version you want.",
  },
  {
    id: "faq-4",
    question: "Can I contact Hazel on WhatsApp?",
    answer:
      "Yes. The WhatsApp button opens Hazel directly at 0335 4464192 with a prefilled message for appointment requests.",
  },
  {
    id: "faq-5",
    question: "How do I find the salon?",
    answer:
      "Use the directions button or Google Maps link for Dr Munir Avenue, Near Ghousia Chowk, College Road, Johar Town, Lahore 54770, Pakistan.",
  },
];

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
  { label: "Home", href: "/", description: "Editorial landing page" },
  { label: "Services", href: "/services", description: "Search the service menu" },
  { label: "Bridal", href: "/bridal", description: "Bridal experiences and consultation" },
  { label: "The Hazel Edit", href: "/the-hazel-edit", description: "Portfolio and transformations" },
  { label: "About", href: "/about", description: "Philosophy and location" },
  { label: "Packages", href: "/packages", description: "Curated beauty packages" },
  { label: "Hazel Collections", href: "/collections", description: "Editorial collections gallery" },
  { label: "Our Experts", href: "/experts", description: "The Hazel team approach" },
  { label: "Beauty Journal", href: "/beauty-journal", description: "Editorial notes and tips" },
  { label: "Contact", href: "/contact", description: "Directions and concierge details" },
  { label: "Book Appointment", href: "/book-appointment", description: "Appointment request form" },
];

export const HAZEL_PRIMARY_NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/", description: "Editorial landing page" },
  { label: "Services", href: "/services", description: "Search the service menu" },
  { label: "Bridal", href: "/bridal", description: "Bridal experiences and consultation" },
  { label: "Packages", href: "/packages", description: "Curated beauty packages" },
  { label: "Contact", href: "/contact", description: "Directions and concierge details" },
];

export const HAZEL_INFO = {
  name: "Hazel Beauty Salon",
  tagline: "Beauty, designed around you.",
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
  byAppointmentNote: "Private concierge support, by appointment request only.",
};

export const HAZEL_IMAGES = {
  homeHero:
    "/hero-home.png",
  servicesHero:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAex1EJw3unS-yGnDbt_-dVRqgzx1nVlfim_RecLndlaeJK4hcAuXmMZZi8fP1VxNpymNbR7qDrsFqyaHoe6NeHdfgWap3dPbp9LnnAb0vhqA5cxMXZHzkqOmv0nYLPkpbLyGbtEzaVWjCcrhnylIzcZ4dtLdBTucklBMjw76hv6x11BjtsEbYy4na3O9I-7hTImLy3BVOeQs6g6ksqcHg8480sHa80v9AzcLBe7fOP-mCC0x4I8OQWYQ",
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
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAQJoqU9EatFlEcnaib9hqdK0I3wJlzjcbC6kL23yzXXhtierBLHG_I05Cdkf48L-RsEVFifclX5sdrZGBufpEMjs33-wTmYtLF5RKNsYF1mza-_SHrDUkGHalsIs6jE1Ja9Zu6nycXcUKyr4YLWeSGX-j4uQbD4mEXMI5N-ou3MVwwFnu3Of3LaZfmnGIzDaeL-YlL1EPyqMXO62HBFndCKJ9tw7XUYB0H6lmeJjTgHbizlbUPoQheg",
  aboutDetail:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBv66S_juRKSa4DhEEk3U9WcwM1_Dj831IFAGLTrfgkf0D8W8oVekth4N1tmgTcS3Mk9yAE_JWu1fTXrj8G9xJZmrEGVBfQHMV53jNEOEKP2TKDvleBrhuLtWQplOWDVeKg0aTzXW6oVrSlFBMZrEkAvxiNudkjFa4onwXnwKa85tXNXedZBzohvF0PBuOkEzqc7zhR3kmTCTlLtZXeRtmVdwKyCX0sbMDklWfgxc8A8ZuiEWM8g8GgJA",
  editHero:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDoIvIfSZz8KJy8HDtVZEvsw-RJxtizSEiXbg9Wqi8QdyLtwAvbdi8HQiS_o1IJ7cgfc6dhWB0OITHVdzZM9Z-XR14D5KSeeGC2PJ4YPMIYIn5Pzo5Nh7VgonKHiUlhoZdw4K-Kr_QH8S_CoSJGkhiLoFvh-9cKsHGK2weJ2IFtKtD2oJTgftAvQolNAJhrzy14j3Sah-p2vMx3RSvtbDvImkz2fq9QhfUDPIIWgkJuKbNfxYoHLkbCxg",
  editDetail:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBGWWuNjKyqkBMI-cWsdHgGUNpqQGtfIjTkXC2ecQ4ydlRasQm3x8Mjn6HrjvKF_8AYI3lMgBDML855xsx_WX1XoTmBeJvH6tl9nWtYDjtNZaZzsCdwLOD96zazAZ4uztihouPG8rC-BHHAEy3UvuxJq2YdHg20L0qUOHJSpWArL3kdbKIY6LA_Qq_KGzAd_heFQxLR4kHy6lCd5qljQ1KJw3jb5_v9CnfQEWik2Jco7QfX4iGaSwu_rg",
  editBridal:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBcUqWp7xRjsmuQnSqlancFtqMu_sMph3LXqz2KHYayDizEvubeopHn1Mo-04bVaqAZL1Gtu81rAbpE3a2jIBhK0NRjSrlruO5-Ygfj0lZ39kgRqmQKla12DOCp-wH0kLo2K62myrbI9aiQ2EdSkYeWCKq2gC7OOPWi25NPh9oMaTXx0UsE-7VfS6DP0WEUji1s_vuaN4DnZTnRkizam_CM3LXxh3VdhIA2PemQk6TCJ7wJGHJ3b9A",
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
    summary: "Tailored consultations to understand your unique needs.",
    icon: "leaf",
  },
  {
    id: "professional-approach",
    title: "Professional Approach",
    summary: "Expert techniques executed with a calm editorial hand.",
    icon: "badge-check",
  },
  {
    id: "hygiene-comfort",
    title: "Hygiene & Comfort",
    summary: "Impeccable standards in a serene, relaxing environment.",
    icon: "sparkles",
  },
  {
    id: "occasion-expertise",
    title: "Occasion Expertise",
    summary: "Specialized styling for weddings and major events.",
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
    id: "hazel-signatures",
    label: "Hazel Signatures",
    description: "Our most requested transformative experiences.",
  },
  {
    id: "facials-skin",
    label: "Facials & Skin",
    description: "Advanced facial treatments to reveal a luminous complexion.",
  },
  {
    id: "hair",
    label: "Hair",
    description: "Precision cuts and styling designed to enhance your hair's natural vitality.",
  },
  {
    id: "makeup",
    label: "Makeup",
    description: "Enhancing your natural features for any occasion.",
  },
  {
    id: "waxing-brows",
    label: "Waxing & Brows",
    description: "Gentle hair removal and precise shaping.",
  },
  {
    id: "manicure-pedicure",
    label: "Manicure & Pedicure",
    description: "Complete care for hands and feet.",
  },
];

export const HAZEL_SERVICE_FILTERS = [
  { id: "all", label: "All Services" },
  { id: "facials-skin", label: "Facials & Skin" },
  { id: "hair", label: "Hair" },
  { id: "makeup", label: "Makeup" },
  { id: "waxing-brows", label: "Waxing & Brows" },
  { id: "manicure-pedicure", label: "Manicure & Pedicure" },
  { id: "bridal", label: "Bridal" },
];

export const HAZEL_SERVICES: ServiceItem[] = [
  {
    id: "signature-gold-jelly",
    name: "Gold Facial with Crystal Jelly",
    category: "skin",
    section: "Hazel Signatures",
    priceLabel: "PKR 5,000",
    summary: "Our premier facial treatment for absolute radiance and hydration.",
    badge: "Signature",
    image: HAZEL_IMAGES.collectionPalette,
  },
  {
    id: "signature-butterfly-haircut-styling",
    name: "Butterfly Haircut + Styling",
    category: "hair",
    section: "Hazel Signatures",
    priceLabel: "PKR 2,500",
    summary: "Effortless, voluminous layers that frame the face beautifully.",
    image: HAZEL_IMAGES.collectionVanity,
  },
  {
    id: "signature-zafrani-korean-facial",
    name: "Zafrani Korean Facial",
    category: "skin",
    section: "Hazel Signatures",
    priceLabel: "PKR 3,000",
    summary: "A fusion of traditional ingredients and modern glass-skin techniques.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "skin-gold-facial",
    name: "Gold Facial",
    category: "skin",
    section: "Facials & Skin",
    priceLabel: "PKR 2,000",
    summary: "A classic Hazel facial for a clean and bright finish.",
    image: HAZEL_IMAGES.collectionBottles,
  },
  {
    id: "skin-brightening-facial",
    name: "Brightening Facial",
    category: "skin",
    section: "Facials & Skin",
    priceLabel: "PKR 1,500",
    summary: "A lighter facial option for a polished glow.",
    image: HAZEL_IMAGES.collectionBottles,
  },
  {
    id: "skin-acne-care-facial",
    name: "Acne Care Facial",
    category: "skin",
    section: "Facials & Skin",
    priceLabel: "PKR 3,000",
    summary: "A focused skin service listed in the Hazel menu.",
    image: HAZEL_IMAGES.collectionBottles,
  },
  {
    id: "skin-gold-skin-polish",
    name: "Gold Skin Polish",
    category: "skin",
    section: "Facials & Skin",
    priceLabel: "PKR 2,000",
    summary: "A gold-brightening polish listed in the Hazel menu.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "skin-polish-facial",
    name: "Skin Polish + Facial",
    category: "skin",
    section: "Facials & Skin",
    priceLabel: "PKR 3,000",
    summary: "Combined polish and facial treatment from the menu.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "skin-essential-polish",
    name: "Essential Skin Polish",
    category: "skin",
    section: "Facials & Skin",
    priceLabel: "PKR 500",
    summary: "A simple polish for a fresh finish.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "skin-brightening-polish",
    name: "Brightening Skin Polish",
    category: "skin",
    section: "Facials & Skin",
    priceLabel: "PKR 1,500",
    summary: "A brighter polish option for the skin menu.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "skin-skin-polish-exfoliation",
    name: "Skin Polish & Exfoliation",
    category: "skin",
    section: "Facials & Skin",
    priceLabel: "From PKR 3,500",
    summary: "An exfoliating service from the stitched menu export.",
    image: HAZEL_IMAGES.servicesStillLife,
  },
  {
    id: "skin-luxury-facials",
    name: "Luxury Facials",
    category: "skin",
    section: "Facials & Skin",
    priceLabel: "From PKR 6,000",
    summary: "Signature facial category from the Hazel services export.",
    image: HAZEL_IMAGES.servicesStillLife,
  },
  {
    id: "hair-layered-styling",
    name: "Layered Haircut + Styling",
    category: "hair",
    section: "Hair",
    priceLabel: "PKR 2,500",
    summary: "A layered cut with styling for a polished finish.",
    image: HAZEL_IMAGES.collectionEye,
  },
  {
    id: "hair-layered-cut",
    name: "Layered Haircut",
    category: "hair",
    section: "Hair",
    priceLabel: "PKR 2,000",
    summary: "A layered cut listed in the Hazel services export.",
    image: HAZEL_IMAGES.collectionEye,
  },
  {
    id: "hair-butterfly-styling",
    name: "Butterfly Haircut + Styling",
    category: "hair",
    section: "Hair",
    priceLabel: "PKR 2,500",
    summary: "Voluminous butterfly shaping and styling.",
    image: HAZEL_IMAGES.collectionEye,
  },
  {
    id: "hair-butterfly-cut",
    name: "Butterfly Haircut",
    category: "hair",
    section: "Hair",
    priceLabel: "PKR 2,000",
    summary: "A butterfly cut from the services export.",
    image: HAZEL_IMAGES.collectionEye,
  },
  {
    id: "hair-multi-layer-feather",
    name: "Multi-Layer + Feather Haircut",
    category: "hair",
    section: "Hair",
    priceLabel: "PKR 2,500",
    summary: "A feathered haircut with soft layers.",
    image: HAZEL_IMAGES.collectionEye,
  },
  {
    id: "hair-step-cut",
    name: "Step Haircut",
    category: "hair",
    section: "Hair",
    priceLabel: "PKR 2,500",
    summary: "A step cut with a structured finish.",
    image: HAZEL_IMAGES.collectionEye,
  },
  {
    id: "hair-simple-bangs",
    name: "Simple Bangs",
    category: "hair",
    section: "Hair",
    priceLabel: "PKR 500",
    summary: "Simple fringe shaping from the Hazel menu.",
    image: HAZEL_IMAGES.collectionEye,
  },
  {
    id: "hair-curtain-bangs",
    name: "Curtain Bangs",
    category: "hair",
    section: "Hair",
    priceLabel: "PKR 500",
    summary: "Curtain fringe shaping from the Hazel menu.",
    image: HAZEL_IMAGES.collectionEye,
  },
  {
    id: "hair-bob-cut",
    name: "Bob Cut",
    category: "hair",
    section: "Hair",
    priceLabel: "PKR 2,500",
    summary: "A clean bob from the stitched services menu.",
    image: HAZEL_IMAGES.collectionEye,
  },
  {
    id: "hair-u-cut",
    name: "U-Cut",
    category: "hair",
    section: "Hair",
    priceLabel: "PKR 1,000",
    summary: "A U-shaped haircut from the menu.",
    image: HAZEL_IMAGES.collectionEye,
  },
  {
    id: "hair-zero-cut",
    name: "Zero Cut",
    category: "hair",
    section: "Hair",
    priceLabel: "PKR 500",
    summary: "A minimal cut from the Hazel menu.",
    image: HAZEL_IMAGES.collectionEye,
  },
  {
    id: "hair-layers-cutting",
    name: "Layers Cutting",
    category: "hair",
    section: "Hair",
    priceLabel: "From PKR 4,500",
    summary: "Precision layers from the services export.",
    image: HAZEL_IMAGES.editHero,
  },
  {
    id: "hair-balayage-ombre",
    name: "Balayage / Ombre",
    category: "hair",
    section: "Hair",
    priceLabel: "From PKR 15,000",
    summary: "Dimensional color work listed in the hair services export.",
    image: HAZEL_IMAGES.editHero,
  },
  {
    id: "hair-keratin-treatment",
    name: "Keratin Treatment",
    category: "hair",
    section: "Hair",
    priceLabel: "From PKR 12,000",
    summary: "A smoothing treatment from the services export.",
    image: HAZEL_IMAGES.editHero,
  },
  {
    id: "hair-butterfly-cut-5500",
    name: "Butterfly Cut",
    category: "hair",
    section: "Hair",
    priceLabel: "From PKR 5,500",
    summary: "Butterfly cut from the alternate services export.",
    image: HAZEL_IMAGES.editHero,
  },
  {
    id: "hair-signature-cut-style",
    name: "Signature Cut & Style",
    category: "hair",
    section: "Hair",
    priceLabel: "From PKR 4,500",
    summary: "A signature cut and style from the home services export.",
    image: HAZEL_IMAGES.servicesHero,
  },
  {
    id: "hair-advanced-styling",
    name: "Advanced Styling",
    category: "hair",
    section: "Hair",
    priceLabel: "From PKR 2,500",
    summary: "Blow dry, curling, straightening, and updos.",
    image: HAZEL_IMAGES.servicesHero,
  },
  {
    id: "makeup-makeup",
    name: "Makeup",
    category: "makeup",
    section: "Makeup",
    priceLabel: "PKR 2,000",
    summary: "Makeup listed in the stitched services export.",
    image: HAZEL_IMAGES.collectionVanity,
  },
  {
    id: "makeup-hairstyling",
    name: "Makeup + Hairstyling",
    category: "makeup",
    section: "Makeup",
    priceLabel: "From PKR 2,500",
    summary: "Makeup paired with hairstyling.",
    image: HAZEL_IMAGES.collectionVanity,
  },
  {
    id: "bridal-nikkah-makeup",
    name: "Nikkah Makeup & Styling",
    category: "bridal",
    section: "Bridal Artistry",
    priceLabel: "From PKR 25,000",
    summary: "A bridal look for the Nikkah ceremony.",
    image: HAZEL_IMAGES.bridalHero,
  },
  {
    id: "bridal-barat-package",
    name: "Barat Bridal Package",
    category: "bridal",
    section: "Bridal Artistry",
    priceLabel: "From PKR 40,000",
    summary: "A bridal package for the wedding day celebration.",
    image: HAZEL_IMAGES.bridalHero,
  },
  {
    id: "bridal-walima-package",
    name: "Walima Bridal Package",
    category: "bridal",
    section: "Bridal Artistry",
    priceLabel: "From PKR 35,000",
    summary: "A bridal package for the Walima celebration.",
    image: HAZEL_IMAGES.bridalHero,
  },
  {
    id: "waxing-full-body",
    name: "Full Body Wax",
    category: "waxing",
    section: "Waxing & Brows",
    priceLabel: "PKR 3,000",
    summary: "A full body wax from the services export.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "waxing-full-arms-legs",
    name: "Full Arms + Full Legs + Selected Areas",
    category: "waxing",
    section: "Waxing & Brows",
    priceLabel: "PKR 2,500",
    summary: "A waxing bundle from the services export.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "waxing-half-arms-legs-selected",
    name: "Half Arms + Half Legs + Selected Areas",
    category: "waxing",
    section: "Waxing & Brows",
    priceLabel: "PKR 2,000",
    summary: "A waxing bundle from the services export.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "waxing-half-arms-legs",
    name: "Half Arms + Half Legs",
    category: "waxing",
    section: "Waxing & Brows",
    priceLabel: "PKR 1,200",
    summary: "A waxing bundle from the services export.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "waxing-full-face",
    name: "Full Face Wax",
    category: "waxing",
    section: "Waxing & Brows",
    priceLabel: "PKR 700",
    summary: "A facial waxing service from the menu.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "waxing-side",
    name: "Side Wax",
    category: "waxing",
    section: "Waxing & Brows",
    priceLabel: "PKR 500",
    summary: "A side waxing service from the menu.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "waxing-selected-area",
    name: "Selected-Area Waxing",
    category: "waxing",
    section: "Waxing & Brows",
    priceLabel: "PKR 1,000",
    summary: "Selected-area waxing from the menu.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "waxing-eyebrows-upper-lips-forehead",
    name: "Eyebrows + Upper Lips + Forehead",
    category: "waxing",
    section: "Waxing & Brows",
    priceLabel: "PKR 350",
    summary: "A brows and facial hair service from the menu.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "waxing-plucking-shaping",
    name: "Plucking + Shaping",
    category: "waxing",
    section: "Waxing & Brows",
    priceLabel: "PKR 300",
    summary: "A shaping service from the menu.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "waxing-simple-plucking",
    name: "Simple Plucking",
    category: "waxing",
    section: "Waxing & Brows",
    priceLabel: "PKR 200",
    summary: "A simple plucking service from the menu.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "waxing-upper-lips",
    name: "Upper Lips",
    category: "waxing",
    section: "Waxing & Brows",
    priceLabel: "PKR 80",
    summary: "Upper lip waxing from the menu.",
    image: HAZEL_IMAGES.collectionTexture,
  },
  {
    id: "mani-special",
    name: "Special Mani-Pedi with Paraffin",
    category: "hands-feet",
    section: "Manicure & Pedicure",
    priceLabel: "Ask Hazel",
    summary: "Hand and foot care from the stitched menu export.",
    image: HAZEL_IMAGES.servicesStillLife,
  },
  {
    id: "mani-brightening",
    name: "Brightening Mani-Pedi",
    category: "hands-feet",
    section: "Manicure & Pedicure",
    priceLabel: "Ask Hazel",
    summary: "A brightening mani-pedi from the menu.",
    image: HAZEL_IMAGES.servicesStillLife,
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
    summary: "Pure, ethereal elegance. Soft glamour focused on luminous skin and subtle, sophisticated details.",
    image: HAZEL_IMAGES.bridalDiaryNikkah,
  },
  {
    id: "mehndi",
    title: "Mehndi",
    summary: "Vibrant, joyful beauty. Expressive colors and flawless, long-lasting finishes designed for celebration.",
    image: HAZEL_IMAGES.collectionBridal,
  },
  {
    id: "barat",
    title: "Barat",
    summary: "Classic, dramatic opulence. Bold, timeless artistry that commands the room.",
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
      "A visual comparison of Hazel's most common haircut directions from the stitched menu export.",
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
      "A small guide to the menu items that are intentionally left as quote-based services.",
    image: HAZEL_IMAGES.servicesStillLife,
    content: [
      "Some entries in the stitched exports are explicitly marked Ask Hazel, which means the final quote depends on the exact request or tailoring.",
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

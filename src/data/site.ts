export const site = {
  fullName: "M Asghar Hussain",
  navName: "Asghar Hussain",
  monogram: "AH",
  title: "Digital Marketing & Social Media Growth Specialist",
  businessName: "Agency Pro",
  eyebrow: "Digital Marketing • Social Media Growth",
  description:
    "M Asghar Hussain helps creators and businesses grow on TikTok, Facebook, Instagram, and YouTube with social media growth strategy, monetization guidance, account services, and paid advertising management.",
} as const;

export const contact = {
  whatsappDisplay: "+92 304 5349012",
  whatsappNumber: "923045349012",
  email: "qaswar264@gmail.com",
  emailHref: "mailto:qaswar264@gmail.com",
} as const;

export const social = {
  tiktok: {
    label: "TikTok",
    handle: "@agencypro1",
    href: "https://www.tiktok.com/@agencypro1",
  },
  facebook: {
    label: "Facebook",
    handle: "View Profile",
    href: "https://www.facebook.com/profile.php?id=61577783043696",
  },
} as const;

export const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

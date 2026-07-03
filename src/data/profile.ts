export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mahmudafroz.com";

export const profileLinks = {
  linkedin: "https://www.linkedin.com/in/mahmud-afroz/",
  googleScholar: "https://scholar.google.com/citations?user=729bwoUAAAAJ&hl=en"
};

export const PROFILE = {
  name: "Mahmud Afroz",
  portfolioLabel: "Mahmud Afroz | Portfolio",
  shortTitle: "GIS Technician & Geographic Data Analyst",
  location: "Fayetteville, Arkansas, USA",
  phone: {
    number: "479-304-9175",
    public: false
  },
  heroTagline: "GIS Technician | Geographic Data Analyst | MS Geography | Executive MBA Candidate",
  summary:
    "GIS professional working across utility data management, geospatial analysis, remote sensing, GIS education, and research.",
  linkedin: profileLinks.linkedin,
  googleScholar: profileLinks.googleScholar
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/research", label: "Research" },
  { href: "/capabilities", label: "Capabilities" }
] as const;

export const resumeAsset = {
  href: "/documents/mahmud-afroz-resume.pdf",
  relativePath: "documents/mahmud-afroz-resume.pdf",
  label: "Download Resume"
} as const;

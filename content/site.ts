/**
 * SEMUA PLACEHOLDER DI FILE INI ADA DI SINI — ganti nilainya, jangan ubah tipe.
 * Setelah diganti, situs otomatis memakai data baru (tanpa menyentuh komponen).
 */

export type SiteLink = {
  label: string;
  href: string;
};

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

export type SiteConfig = {
  name: string;
  shortName: string;
  roleLead: string;
  roleTail: string;
  location: string;
  availability: string;
  description: string;
  email: string;
  proof: { value: string; label: string }[];
  links: SiteLink[];
  experience: ExperienceEntry[];
  /** Diisi setelah file cv.pdf dikirim: "/cv.pdf". Selama null, tombol CV tidak dirender. */
  cvUrl: string | null;
  /** Diisi setelah foto dikirim: "/photo.jpg". Selama null, tampil frame placeholder. */
  photoUrl: string | null;
};

export const site: SiteConfig = {
  name: "Your Name", // PLACEHOLDER
  shortName: "yourname", // PLACEHOLDER
  roleLead: "Frontend & full-stack",
  roleTail: "engineer.",
  location: "Jakarta, Indonesia · remote-friendly", // PLACEHOLDER
  availability: "Open to frontend / full-stack roles", // PLACEHOLDER
  description:
    "Frontend and full-stack engineer with production experience in fintech and B2B SaaS. I care about the boring parts: state, latency, and the day after launch.", // PLACEHOLDER
  email: "you@example.com", // PLACEHOLDER
  proof: [
    { value: "3+", label: "years shipping product" }, // PLACEHOLDER
    { value: "40k", label: "monthly users served" }, // PLACEHOLDER
    { value: "−70%", label: "p95 render, checkout" }, // PLACEHOLDER
  ],
  links: [
    { label: "GitHub", href: "https://github.com/yourhandle" }, // PLACEHOLDER
    { label: "LinkedIn", href: "https://linkedin.com/in/yourhandle" }, // PLACEHOLDER
  ],
  experience: [
    {
      // PLACEHOLDER — boleh tetap anonymised, mis. "Fintech client" atau nama perusahaan bila aman.
      role: "Frontend Engineer",
      company: "Fintech client (anonymised)",
      period: "2023 — now",
      summary:
        "Own the checkout and onboarding surfaces. Cut p95 render on the heaviest screen by 70% and shipped the first typed API layer the team reuses today.",
    },
    {
      // PLACEHOLDER
      role: "Full-stack Developer",
      company: "B2B SaaS client (anonymised)",
      period: "2022 — 2023",
      summary:
        "Built an internal ops dashboard that replaced three spreadsheets, and moved a manual weekly export into a background job.",
    },
  ],
  cvUrl: null,
  photoUrl: null,
};

/**
 * PLACEHOLDER DATA — tiga case study di bawah ini sudah berbentuk format final.
 * Ganti isinya dengan proyek nyata, jangan ubah strukturnya.
 *
 * Aturan aman untuk proyek kantor (NDA):
 *  - Nama klien → "Fintech client (anonymised)" dan sejenisnya.
 *  - Angka boleh dipakai bila memang terukur; kalau tidak ada, tulis perkiraan
 *    yang jujur atau kosongkan field-nya (jangan mengarang).
 *  - Jangan pakai screenshot yang memuat data pengguna.
 */

export type Outcome = {
  label: string;
  value: string;
};

export type ProjectCaseStudy = {
  context: string;
  problem: string;
  constraints: string;
  approach: string;
  outcome: string;
  nextTime: string;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  client: string;
  year: string;
  role: string;
  summary: string;
  stack: string[];
  outcomes: Outcome[];
  /** Dipakai halaman /work/[slug] pada tahap berikutnya. */
  caseStudy: ProjectCaseStudy;
};

export const projects: Project[] = [
  {
    slug: "checkout-rebuild",
    index: "01",
    title: "Checkout rebuild for a fintech app",
    client: "Fintech client (anonymised)",
    year: "2024",
    role: "Frontend lead of 2",
    summary:
      "Rebuilt a three-step checkout used by ~40k monthly users, separating server state from form state and removing the render path that made the review step stutter on mid-range Android.",
    stack: ["Next.js", "TypeScript", "React Query", "Stripe"],
    outcomes: [
      { label: "p95 render", value: "2.1s → 640ms" },
      { label: "Drop-off", value: "−18%" },
    ],
    caseStudy: {
      context:
        "A checkout flow that grew feature by feature until every step re-fetched the whole cart.",
      problem:
        "The review step stuttered on mid-range Android and drop-off clustered on that screen.",
      constraints:
        "No downtime during peak hours, payment provider integration could not change, two-week window.",
      approach:
        "Split server state from local form state, moved cart hydration to one request, added skeletons instead of a blocking spinner, and shipped behind a flag to 10% of traffic first.",
      outcome: "p95 render fell from 2.1s to 640ms and drop-off on the review step dropped 18%.",
      nextTime:
        "I would measure the slowest device tier in week one instead of week two — the data shaped the fix later than it should have.",
    },
  },
  {
    slug: "internal-ops-dashboard",
    index: "02",
    title: "Internal ops dashboard for a B2B SaaS",
    client: "B2B SaaS client (anonymised)",
    year: "2024",
    role: "Full-stack",
    summary:
      "Replaced three spreadsheets and a weekly manual export with a typed dashboard and a background sync job, so the ops team stopped chasing CSVs before every standup.",
    stack: ["React", "Node", "PostgreSQL", "Drizzle"],
    outcomes: [
      { label: "Weekly ops time", value: "6h → 45m" },
      { label: "Manual errors", value: "0 in 3 months" },
    ],
    caseStudy: {
      context:
        "Ops work lived in spreadsheets that three people edited by hand, reconciled once a week.",
      problem:
        "Nobody trusted the numbers, and the export ritual ate most of a Monday.",
      constraints:
        "Small team, no dedicated designer, had to ship to internal users in under a month.",
      approach:
        "Modelled the entities first, built the dashboard on top of a typed schema, and replaced the export with an idempotent background job that logs every run.",
      outcome:
        "Weekly reconciliation dropped from six hours to forty-five minutes with no manual-edit errors in the first three months.",
      nextTime:
        "I would add audit history from day one; retrofitting it for a compliance question later cost more than building it up front.",
    },
  },
  {
    slug: "shipment-tracking",
    index: "03",
    title: "Public shipment tracking page",
    client: "Logistics client (anonymised)",
    year: "2023",
    role: "Frontend",
    summary:
      "Shipped a map-first tracking page that stays usable on 3G, using cached last-known positions and skeletons instead of a full-page spinner.",
    stack: ["Next.js", "MapLibre", "Tailwind CSS"],
    outcomes: [
      { label: "LCP", value: "4.1s → 1.3s" },
      { label: "Support tickets", value: "−26%" },
    ],
    caseStudy: {
      context:
        "Customers checked a tracking page mostly on phones, often on slow connections, often in a hurry.",
      problem:
        "The map bundle blocked first paint, so people stared at white space and called support instead.",
      constraints:
        "No backend changes allowed, and the map had to keep working when the tracking API was slow.",
      approach:
        "Rendered the shipment timeline as static content first, loaded the map after interaction, and cached the last-known position so the page never waited on the map to be useful.",
      outcome: "LCP improved from 4.1s to 1.3s and tracking-related support tickets fell 26%.",
      nextTime:
        "I would put the timeline and the map under the same loading budget from the start instead of optimising them one after another.",
    },
  },
];

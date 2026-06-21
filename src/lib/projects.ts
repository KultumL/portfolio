import projData from "@/assets/proj-data.jpg";
import projFullstack from "@/assets/proj-fullstack.jpg";
import projHci from "@/assets/proj-hci.jpg";

export type Section = {
  title: string;
  body: string;
  image?: string;
};

export type Project = {
  slug: string;
  title: string;
  blurb: string;
  tags: string[];
  image: string;
  cover: string;
  coverType?: "image" | "video";
  videoUrl?: string;
  repo: string;
  demo?: string;
  groupId: string;
  groupTitle: string;
  sections: Section[];
};

export type Group = {
  id: string;
  label: string;
  title: string;
  projects: Project[];
};

const make = (
  groupId: string,
  groupTitle: string,
  slug: string,
  title: string,
  blurb: string,
  tags: string[],
  image: string,
  repo: string,
  sections: Section[],
  demo?: string,
): Project => ({
  slug,
  title,
  blurb,
  tags,
  image,
  cover: image,
  coverType: "image",
  repo,
  demo,
  groupId,
  groupTitle,
  sections,
});

export const groups: Group[] = [
  {
    id: "data",
    label: "01 / Data",
    title: "Data-Based Projects",
    projects: [
      make("data", "Data-Based Projects", "pulse-analytics", "Pulse Analytics",
        "Real-time streaming dashboard tracking user behavior across millions of events.",
        ["Python", "Kafka", "DuckDB"], projData, "https://github.com/", [
          { title: "Overview", body: "Pulse Analytics ingests live event streams via Kafka, stores them in DuckDB and surfaces them in a React dashboard. It handles ~2M events/day with sub-second query latency." , image: projData },
          { title: "What I built", body: "Designed the ingestion topology, built the query layer, and shipped an anomaly alerting pipeline with Slack integrations.", image: projData },
          { title: "Outcome", body: "Cut time-to-insight from hours to under a minute and replaced three legacy dashboards." },
        ], "#"),
      make("data", "Data-Based Projects", "forecast-lab", "Forecast Lab",
        "Time-series forecasting toolkit with interactive what-if scenarios.",
        ["Pandas", "Prophet", "Streamlit"], projData, "https://github.com/", [
          { title: "Overview", body: "A Streamlit playground built on Prophet and pandas. Users upload a CSV, pick a horizon, and run side-by-side what-if simulations.", image: projData },
          { title: "Highlights", body: "Custom backtesting view, downloadable reports and a reusable forecasting API." },
        ]),
      make("data", "Data-Based Projects", "signal-miner", "Signal Miner",
        "NLP pipeline that surfaces emerging topics from unstructured text.",
        ["spaCy", "BERT", "Airflow"], projData, "https://github.com/", [
          { title: "Overview", body: "An Airflow-orchestrated spaCy + BERT pipeline that clusters and ranks emerging themes from news and social text.", image: projData },
          { title: "Impact", body: "Powers a daily digest used to spot narrative shifts before they hit mainstream coverage." },
        ]),
    ],
  },
  {
    id: "fullstack",
    label: "02 / Full-Stack",
    title: "Full-Stack Projects",
    projects: [
      make("fullstack", "Full-Stack Projects", "orbit-crm", "Orbit CRM",
        "Multi-tenant CRM with role-based auth, audit logs and AI summaries.",
        ["Next.js", "Postgres", "tRPC"], projFullstack, "https://github.com/", [
          { title: "Overview", body: "Multi-tenant SaaS with row-level security, audit logging and AI-generated meeting summaries. End-to-end type safety via tRPC.", image: projFullstack },
          { title: "What I built", body: "Auth, billing, the AI summary worker and the entire dashboard UI.", image: projFullstack },
        ], "#"),
      make("fullstack", "Full-Stack Projects", "lumen-notes", "Lumen Notes",
        "Collaborative markdown editor with realtime cursors and offline sync.",
        ["React", "Supabase", "Y.js"], projFullstack, "https://github.com/", [
          { title: "Overview", body: "Y.js CRDTs over Supabase Realtime for conflict-free collaborative editing, with offline-first sync via IndexedDB.", image: projFullstack },
        ]),
      make("fullstack", "Full-Stack Projects", "cargo-track", "Cargo Track",
        "Logistics platform with live map tracking and webhook integrations.",
        ["Node", "Mapbox", "Redis"], projFullstack, "https://github.com/", [
          { title: "Overview", body: "Live vehicle telemetry on Mapbox with Redis Streams powering partner webhook fan-out.", image: projFullstack },
        ]),
    ],
  },
  {
    id: "hci",
    label: "03 / HCI",
    title: "Human-Computer Interaction",
    projects: [
      make("hci", "Human-Computer Interaction", "gesture-canvas", "Gesture Canvas",
        "Webcam-based gesture interface evaluated through a 24-participant study.",
        ["MediaPipe", "React", "UX Research"], projHci, "https://github.com/", [
          { title: "Overview", body: "Turns hand gestures into drawing input via MediaPipe. Evaluated in a 24-participant study measuring accuracy and fatigue.", image: projHci },
          { title: "Findings", body: "Pinch-to-draw outperformed fist-clench by 22% on task completion time.", image: projHci },
        ]),
      make("hci", "Human-Computer Interaction", "empathy-lens", "Empathy Lens",
        "Voice-first accessibility companion for low-vision users.",
        ["Web Speech", "Figma", "WCAG"], projHci, "https://github.com/", [
          { title: "Overview", body: "A voice-first companion that narrates screen content and accepts spoken commands. Co-designed with low-vision testers to meet WCAG AAA.", image: projHci },
        ], "#"),
      make("hci", "Human-Computer Interaction", "tactile-ui-kit", "Tactile UI Kit",
        "Haptic-first design system explored in a wearable prototype.",
        ["Arduino", "Swift", "Design"], projHci, "https://github.com/", [
          { title: "Overview", body: "Haptic-first design system tested on an Arduino-driven wearable with a companion Swift app for touch-only navigation.", image: projHci },
        ]),
    ],
  },
];

export const allProjects: Project[] = groups.flatMap((g) => g.projects);

export function getProject(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}

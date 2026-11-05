export interface TimelineEntry {
  id: string;
  date: string; // ISO-ish or human
  title: string;
  subtitle?: string;
  type: "Experience" | "Education" | "Project" | "Open Source" | "Other";
  location?: string;
  description: string;
  highlights?: string[];
  links?: { label: string; url: string }[];
}

const TIMELINE: TimelineEntry[] = [
  {
    id: "ephemeris-silent-lab",
    date: "Nov 2026",
    title: "Ephemeris and Silent Lab",
    subtitle: "Mission layer for people and agents, plus a silent-input experiment",
    type: "Project",
    description:
      "Built a demo of Ephemeris that runs end to end: missions, an inbox, a triage agent with citations, Linear write-back and a get_context MCP server. Alongside it, Silent Lab reads trained phrases from lips with a camera.",
    highlights: [
      "14 end-to-end tests pass, tested against a stand-in for Wispr's MCP",
      "Silent Lab: 96.5% on 10 trained phrases with a simulated face; real-face testing is next",
    ],
    links: [{ label: "Ephemeris", url: "https://github.com/BenItBuhner/Ephemeris" }],
  },
  {
    id: "murmur-accuracy",
    date: "Oct 2026",
    title: "Murmur speed and accuracy work",
    subtitle: "Six merged PRs, each with before-and-after numbers",
    type: "Open Source",
    description:
      "Rebuilt how Murmur finishes a dictation and fixed cut-off endings, repetition loops and phantom phrases, measuring every change on a set of real dictations.",
    highlights: [
      "Mean word error 4.1% → 3.1% on 14 real dictations",
      "Short clips go from stop to text in under 10 ms",
      "False sentence breaks cut from 14 to 7",
    ],
    links: [{ label: "Murmur", url: "https://github.com/BenItBuhner/Murmur" }],
  },
  {
    id: "airdrop",
    date: "Oct 2026",
    title: "AirDrop for Everything",
    type: "Open Source",
    description:
      "Started a clean-room reimplementation of the AirDrop protocol so any platform can send and receive over AWDL or a plain LAN.",
    links: [{ label: "GitHub", url: "https://github.com/BenItBuhner/AirDrop-for-Everything" }],
  },
  {
    id: "murmur-launch",
    date: "Sep 2026",
    title: "Launched Murmur",
    subtitle: "Open-source voice dictation",
    type: "Project",
    description:
      "Started Murmur, a dictation app for Windows, Linux, macOS and Android, with its own site and inference backend.",
    links: [{ label: "Site", url: "https://murmur.techlitnow.com" }],
  },
  {
    id: "codex-meter",
    date: "Jul 2026",
    title: "Codex-Meter",
    type: "Open Source",
    description: "Released an open-source Android client for checking and monitoring Codex usage.",
    links: [{ label: "GitHub", url: "https://github.com/BenItBuhner/Codex-Meter" }],
  },
  {
    id: "model-proxy",
    date: "2025",
    title: "Model Proxy",
    type: "Open Source",
    description:
      "Built a resilient inference proxy with key, provider and model fallbacks to plug any model into Claude Code. Used through a beta in Nahcrof AI.",
    links: [{ label: "GitHub", url: "https://github.com/BenItBuhner/model-proxy" }],
  },
];

export function getTimeline(): TimelineEntry[] {
  return TIMELINE;
}

export default TIMELINE;

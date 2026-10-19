export interface Project {
  id: number;
  title: string;
  description: string; // Short summary for cards/previews
  date: string; // ISO string
  content?: string; // Optional HTML content supporting headers, lists, images, embeds, links, etc.
  image?: string; // Optional header image URL
  tech: string[];
  github: string;
  demo: string | null;
  slug?: string; // optional; primary key is id for projects
  comingSoon?: boolean;
}

const projects: Project[] = [
  {
    id: 6,
    title: "Cesium",
    description: "One local-first workbench for every coding agent.",
    date: "2026-10-01",
    image: "/projects/cesium/cover.webp",
    tech: ["TypeScript", "Bun"],
    github: "https://github.com/BenItBuhner/Cesium",
    demo: "https://cesium.techlitnow.com",
  },
  {
    id: 7,
    title: "Murmur",
    description: "Hold a key, speak, and clean text types itself anywhere.",
    date: "2026-10-19",
    image: "/projects/murmur/cover.webp",
    tech: ["TypeScript", "Electron"],
    github: "https://github.com/BenItBuhner/Murmur",
    demo: null,
  },
  {
    id: 8,
    title: "Cursor for Android",
    description: "A native Android client for Cursor Cloud Agents.",
    date: "2026-10-09",
    image: "/projects/cursor-for-android/cover.webp",
    tech: ["Kotlin", "Jetpack Compose"],
    github: "https://github.com/BenItBuhner/Cursor-for-Android",
    demo: null,
  },
  {
    id: 9,
    title: "Zenium",
    description: "Zen Browser's design, rebuilt on Chromium.",
    date: "2026-10-06",
    image: "/projects/zenium/cover.webp",
    tech: ["TypeScript", "Electron"],
    github: "https://github.com/BenItBuhner/Zenium",
    demo: null,
  },
  {
    id: 10,
    title: "Codex Meter",
    description: "Your Codex usage in widgets, on your phone and watch.",
    date: "2026-09-15",
    image: "/projects/codex-meter/cover.webp",
    tech: ["Java", "SwiftUI"],
    github: "https://github.com/BenItBuhner/Codex-Meter",
    demo: null,
  },
  {
    id: 11,
    title: "AirDrop for Everything",
    description: "AirDrop for Windows, Linux, and Android, written in Rust.",
    date: "2026-10-10",
    image: "/projects/airdrop/cover.webp",
    tech: ["Rust", "Kotlin"],
    github: "https://github.com/BenItBuhner/AirDrop-for-Everything",
    demo: null,
  },
  {
    id: 12,
    title: "Alarm MCP",
    description: "Lets your agent ring your phone for an approval.",
    date: "2026-10-06",
    image: "/projects/alarm-mcp/cover.webp",
    tech: ["TypeScript", "MCP"],
    github: "https://github.com/BenItBuhner/Alarm-MCP",
    demo: "https://alarm-mcp.techlitnow.com",
  },
  {
    id: 13,
    title: "Cursor Cloud MCP",
    description: "Run Cursor Cloud Agents from any MCP client.",
    date: "2026-10-06",
    image: "/projects/cursor-cloud-mcp/cover.webp",
    tech: ["TypeScript", "MCP"],
    github: "https://github.com/BenItBuhner/Cursor-Cloud-MCP",
    demo: null,
  },
  {
    id: 5,
    title: "Model Proxy",
    description: "Use any model in Claude Code, with key, provider, and model fallbacks.",
    date: "2025-02-01",
    image: "/projects/model-proxy/claude-code-tunnel-header.png",
    tech: ["TypeScript", "Bun"],
    github: "https://github.com/BenItBuhner/Model-Proxy",
    demo: null,
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectById(idOrSlug: string): Project | undefined {
  const numeric = Number(idOrSlug);
  if (!Number.isNaN(numeric)) {
    return projects.find((p) => p.id === numeric);
  }
  // optional slug matching if provided in future
  return projects.find(
    (p) =>
      p.slug && (p.slug === idOrSlug || p.slug?.split("/").pop() === idOrSlug),
  );
}

export function getFeaturedProjects(): Project[] {
  // Return all projects as featured projects
  return projects;
}

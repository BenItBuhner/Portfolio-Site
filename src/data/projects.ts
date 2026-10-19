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
    description:
      "A local-first AI workbench: chat with any coding agent (Cursor, Codex, Claude Code, OpenCode, and its own), edit real files, and run real terminals on your machine, from desktop, phone, or watch.",
    date: "2026-10-01",
    image: "/projects/cesium/feature-backends.webp",
    content: `
<p><strong>Every agent. Your machine. One workbench.</strong> Cesium gives every coding agent you already use one home: a chat that shows its work, an editor on the folders on your disk, and terminals you can take over at any moment. The engine that touches your files runs on hardware you control; the clients open from wherever you are.</p>
<h2>Highlights</h2>
<ul>
  <li><strong>One composer, many agents.</strong> Cesium Agent (first-party), Cursor, Codex, Claude Code, OpenCode, Devin, Grok Build, Pi Agent, and Google Antigravity. Switch agents mid-thread and context travels with the handoff.</li>
  <li><strong>You approve every tool call.</strong> Commands, edits, and connected tools pause for permission, whichever agent is driving.</li>
  <li><strong>A real IDE beside the chat.</strong> Monaco editor, split groups, and xterm terminals against real directories, not a sandbox.</li>
  <li><strong>Local roots, cloud reach.</strong> A Bun + Hono engine lives with your code; open it from a browser, the desktop app, a phone, a tablet, or a watch.</li>
</ul>
<img src="/projects/cesium/hero-dark.webp" alt="The Cesium workbench" />
<img src="/projects/cesium/feature-permission.webp" alt="A permission card asking to approve a shell command" />
<img src="/projects/cesium/feature-ide.webp" alt="Monaco editor and terminal open beside the chat" />
<h2>On every screen</h2>
<img src="/projects/cesium/mobile-trio.webp" alt="Cesium on phone and tablet" />
<p>Site: <a href="https://cesium.techlitnow.com" target="_blank" rel="noopener noreferrer">cesium.techlitnow.com</a></p>
    `,
    tech: ["TypeScript", "Bun", "Hono", "Next.js", "Electron", "Convex"],
    github: "https://github.com/BenItBuhner/Cesium",
    demo: "https://cesium.techlitnow.com",
  },
  {
    id: 7,
    title: "Murmur",
    description:
      "Wispr Flow-style voice dictation: hold a key, speak, and clean, punctuated text types itself wherever your cursor is. Desktop + Android, with managed models or bring-your-own.",
    date: "2026-10-19",
    image: "/projects/murmur/home.png",
    content: `
<p>Hold a key (or tap a pill), speak, and clean text lands wherever your cursor is. Murmur turns raw speech into polished, formatted text that types itself into any application.</p>
<h2>What's in it</h2>
<ul>
  <li><strong>Desktop app</strong> (Electron) for Windows and Linux, with macOS in progress.</li>
  <li><strong>Android app</strong> for Android 8.0+.</li>
  <li><strong>Cloud backend</strong> (Convex + Clerk): accounts, managed speech and formatting models, and a synced dictionary and settings across devices.</li>
  <li><strong>Text engine</strong> shared by every client: the formatting prompt, a verifier, and a few rules that turn a transcript into the text you meant to type.</li>
  <li><strong>Bring your own model:</strong> OpenAI, Groq, Deepgram, ElevenLabs, or a local whisper server.</li>
</ul>
    `,
    tech: ["TypeScript", "Electron", "Kotlin", "Convex", "Speech-to-Text"],
    github: "https://github.com/BenItBuhner/Murmur",
    demo: "https://github.com/BenItBuhner/Murmur/releases/latest",
  },
  {
    id: 8,
    title: "Cursor for Android",
    description:
      "An unofficial native Android client for Cursor Cloud Agents. Launch agents, follow them live, and ship pull requests from your phone, foldable, or tablet.",
    date: "2026-10-09",
    image: "/projects/cursor-for-android/hero.jpg",
    content: `
<p>Sign in with your Cursor account, or paste an API key. Launch agents, follow them live, and ship pull requests from your phone. Built with Kotlin and Jetpack Compose, on the public Cloud Agents API.</p>
<img src="/projects/cursor-for-android/09_tablet_home.webp" alt="Tablet layout" />
<img src="/projects/cursor-for-android/02_home.webp" alt="Phone home screen" />
<img src="/projects/cursor-for-android/06_conversation.webp" alt="Following an agent conversation" />
<p><em>Not affiliated with Anysphere, Inc.</em></p>
    `,
    tech: ["Kotlin", "Jetpack Compose", "Android", "Cursor API"],
    github: "https://github.com/BenItBuhner/Cursor-for-Android",
    demo: "https://github.com/BenItBuhner/Cursor-for-Android/releases/latest",
  },
  {
    id: 9,
    title: "Zenium",
    description:
      "Zen Browser's user experience ported to Chromium. Desktop (Electron) and Android share one browser core and React chrome, with sync, a resource governor, and an MCP server for agents.",
    date: "2026-10-06",
    image: "/projects/zenium/cover.webp",
    content: `
<p>Zen Browser is a Firefox fork with a calm, sidebar-first design. Zenium rebuilds that UI and its behaviours on Blink/V8, so pages render exactly as they do in Chrome while the browser chrome is Zen's.</p>
<ul>
  <li><strong>Desktop and Android</strong> share the browser core and the whole React chrome. On a phone it becomes a bottom bar with a sidebar drawer; on a tablet or in Samsung DeX it's the desktop layout.</li>
  <li><strong>Resource governor</strong> to keep background tabs cheap.</li>
  <li><strong>Built-in MCP server</strong> so AI agents can drive the browser.</li>
  <li><strong>Signed releases</strong> for Windows, macOS, Linux, and Android, built by CI from tagged commits, with auto-updates.</li>
</ul>
<p><em>An independent port; not affiliated with the Zen Browser team.</em></p>
    `,
    tech: ["TypeScript", "Electron", "React", "Android", "MCP"],
    github: "https://github.com/BenItBuhner/Zenium",
    demo: "https://github.com/BenItBuhner/Zenium/releases/latest",
  },
  {
    id: 10,
    title: "Codex Meter",
    description:
      "See your Codex allowance without opening a browser: a native Android and iOS app with home-screen widgets, lock-screen countdowns, notifications, and Wear OS tiles.",
    date: "2026-09-15",
    image: "/projects/codex-meter/cover.webp",
    content: `
<p>An unofficial open-source client for the Codex allowance on a signed-in ChatGPT account. There's no shared backend: each app talks to the endpoints directly and keeps credentials on-device.</p>
<ul>
  <li><strong>Android:</strong> a One UI dashboard, home widgets, Samsung lock screen and always-on display, notifications, and an optional live usage monitor.</li>
  <li><strong>Wear OS:</strong> tiles for overview, usage, reset time, and monitor, including Samsung modular-card sizing.</li>
  <li><strong>iPhone / iPad:</strong> a native SwiftUI + WidgetKit client with meters, history analytics, and widgets.</li>
</ul>
    `,
    tech: ["Java", "Android", "SwiftUI", "Wear OS"],
    github: "https://github.com/BenItBuhner/Codex-Meter",
    demo: "https://github.com/BenItBuhner/Codex-Meter/releases/latest",
  },
  {
    id: 11,
    title: "AirDrop for Everything",
    description:
      "A clean-room, cross-platform reimplementation of Apple's AirDrop protocol: a native Rust core with thin shells for Windows, Linux, macOS, and Android.",
    date: "2026-10-10",
    image: "/projects/airdrop/cover.webp",
    content: `
<p>AirDrop only speaks over AWDL (Apple Wireless Direct Link), which Windows and Android don't have. This project splits the protocol stack from the link layer so the same native binary works everywhere.</p>
<ul>
  <li><strong>Rust core</strong>: mDNS discovery, the AirDrop HTTP exchange, and archive handling, all synchronous and easy to audit.</li>
  <li><strong>CLI and GUI:</strong> <code>a4e send</code>, <code>receive</code>, <code>peers</code>, and <code>doctor</code>, plus an egui desktop app.</li>
  <li><strong>Native shells</strong> over a C ABI: Kotlin/Compose on Android and SwiftUI on macOS.</li>
  <li><strong>Hardened receiver</strong> with loopback end-to-end tests.</li>
</ul>
    `,
    tech: ["Rust", "Networking", "Kotlin", "SwiftUI"],
    github: "https://github.com/BenItBuhner/AirDrop-for-Everything",
    demo: null,
  },
  {
    id: 12,
    title: "Alarm MCP",
    description:
      "An agent rings your phone or computer, you Approve, Deny, or Dismiss, and the agent continues. A hosted MCP server with desktop and Android apps.",
    date: "2026-10-06",
    image: "/projects/alarm-mcp/cover.webp",
    content: `
<p>Long-running agents stall when they need you and you've walked away. Alarm MCP lets any MCP client ring your paired devices and wait for your answer.</p>
<ul>
  <li>Sign up, pair a desktop or Android device, and give your agent the MCP URL. OAuth works out of the box; API keys are there for clients that can't do OAuth.</li>
  <li>Works with Claude Code, Cursor, and any MCP client: <code>claude mcp add --transport http alarm https://alarm-mcp.techlitnow.com/mcp</code></li>
  <li>Then just tell your agent: "Wake me when you're done."</li>
</ul>
    `,
    tech: ["TypeScript", "MCP", "Electron", "Android", "Clerk"],
    github: "https://github.com/BenItBuhner/Alarm-MCP",
    demo: "https://alarm-mcp.techlitnow.com",
  },
  {
    id: 13,
    title: "Cursor Cloud MCP",
    description:
      "An MCP server for Cursor Cloud Agents. List agents, read transcripts, follow runs, and send follow-ups from Claude Code, Cursor, or any MCP client.",
    date: "2026-10-06",
    image: "/projects/cursor-cloud-mcp/cover.webp",
    content: `
<p>The companion to Cursor for Android, with the same sign-in and API handling, exposed as MCP tools so one agent can manage your other agents.</p>
<ul>
  <li>Sign in from the browser or paste an API key.</li>
  <li>Runs over stdio or streamable HTTP.</li>
  <li>The server describes its own tools; call <code>cursor_status</code> first.</li>
</ul>
    `,
    tech: ["TypeScript", "MCP", "Node.js"],
    github: "https://github.com/BenItBuhner/Cursor-Cloud-MCP",
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

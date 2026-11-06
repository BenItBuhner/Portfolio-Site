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
  draft?: boolean; // hide from public lists until imagery/ready
}

const projects: Project[] = [
  /*
  {
    id: 1,
    title: "Athena 1 Recursive",
    description:
      "An open source/weights recursive-reasoning hybrid SLM that beats frontier on multiple domains. It's free, small, intelligent, and easy-to-use!",
    tech: ["Python", "PyTorch", "SLM", "Recursive Reasoning"],
    github: "https://github.com/BenItBuhner/athena-1-recursive",
    demo: null
  },
  {
    id: 2,
    title: "Athena Cloud Code Agent",
    description:
      "An open-source coding agent that runs in the cloud from any call in Slack or GitHub. It's based off of the Base Agent and makes it super easy to hand off complex tasks for thorough building and testing server-side.",
    tech: ["FastAPI", "Python", "Slack API", "GitHub API"],
    github: "https://github.com/BenItBuhner/athena-cloud-code-agent",
    demo: null
  },
  {
    id: 3,
    title: "Athena CLI",
    description:
      "An open-source CLI once again based off of the Base Agent, allowing you to easily interface with any MCP tools, make edits to files, and more.",
    tech: ["Python", "CLI", "MCP", "File Operations"],
    github: "https://github.com/BenItBuhner/athena-cli",
    demo: null
  },
  */
  {
    id: 7,
    slug: "murmur",
    title: "Murmur",
    description:
      "Fast, open-source voice dictation for Windows, Linux, macOS and Android. Six merged PRs with measured gains: mean word error on a real-speech set went from 4.1% to 3.1%, and short clips go from stop to text in under 10 ms.",
    date: "2026-09-03",
    draft: true,
    content: `
<h2>What it is</h2>
<p>Murmur is a dictation app: hold a key, talk, and clean text lands wherever your cursor is. It runs on Windows, Linux, macOS and Android, with its own site at <a href="https://murmur.techlitnow.com">murmur.techlitnow.com</a>.</p>
<h2>Measured work</h2>
<ul>
  <li><strong>Speed:</strong> only the pieces that failed are redone at stop, and a timing bug that kept the fast stop off on desktop is fixed. Stopping a 25-minute dictation takes about 0.1–0.2 s of Murmur's own work, measured locally, and short clean clips go from stop to text in under 10 ms.</li>
  <li><strong>Accuracy:</strong> fixes for cut-off endings, repetition loops and a phantom "Thank you" on Android. On a local set of 14 real dictations, mean word error went from 4.1% to 3.1%, and false sentence breaks were cut from 14 to 7.</li>
  <li><strong>Profiles:</strong> Default, Casual, Polished or As spoken, set globally or per app, with no added stop time.</li>
</ul>
<p>Every change above is a merged pull request with before-and-after numbers.</p>
    `,
    tech: ["Kotlin", "Speech-to-text", "Desktop", "Android"],
    github: "https://github.com/BenItBuhner/Murmur",
    demo: "https://murmur.techlitnow.com",
  },
  {
    id: 8,
    slug: "ephemeris",
    title: "Ephemeris",
    description:
      "A mission layer above Linear, Notion and meeting notes. Name a goal, and Ephemeris ties the tasks, issues, meetings and voice notes that belong to it together, each with a citation. Any agent can read and update it through one MCP tool.",
    date: "2026-11-01",
    draft: true,
    content: `
<h2>What it is</h2>
<p>Ephemeris organizes work around <strong>missions</strong>: a named goal with a deadline, phases and steps. Voice notes from Murmur, meeting action items and new issues land in an inbox, and a triage agent proposes where each one belongs, with a citation such as "at 1:04, Sam". One tap approves it, and an approved step can become a Linear issue.</p>
<h2>What's built</h2>
<ul>
  <li>Missions, phases and timeline, inbox, and a triage agent with citations</li>
  <li>Linear write-back and a meeting-notes plane that reads Wispr Notetaker over Wispr's MCP</li>
  <li>A <code>get_context</code> MCP server, so any agent can ask "what should I work on?" and log progress back</li>
  <li>An <code>eph</code> CLI, a web UI, and an audit trail with undo</li>
</ul>
<h2>Status</h2>
<p>The demo runs end to end and 14 end-to-end tests pass. It has been tested against a stand-in for Wispr's MCP, not yet on real Wispr or Linear accounts.</p>
    `,
    tech: ["TypeScript", "MCP", "Agents", "Linear API"],
    github: "https://github.com/BenItBuhner/Ephemeris",
    demo: null,
  },
  {
    id: 9,
    slug: "silent-lab",
    title: "Silent Lab",
    description:
      "An experiment in silent input: it types trained phrases by reading lips from a camera, with no sound. Scored 96.5% on 10 trained phrases with a simulated 3D face; real-face testing is next.",
    date: "2026-11-02",
    draft: true,
    content: `
<h2>What it is</h2>
<p>Silent Lab reads trained phrases from your lips with an ordinary camera, so you can enter text without making a sound. It also includes a head-motion bridge for Galaxy Buds 3 Pro.</p>
<h2>Results so far</h2>
<p>All numbers are from a <strong>simulated 3D face</strong>, five takes each:</p>
<ul>
  <li>10 trained phrases: 96.5%</li>
  <li>22 trained words: 80%</li>
  <li>Words with head movement: 68.5%</li>
</ul>
<p>It recognizes trained phrases only, not free dictation. Testing on a real face is the next step.</p>
    `,
    tech: ["Computer Vision", "Lip Reading", "TypeScript"],
    github: "https://github.com/BenItBuhner/Ephemeris/pull/1",
    demo: null,
  },
  {
    id: 10,
    slug: "airdrop-for-everything",
    title: "AirDrop for Everything",
    description:
      "A clean-room reimplementation of the AirDrop protocol for every platform. Send and receive over AWDL (macOS, or Linux with OWL) or plain LAN.",
    date: "2026-10-09",
    draft: true,
    tech: ["Rust", "Python", "Networking", "AWDL"],
    github: "https://github.com/BenItBuhner/AirDrop-for-Everything",
    demo: null,
  },
  {
    id: 11,
    slug: "codex-meter",
    title: "Codex-Meter",
    description:
      "An easy-to-use, open-source Android client for checking and monitoring your Codex usage.",
    date: "2026-07-11",
    draft: true,
    tech: ["Java", "Android"],
    github: "https://github.com/BenItBuhner/Codex-Meter",
    demo: null,
  },
  {
    id: 5,
    slug: "model-proxy",
    title: "Model Proxy (With Claude Code)",
    description:
      "Resilient inference proxy with API key/provider/model fallbacks, optimized to plug any model into Claude Code with minimal setup.",
    date: "2025-02-01",
    content: `
<h2>The Pain With Claude Code & Similar Tools</h2>
<p>I always loved the looks, experience, and more with Claude Code; even if many showed immense latency, bloated inference usage, and many inefficiencies, I find these are mere tradeoffs to something far greater. Sub-agents, native MCP, skill, slash commands, and more, <em>all</em> are very useful and can compound their usefulness when used right. Yet to mere mortals, this usefulness is restrained by its immense cost to use with no real limits. Sure, you can enable paid usage and pay on a per token basis, but this stacks quickly, and there are strong alternatives like GLM-4.6, Qwen3-Coder, and many more.</p>
<h2>My Solution to These Issues</h2>
<p>Here is my custom “model proxy,” not solely for Claude Code, but also to harness free offerings from some providers. Many offer free tiers with rate-limits, and those limits can be frustrating when you hit them—until now. This proxy has:</p>
<ul>
  <li><strong>API Key Fallback Protection:</strong> Detects rate-limits/faults and retries other API keys for that provider to keep tools like Claude Code flowing.</li>
  <li><strong>Provider Fallback Protection:</strong> If all keys/accounts or a server are overloaded, the framework gracefully falls back to another provider for the same model.</li>
  <li><strong>Model Fallback Protection:</strong> When all keys and models are depleted, it can resort to the next best model, letting key-level and provider-level fallbacks handle the next option.</li>
</ul>
<h2>How It’s Better Than the Rest</h2>
<p>Many “Claude Code proxies” work but can feel rough. This framework enables efficient streaming at scale, multiple models concurrently, and layered fail-safes. It’s a singular command to get your custom models running in Claude Code or any OpenAI/Anthropic-compatible tool.</p>
<h2>Where This Proxy/Link is Being Used Today</h2>
<p>Thousands use this via a beta in <strong>Nahcrof AI</strong>, a side-project hosting affordable inference (GLM-4.6, Kimi K2 Thinking, DeepSeek V3.2 Reasoning, Qwen3-Coder, GPT-OSS-120B, and more). The OSS implementation welcomes contributions to improve accessibility.</p>
<h2>Why Take Advantage of This?</h2>
<p>Claude Code is powerful but not accessible to all. If you hit limits (free or paid), this “set it and forget it” proxy fails over across keys, providers, and models to keep you working without interruption.</p>
    `,
    image: "/projects/model-proxy/claude-code-tunnel-header.png",
    tech: [
      "Python",
      "FastAPI",
      "OpenAI SDK",
      "Anthropic SDK",
      "Google GenAI SDK",
    ],
    github: "https://github.com/BenItBuhner/model-proxy",
    demo: null,
  },
  /*
  {
    id: 6,
    title: "Noetic",
    description:
      "An open-source alternative to Notion, Linear, Todoist, and AI-powered assistants, unifying work management and AI tools into one seamless experience.",
    date: "2025-12-19",
    image: "/projects/noetic/noetic-header.png",
    tech: ["Next.js", "TypeScript", "Generative AI", "Agents", "Productivity"],
    github: "https://github.com/BenItBuhner/noetic",
    demo: null,
    comingSoon: true,
  },
  */
];

function isPublic(project: Project): boolean {
  // Draft / no-imagery placeholders stay in source but off the live site
  return !project.draft && !project.comingSoon && Boolean(project.image);
}

export function getAllProjects(): Project[] {
  return projects.filter(isPublic);
}

export function getProjectById(idOrSlug: string): Project | undefined {
  const numeric = Number(idOrSlug);
  let project: Project | undefined;
  if (!Number.isNaN(numeric)) {
    project = projects.find((p) => p.id === numeric);
  } else {
    project = projects.find(
      (p) =>
        p.slug && (p.slug === idOrSlug || p.slug?.split("/").pop() === idOrSlug),
    );
  }
  return project && isPublic(project) ? project : undefined;
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects();
}

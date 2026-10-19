import SectionHeader from "./SectionHeader";
import styles from "./Projects.module.css";

const imgGroup36 = "/assets/group36.svg";

const INTRO_TEXT =
  "I build and ship open-source tools that make agents easier to run, watch, and trust, plus the apps I wanted for myself:";

const PROJECTS = [
  {
    title: "Cesium:",
    description:
      "A local-first AI workbench that runs every coding agent (Cursor, Codex, Claude Code, OpenCode, and its own) against real files and terminals, from desktop, phone, or watch.",
    subItems: [],
  },
  {
    title: "Murmur:",
    description:
      "Voice dictation for desktop and Android that turns speech into clean, formatted text wherever your cursor is.",
    subItems: [],
  },
  {
    title: "Mobile & MCP tooling:",
    description:
      "Cursor for Android, Codex Meter, Alarm MCP, and Cursor Cloud MCP: tools for running and watching agents from anywhere.",
    subItems: [],
  },
  {
    title: "Systems work:",
    description:
      "Zenium (Zen Browser's UX on Chromium) and AirDrop for Everything (a clean-room AirDrop protocol in Rust).",
    subItems: [],
  },
];

const OUTRO_TEXT =
  "These are some of my most recent projects, and I hope to keep making a ton! You can check them out at my site or on my GitHub (at the top).";

export default function Projects({ className }: { className?: string }) {
  return (
    <section className={`${styles.section} ${className || ""}`}>
      <div className={styles.headerWrapper}>
        <SectionHeader
          title="Projects & Models"
          subtitle="Agentic • Autonomous • Intelligent"
          svgSrc={imgGroup36}
          svgWidth={615}
          svgHeight={46}
          titleLeft="35px"
          subtitleLeft="298px"
          titleTop="3px"
          subtitleTop="10px"
        />
      </div>
      <div className={styles.content}>
        <p className={styles.intro}>{INTRO_TEXT}</p>
        <ul className={styles.list}>
          {PROJECTS.map((project, index) => (
            <li key={index} className={styles.listItem}>
              <span className={styles.title}>{project.title}</span>
              <span>{project.description}</span>
              {project.subItems && (
                <ul className={styles.subList}>
                  {project.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className={styles.subListItem}>
                      <span className={styles.subText}>{subItem}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <p className={styles.outro}>{OUTRO_TEXT}</p>
      </div>
    </section>
  );
}


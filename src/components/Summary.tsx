import SectionHeader from "./SectionHeader";
import styles from "./Summary.module.css";

const imgGroup34 = "/assets/group34.svg";

const SUMMARY_TEXT =
  "Self-taught design engineer. I build the full stack of AI-native products: capture (Murmur), missions on top of voice (Ephemeris), Codex-native tools (Codex-Meter, MCP connectors), and interaction craft (Glassé, Codex App redesign). I measure what I ship — latency, WER, honest tradeoffs — and I'm looking for teams where portfolio and demos matter more than credentials. Open to SF / US remote. X @BennettBuhner · GitHub BenItBuhner";

export default function Summary({ className }: { className?: string }) {
  return (
    <section className={`${styles.section} ${className || ""}`}>
      <div className={styles.headerWrapper}>
        <SectionHeader
          title="Summary"
          subtitle="Interests • Goals • Talent"
          svgSrc={imgGroup34}
          svgWidth={425}
          svgHeight={45}
          titleLeft="35px"
          subtitleLeft="189px"
          titleTop="3px"
          subtitleTop="10px"
        />
      </div>
      <p className={styles.text}>{SUMMARY_TEXT}</p>
    </section>
  );
}


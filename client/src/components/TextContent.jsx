import styles from "../assets/CSS/Sizing.module.css";

export default function TextContent({ children }) {
  return (
    <>
      <section className={styles.paragraphSettings}>{children}</section>
    </>
  );
}

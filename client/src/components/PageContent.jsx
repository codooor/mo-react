import styles from "../assets/CSS/Sizing.module.css";

export default function PageContent({ children }) {
  return <main className={styles.pageContainer}>{children}</main>;
}

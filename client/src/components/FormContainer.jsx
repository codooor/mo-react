import styles from "../assets/CSS/Sizing.module.css";

export default function FormContainer({ children }) {
  return <div className={styles.formContainer}>{children}</div>;
}

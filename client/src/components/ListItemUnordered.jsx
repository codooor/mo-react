import styles from "../assets/CSS/Sizing.module.css";

export default function ListItemUnordered({ listItems, children }) {
  return (
    <>
      <li className={styles.listMargin}>{listItems || children}</li>
    </>
  );
}

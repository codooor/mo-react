import AxiosImage from "../assets/Images/Axios-React-Fetch.jpg";
import styles from "../assets/CSS/Sizing.module.css";

export default function Image() {
  return (
    <>
      <img
        src={AxiosImage}
        alt="a react image with the word axios to the left and fetch to the right of the image"
        width="100%"
        className={styles.roundImage}
      />
    </>
  );
}

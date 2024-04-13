import { LogoImageName } from "../atoms/LogoImageName";
import styles from "../../styles/card.module.css";

export const Card = () => {
  return (
    <div className={styles.card}>
      <LogoImageName />
    </div>
  );
};

import BackIcon from "./BackIcon";
import styles from "./styles.module.css";

type Props = {};

export function Header({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <BackIcon />
      </div>
      <div className={styles.centerSide}>center</div>
      <div className={styles.rightSide}>right</div>
    </div>
  );
}

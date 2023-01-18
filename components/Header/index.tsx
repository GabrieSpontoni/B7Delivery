import Link from "next/link";
import BackIcon from "./BackIcon";
import styles from "./styles.module.css";

type Props = {
  backHref: string;
  color: string;
  title?: string;
  subtitle?: string;
};

export function Header({ backHref, color, title, subtitle }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Link href={backHref}>
          <BackIcon color={color} />
        </Link>
      </div>
      <div className={styles.centerSide}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
      <div className={styles.rightSide}></div>
    </div>
  );
}

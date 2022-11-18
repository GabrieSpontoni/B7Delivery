import { InputSearch } from "../../components/InputSearch";
import { Banner } from "../../components/Banner";

import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>Seja Bem Vindo (a) 👋</div>
            <div className={styles.headerSubtitle}>O que deseja para hoje?</div>
          </div>
          <div className={styles.headerTopRight}>
            <div className={styles.headerMenuButton}>
              <div className={styles.headerMenuButtonLine} />
              <div className={styles.headerMenuButtonLine} />
              <div className={styles.headerMenuButtonLine} />
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <InputSearch mainColor="#FB9400" />
        </div>
      </header>

      <Banner />
    </div>
  );
}

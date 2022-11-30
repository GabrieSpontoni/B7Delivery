import { InputSearch } from "../../components/InputSearch";
import { Banner } from "../../components/Banner";
import { ProductItem } from "../../components/ProductItem";

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

      <div className={styles.grid}>
        <ProductItem
          data={{
            id: 1,
            image: "/temp/burger.png",
            category: "Tradicional",
            title: "Monster Burger",
            price: "R$ 19,90",
          }}
          mainColor="#FB9400"
          secondaryColor="blue"
        />
        <ProductItem
          data={{
            id: 2,
            image: "/temp/burger.png",
            category: "Monstro",
            title: "Light Burger",
            price: "R$ 139,90",
          }}
          mainColor="#FB9400"
          secondaryColor="blue"
        />
      </div>
    </div>
  );
}

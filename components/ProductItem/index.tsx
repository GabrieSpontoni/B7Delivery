import styles from "./styles.module.css";

export function ProductItem() {
  return (
    <div className={styles.container}>
      <div className={styles.header} />

      <div className={styles.body}>
        <div className={styles.image}>
          <img src="/temp/burger.png" alt="" />
        </div>
        <div className={styles.category}>Tradicional</div>
        <div className={styles.title}>Monster Burger</div>
        <div className={styles.price}>R$ 19,90</div>
      </div>
    </div>
  );
}

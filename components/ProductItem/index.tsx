import Link from "next/link";
import { Product } from "../../types";
import styles from "./styles.module.css";

type Props = {
  data: Product;
  mainColor: string;
  secondaryColor: string;
};

export function ProductItem({ data, mainColor, secondaryColor }: Props) {
  return (
    <Link href={`/b7burger/product/${data.id}`} className={styles.link}>
      <div className={styles.container}>
        <div
          className={styles.header}
          style={{
            backgroundColor: secondaryColor,
          }}
        />

        <div className={styles.body}>
          <div className={styles.image}>
            <img src={data.image} alt="" />
          </div>
          <div className={styles.category}>{data.category}</div>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.price} style={{ color: mainColor }}>
            {data.price}
          </div>
        </div>
      </div>
    </Link>
  );
}

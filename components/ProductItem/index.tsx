import Link from "next/link";
import { useAppContext } from "../../contexts/AppContext";
import { Product } from "../../types/Product";
import styles from "./styles.module.css";

type Props = {
  data: Product;
};

export function ProductItem({ data }: Props) {
  const { tenant } = useAppContext();
  return (
    <Link href={`/${tenant?.slug}/product/${data.id}`} className={styles.link}>
      <div className={styles.container}>
        <div
          className={styles.header}
          style={{
            backgroundColor: tenant?.secondaryColor,
          }}
        />

        <div className={styles.body}>
          <div className={styles.image}>
            <img src={data.image} alt="" />
          </div>
          <div className={styles.category}>{data.category}</div>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.price} style={{ color: tenant?.mainColor }}>
            {data.price}
          </div>
        </div>
      </div>
    </Link>
  );
}

import { GetServerSideProps } from "next";

import { getTenantResponse, UseApi } from "../../hooks/useApi";

import { InputSearch } from "../../components/InputSearch";
import { Banner } from "../../components/Banner";
import { ProductItem } from "../../components/ProductItem";

import styles from "../../styles/Home.module.css";

export default function Home(data: Props) {
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
              <div
                className={styles.headerMenuButtonLine}
                style={{
                  backgroundColor: data.tenant.mainColor,
                }}
              />
              <div
                className={styles.headerMenuButtonLine}
                style={{
                  backgroundColor: data.tenant.mainColor,
                }}
              />
              <div
                className={styles.headerMenuButtonLine}
                style={{
                  backgroundColor: data.tenant.mainColor,
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <InputSearch mainColor={data.tenant.mainColor} />
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
          mainColor={data.tenant.mainColor}
          secondaryColor={data.tenant.secondaryColor}
        />
        <ProductItem
          data={{
            id: 2,
            image: "/temp/burger.png",
            category: "Monstro",
            title: "Light Burger",
            price: "R$ 139,90",
          }}
          mainColor={data.tenant.mainColor}
          secondaryColor={data.tenant.secondaryColor}
        />
      </div>
    </div>
  );
}

type Props = {
  tenant: getTenantResponse;
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;
  const api = UseApi();
  const tenant = await api.getTenant(tenantSlug as string);
  if (!tenant) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      tenant,
    },
  };
};

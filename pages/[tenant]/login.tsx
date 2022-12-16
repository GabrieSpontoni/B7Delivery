import { GetServerSideProps } from "next";

import { useAppContext } from "../../contexts/AppContext";

import { UseApi } from "../../hooks/useApi";

import { Tenant } from "../../types/Tenant";
import styles from "../../styles/Login.module.css";
import { useEffect } from "react";
import Head from "next/head";
import { Header } from "../../components/Header";

export default function Login(data: Props) {
  const { tenant, setTenant } = useAppContext();

  useEffect(() => {
    setTenant(data.tenant);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>{tenant?.name} - Login</title>
      </Head>
      <Header />
    </div>
  );
}

type Props = {
  tenant: Tenant;
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

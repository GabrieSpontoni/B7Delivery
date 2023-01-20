import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";

import { useAppContext } from "../../contexts/AppContext";

import { UseApi } from "../../hooks/useApi";

import { Tenant } from "../../types/Tenant";

import { Header } from "../../components/Header";
import { InputField } from "../../components/InputField";

import styles from "../../styles/Login.module.css";

export default function Login(data: Props) {
  const { tenant, setTenant } = useAppContext();
  const [email, setEmail] = useState("");

  useEffect(() => {
    setTenant(data.tenant);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>{tenant?.name} - Login</title>
      </Head>
      <Header
        backHref={`/${tenant?.slug}`}
        color={tenant?.mainColor as string}
      />
      <InputField
        color={tenant?.mainColor as string}
        placeholder="Digite seu email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        password={false}
      />
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

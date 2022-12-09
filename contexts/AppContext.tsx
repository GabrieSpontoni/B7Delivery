import { createContext, ReactNode, useContext, useState } from "react";
import { Tenant } from "../types/Tenant";

type appContextType = {
  tenant: Tenant | null;
  setTenant: (tenant: Tenant) => void;
};

export const appContext = createContext<appContextType>({
  tenant: null,
  setTenant: (tenant: Tenant) => {},
});

export const useAppContext = () => useContext(appContext);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [tenant, setTenant] = useState<Tenant | null>(null);

  return (
    <appContext.Provider value={{ tenant, setTenant }}>
      {children}
    </appContext.Provider>
  );
};

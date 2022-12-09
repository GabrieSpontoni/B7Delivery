import { Tenant } from "../types/Tenant";

export const UseApi = () => ({
  getTenant: (tenantSlug: string): boolean | Tenant => {
    switch (tenantSlug) {
      case "b7Burger":
        return {
          slug: "b7Burger",
          name: "B7 Burger",
          mainColor: "#e319dc",
          secondaryColor: "#19e320",
        };
      case "b7Pizza":
        return {
          slug: "b7Pizza",
          name: "B7 Pizza",
          mainColor: "#e80e0e",
          secondaryColor: "#e6c005",
        };
      default:
        return false;
    }
  },
});

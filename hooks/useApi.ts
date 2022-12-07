export type getTenantResponse = {
  name: string;
  mainColor: string;
  secondaryColor: string;
};

export const UseApi = () => ({
  getTenant: (tenantSlug: string): boolean | getTenantResponse => {
    switch (tenantSlug) {
      case "b7Burger":
        return {
          name: "B7 Burger",
          mainColor: "#e319dc",
          secondaryColor: "#19e320",
        };
      case "b7Pizza":
        return {
          name: "B7 Pizza",
          mainColor: "#e80e0e",
          secondaryColor: "#e6c005",
        };
      default:
        return false;
    }
  },
});

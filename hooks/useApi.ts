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
          mainColor: "#F2C94C",
          secondaryColor: "#F2994A",
        };
      case "b7Pizza":
        return {
          name: "B7 Pizza",
          mainColor: "#F2C94C",
          secondaryColor: "#F2994A",
        };
      default:
        return false;
    }
  },
});

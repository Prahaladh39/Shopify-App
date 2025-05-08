// app/components/ShopifyProvider.jsx
import { createContext, useContext } from "react";

// Fake Shopify Context
const ShopifyContext = createContext({
  shop: "TechCart.myshopify.com",
  accessToken: "fake-access-token",
});

export function ShopifyProvider({ children }) {
  return (
    <ShopifyContext.Provider
      value={{
        shop: "TechCart.myshopify.com",
        accessToken: "fake-access-token",
      }}
    >
      {children}
    </ShopifyContext.Provider>
  );
}

export const useShopify = () => useContext(ShopifyContext);

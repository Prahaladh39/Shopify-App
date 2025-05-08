import { redirect } from "@remix-run/node";
import { Form, useLoaderData, Link, Outlet } from "@remix-run/react";
import { login } from "../../shopify.server";
import { useMemo } from "react";
import { AppProvider as PolarisProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import { useShopify } from "../../components/ShopifyProvider";
export const loader = async ({ request }) => {
  const url = new URL(request.url);

  if (url.searchParams.get("shop")) {
    throw redirect(`/app?${url.searchParams.toString()}`);
  }

  return { showForm: Boolean(login) };
};

export default function App() {
  // const { showForm } = useLoaderData();
  const { shop } = useShopify();
  const config = useMemo(() => {
    return {
      apiKey: "DUMMY_API_KEY",
      host: "dummy_host",
      forceRedirect: true,
    };
  }, []);
  return (
    <>
      <PolarisProvider i18n={{}}>
        <center>
          <p className="home-subtitle1">{`You're viewing as shop: ${shop}`}</p>
        </center>
        <div className="home-container">
          <h1 className="home-title">Welcome to TechCart 🛒</h1>
          <p className="home-subtitle">Your one-stop store for all gadgets!</p>
          <div className="home-buttons">
            <Link to="/products" className="home-btn explore">
              Explore Products
            </Link>
            <Link to="/wishlist" className="home-btn wishlist">
              Wishlist
            </Link>
          </div>
        </div>
        <Outlet />
      </PolarisProvider>
    </>
  );
}

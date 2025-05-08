import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { AppProvider as PolarisProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import { ShopifyProvider } from "./components/ShopifyProvider";
export default function App() {
  return (
    <html>
      <head>
        {/* <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://cdn.shopify.com/" />
        <link
          rel="stylesheet"
          href="https://cdn.shopify.com/static/fonts/inter/v4/styles.css"
        />
        */}
        <Meta />
        <Links />
      </head>
      <body>
        <PolarisProvider i18n={{}}>
          <ShopifyProvider>
            <Outlet />
          </ShopifyProvider>
        </PolarisProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

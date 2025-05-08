// app/routes/products.jsx
import { useLoaderData, Link } from "@remix-run/react";
//import products from "./products";
import products from "../data/products";
import "../App.css";
import { Toaster, toast } from "react-hot-toast";
import { Card, Button, Text } from "@shopify/polaris";
export async function loader() {
  return { products };
}
export default function Products() {
  //const { products } = useLoaderData();
  const handleSaveForLater = (productId) => {
    const savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
    if (!savedItems.includes(productId)) {
      savedItems.push(productId);
      localStorage.setItem("savedItems", JSON.stringify(savedItems));
      toast.success("Item saved for later!");
    } else {
      toast.success("Already saved for later.");
    }
  };
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="navbar">
        <h1 className="nav-title">Products</h1>
        <div className="nav-links">
          <Link to="/wishlist" className="nav-btn">
            Go To WishList
          </Link>
          <Link to="/" className="nav-btn">
            Home
          </Link>
        </div>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Card sectioned>
              <div className="product-image-wrapper">
                <img src={product.image} alt="text" />
              </div>
              <Text variant="headingMd">{product.title}</Text>
              <Text>{product.description}</Text>
              <Text>${product.price}</Text>
              <Button>Add To Cart</Button>
              <Button onClick={() => handleSaveForLater(product.id)}>
                Save for Later
              </Button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

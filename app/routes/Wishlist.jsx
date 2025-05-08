import { useEffect, useState } from "react";
//import products from "./products";
import { Card, Button, Text } from "@shopify/polaris";
import products from "../data/products";
import "../App.css";
import { Toaster, toast } from "react-hot-toast";
export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("savedItems")) || [];
    const filtered = products.filter((product) =>
      savedWishlist.includes(product.id),
    );
    setWishlist(filtered);
  }, []);

  const handleRemove = (id) => {
    const updatedWishlist = wishlist.filter((product) => product.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem(
      "savedItems",
      JSON.stringify(updatedWishlist.map((p) => p.id)),
    );
  };

  const handleMoveToCart = (id) => {
    toast.success("Moved to cart");
    handleRemove(id);
  };
  return (
    <>
      <h1 className="ret">My Wishlist</h1>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
        <div className="products-container">
          {wishlist.map((product) => (
            <div key={product.id} className="product-card">
              <Card sectioned>
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.title} />
                </div>
                <Text variant="headingMd">{product.title}</Text>
                <Text>{product.description}</Text>
                <Text>${product.price}</Text>
                <Button
                  onClick={() => {
                    handleMoveToCart();
                  }}
                >
                  Move To Cart
                </Button>
                <Button onClick={() => handleRemove(product.id)}>Remove</Button>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

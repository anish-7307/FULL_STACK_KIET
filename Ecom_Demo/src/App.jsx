import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/cart";
import "./App.css";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: 80000,
      image: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg"
    },
    {
      id: 2,
      name: "MacBook Air",
      price: 120000,
      image: "https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg"
    },
    {
      id: 3,
      name: "Boat Headphones",
      price: 1999,
      image: "https://m.media-amazon.com/images/I/61kWB+uzR2L._SX679_.jpg"
    }
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <Header cartCount={cartItems.length} />
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
}
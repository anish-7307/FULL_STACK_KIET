import ProductCard from "./Productcard";

export default function ProductList({ products, addToCart }) {
  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}
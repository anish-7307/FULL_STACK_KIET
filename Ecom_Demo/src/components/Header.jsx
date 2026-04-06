export default function Header({ cartCount }) {
  return (
    <div className="header">
      <h1>My E-Commerce</h1>
      <div>Cart: {cartCount}</div>
    </div>
  );
}
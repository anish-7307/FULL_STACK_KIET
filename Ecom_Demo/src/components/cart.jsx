export default function Cart({ cartItems }) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="cart">
      <h2>Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            {item.name} - {item.price}
          </div>
        ))
      )}
      
      <h3>Total:  {total}</h3>
    </div>
  );
}
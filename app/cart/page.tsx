export default function Cart() {
  const cart = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      {cart.map((product) => (
        <CartItem name={product} />
      ))}
    </div>
  );
}

function CartItem({ name }: { name: string }) {
  return (
    <div className="cart-item">
      <p>{name}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

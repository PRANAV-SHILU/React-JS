import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function AddToCart() {
  const value = useSelector((state) => state.cart.items.length);
  return (
    <div className="cart-wrapper">
      <Link to="/cart" className="cart-link">
        <span className="cart-icon">🛒</span>
        <span className="cart-text">Cart</span>
        {value !== 0 && <span className="cart-count">{value}</span>}
      </Link>
    </div>
  );
}

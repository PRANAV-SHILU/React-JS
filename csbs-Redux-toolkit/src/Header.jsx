import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">Ele-x</Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link>Shop</Link>
            </li>
          </ul>
        </nav>
        <AddToCart />
      </div>
    </header>
  );
}

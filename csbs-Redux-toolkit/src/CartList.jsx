import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "./redux/slice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CartList() {
  const cartSelector = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(cartSelector);

  useEffect(() => {
    setCartItems(cartSelector);
  }, [cartSelector]);

  function handleOrder() {
    localStorage.clear();
    dispatch(clearCart());
    alert("Order placed ");
    navigate("/");
  }

  const manageQuantity = (id, q) => {
    let quantity = parseInt(q) > 1 ? parseInt(q) : 1;
    const cartTempItems = cartItems.map((item) => {
      return item.id == id ? { ...item, quantity } : item;
    });
    setCartItems(cartTempItems);
  };

  return (
    <section>
      <h1>Cart Item List</h1>
      <h1>Total item : {cartItems.length}</h1>
      {cartItems.length === 0 && <h1>Please add any item to cart</h1>}
      <div className="cart-grid">
        {cartItems.length > 0 &&
          cartItems.map((item) => (
            <div className="cart-grid-item" key={item.id}>
              <div className="cart-item-image">
                <img src={item.thumbnail} alt={item.title} />
              </div>

              <div className="cart-item-content">
                <div className="cart-item-top">
                  <div className="cart-item-info">
                    <h4 className="cart-item-title">{item.title}</h4>
                    <p className="cart-item-category">{item.category}</p>
                  </div>

                  <div className="cart-item-action">
                    <span className="cart-item-price">${item.price}</span>
                    <span className="cart-item-price">
                      total price : $
                      {(item.quantity
                        ? item.price * item.quantity
                        : item.price
                      ).toFixed(2)}
                    </span>
                    <input
                      style={{ maxWidth: "82px" }}
                      onChange={(e) => manageQuantity(item.id, e.target.value)}
                      type="number"
                      placeholder="Enter queantity"
                      value={item.quantity ? item.quantity : 1}
                    />
                    <button
                      className="remove-cart-btn"
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {cartItems.length !== 0 && (
        <h1>
          Total : $
          {cartItems
            .reduce(
              (sum, item) =>
                item.quantity
                  ? sum + item.price * item.quantity
                  : sum + item.price,
              0,
            )
            .toFixed(2)}
        </h1>
      )}

      <button className="add-to-cart" onClick={handleOrder}>
        Place order
      </button>
    </section>
  );
}

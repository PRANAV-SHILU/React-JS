import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearCart } from "./redux/slice";
import { useEffect } from "react";
import { fetchProducts } from "./redux/productSlice";

export default function Product() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { items, error, status } = useSelector((state) => state.products);
  console.log(items, error, status);
  const value = useSelector((state) => state.cart.items);

  return (
    <>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        <h1>Shopping : </h1>
        {items.length && (
          <button
            className="clear-cart-btn"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        )}
      </section>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          padding: "20px",
        }}
      >
        {items.length ? (
          items.map((item) => {
            return (
              <div className="product-card" key={item.id}>
                <div className="product-image">
                  <img src={item.thumbnail} alt="image" />
                </div>

                <div className="product-info">
                  <h3 className="product-title">{item.title}</h3>

                  <p className="product-desc">{item.description}</p>

                  <div className="product-footer">
                    <span className="product-price">{item.price}</span>

                    {value.find((cartItem) => cartItem.id === item.id) ? (
                      <button
                        className="remove-cart-btn"
                        onClick={() => dispatch(removeItem(item.id))}
                      >
                        Remove from Cart
                      </button>
                    ) : (
                      <button
                        className="add-to-cart"
                        onClick={() => dispatch(addItem(item))}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </section>
    </>
  );
}

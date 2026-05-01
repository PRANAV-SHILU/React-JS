import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  fetchCounterValue,
} from "./features/counter/counterSlice";
import { login, logout } from "./features/user/userSlice";
// import {
//   selectCounterError,
//   selectCounterLoading,
//   selectCounterValue,
// } from "./features/counter/counterSelectors";

function Redux() {
  const { value, loading, error } = useSelector((state) => state.counter);
  // const value = useSelector(selectCounterValue);
  // const loading = useSelector(selectCounterLoading);
  // const error = useSelector(selectCounterError);

  const { name, loggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (value === 0) {
      dispatch(fetchCounterValue());
    }
  }, [dispatch,value]);

  return (
    <section style={{ padding: "20px" }}>
      <h1>RTK Counter : {value}</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      <button onClick={() => dispatch(fetchCounterValue())}>Refetch</button>

      {loggedIn ? (
        <>
          <h2>Welcome {name} </h2>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <button onClick={() => dispatch(login("Pranav"))}>Login</button>
      )}
    </section>
  );
}

export default Redux;

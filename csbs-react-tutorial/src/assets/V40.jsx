import { useRef } from "react";
import UserInput from "./UserInput";

export default function V40() {
  const ref = useRef(null);

  function inputHandler() {
    ref.current.style.color = "blue";
    ref.current.focus();
  }

  return (
    <section>
      <h2>V40 - forwardRef for react 19</h2>
      <UserInput ref={ref} />
      <button onClick={inputHandler}>Focus</button>
    </section>
  );
}

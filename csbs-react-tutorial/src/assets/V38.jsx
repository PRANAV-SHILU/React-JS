import { useRef } from "react";

export default function V38() {
  const ref = useRef(null);

  function inputHandler() {
    ref.current.style.color = "blue";
    ref.current.focus();
  }

  return (
    <section>
      <h2>V38 - useRef hook</h2>
      <input type="text" ref={ref} placeholder="Input field" />
      <button onClick={inputHandler}>Focus</button>
    </section>
  );
}

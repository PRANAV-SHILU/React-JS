import { useState } from "react";

export default function FavColor() {
  const [color, setColor] = useState("red");

  return (
    <section>
        
      <h1>my fav color is {color}</h1>

      <button type="button" onClick={() => setColor("Red")}>
        Red
      </button>

      <button type="button" onClick={() => setColor("Blue")}>
        Blue
      </button>

      <button type="button" onClick={() => setColor("Orange")}>
        Orange
      </button>

      <button type="button" onClick={() => setColor("Pink")}>
        Pink
      </button>

    </section>
  );
}

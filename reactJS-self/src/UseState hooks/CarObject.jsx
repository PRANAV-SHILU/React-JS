import { useState } from "react";

// If we only called setCar({color: "blue"}), this would remove the brand, model, and year from our state.

export default function MyCar() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  function updateColor(newColor) {
    setCar((previousState) => {
      return { ...previousState, color: newColor };
    });
  }

  return (
    <section>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>

      <button
        onClick={() => {
          setCar((previousState) => ({ ...previousState, color: "Blue" }));
        }}
      >
        Blue Direct
      </button>

      <button onClick={() => updateColor("blue")}>Blue</button>
      <button onClick={() => updateColor("Red")}>Red</button>
      <button onClick={() => updateColor("Yellow")}>Yellow</button>
    </section>
  );
}

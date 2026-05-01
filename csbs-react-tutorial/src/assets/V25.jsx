import { useEffect, useState } from "react";

export default function V25() {
  const [time, setTime] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    const id1 = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(id1);
  }, []);

  return (
    <section>
      <h2>V25 - clock</h2>
      <ChangeColor onchange={(e) => setColor(e.target.value)} color={color} />
      <h1
        style={{
          backgroundColor: "black",
          padding: "10px",
          width: "160px",
          color: color,
        }}
      >
        {time}
      </h1>
    </section>
  );
}

function ChangeColor({ onchange, color }) {
  return (
    <>
      <h2>Select color</h2>
      <select value={color} onChange={onchange}>
        <option value="black">black</option>
        <option value="white">white</option>
        <option value="green">green</option>
        <option value="yellow">yellow</option>
      </select>
    </>
  );
}

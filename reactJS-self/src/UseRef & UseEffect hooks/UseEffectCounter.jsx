import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCalculation(count * 2);
    }, 1);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

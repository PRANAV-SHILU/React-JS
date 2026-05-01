import { useState } from "react";

export default function Counter() {
  const [score, setScore] = useState(0);

  function increment(num) {
    setScore(score + num);
  }

  return (
    <>
      <button onClick={() => increment(1)}>+1</button>
      <button onClick={() => increment(3)}>+3</button>
      
      <h1>Score: {score}</h1>
    </>
  );
}
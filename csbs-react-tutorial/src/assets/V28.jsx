import { useEffect, useState } from "react";

export default function V28() {
  const [counter, setCounter] = useState(0);

  function callOnce() {
    console.log("call once function called");
  }

  useEffect(() => {
    callOnce();
  }, []);

  return (
    <section>
      <h2>V28 - useeffect - 1</h2>
      <button onClick={() => setCounter(counter + 1)}>
        Counter : {counter}
      </button>
    </section>
  );
}

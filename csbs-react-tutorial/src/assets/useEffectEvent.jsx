import { useEffect, useEffectEvent, useState } from "react";

export default function UseEffectEvent() {
  const [count, setCount] = useState(0);

  const countControl = useEffectEvent(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      countControl();
    }, 1000);

    console.log("useeffectevent " + interval);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <h2>React 19.2 - useEffectEvent</h2>
      <h2>{count}</h2>
    </section>
  );
}

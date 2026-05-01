import { useTransition } from "react";

export default function V42() {
  const [pending, startTransition] = useTransition();

  function handleClick() {
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 2000));
    });
  }

  return (
    <section>
      <h2>V42 - useTransition</h2>

      <button onClick={handleClick} disabled={pending}>
        {!pending ? "Click" : "pending..."}
      </button>
    </section>
  );
}

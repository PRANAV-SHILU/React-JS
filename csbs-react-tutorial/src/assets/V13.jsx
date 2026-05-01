export default function V13() {
  function fruit(name) {
    alert(name);
  }

  return (
    <section>
      <h3>V13</h3>
      <button onClick={() => fruit("Apple")}>Apple</button>
      <button onClick={() => fruit("Banana")}>Banana</button>
    </section>
  );
}

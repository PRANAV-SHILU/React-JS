function Placeholder({ children }) {
  return (
    <div className="card">
      <h1>This is starting of card</h1>
      {children}
      <h1>This is ending of card</h1>
    </div>
  );
}

export default function Card() {
  return (
    <section>
      <Placeholder>
        <h2>Card Component</h2>
        <p>This is a placeholder for the card component.</p>
        <p>This is a placeholder for the card component.</p>
        <p>This is a placeholder for the card component.</p>
      </Placeholder>
    </section>
  );
}

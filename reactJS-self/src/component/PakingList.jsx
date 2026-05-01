function Item({ name, isPacked }) {
  return (
    <li>
      {name} {isPacked && "✅"}
    </li>
  );
}

function PakingList() {
  return (
    <section>
      <h2>Paking List</h2>
      <ul>
        <Item name="Space suit" isPacked={false} />
        <Item name="Submarin" isPacked={true} />
        <Item name="Tejas fighter jet" isPacked={true} />
      </ul>
    </section>
  );
}

export default PakingList;

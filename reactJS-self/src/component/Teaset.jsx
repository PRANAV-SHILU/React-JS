function cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

function TeaSet() {
  return (
    <section>
      <h1>Tea Set</h1>
      {cup({ guest: 1 })}
      {cup({ guest: 2 })}
      {cup({ guest: 3 })}
      {cup({ guest: 4 })}
      {cup({ guest: 5 })}
    </section>
  );
}

export default TeaSet;

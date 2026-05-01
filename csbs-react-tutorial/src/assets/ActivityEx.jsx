import { useState, Activity } from "react";

export default function ActivityEx() {
  const [showHome, setShowHome] = useState(true);

  return (
    <section>
      <h2>React 19.2 - Activity</h2>
      <button onClick={() => setShowHome(true)}>Home</button>
      <button onClick={() => setShowHome(false)}>Form</button>

      <Activity mode={showHome ? "visible" : "hidden"}>
        <Home />
      </Activity>

      <Activity mode={showHome ? "hidden" : "visible"}>
        <Form />
      </Activity>
    </section>
  );
}

function Home() {
  return <h3>Home component</h3>;
}
function Form() {
  return (
    <form action="">
      <h3>User form</h3>
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </form>
  );
}

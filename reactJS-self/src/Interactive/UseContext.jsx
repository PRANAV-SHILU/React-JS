import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export default function Component1() {
  const [user, setUser] = useState("Pranav");

  return (
    <section>
      <UserContext value={user}>
        <h1>HEllo {user} im component 1</h1>

        <Component2 onchange={() => setUser("Bhargav")} />
      </UserContext>
    </section>
  );
}

function Component2({ onchange }) {
  return (
    <>
      <h2>hello im am component 2</h2>
      <button onClick={onchange}>Click me</button>
      <Component3 />
    </>
  );
}
function Component3() {
  const user = useContext(UserContext);
  return <h3>HEllo {user} i have used context</h3>;
}

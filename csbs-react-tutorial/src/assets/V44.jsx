import { useRef, useState } from "react";

export default function V44() {
  const [users, setUsers] = useState([]);
  const ref = useRef();
  const unique = [...new Set(users)];

  function handleAddUsers() {
    if (!ref.current.value.trim()) return;
    setUsers([...users, ref.current.value]);
    ref.current.value = "";
  }
  return (
    <section>
      <h2>V44 - drived state</h2>
      <h3>Total users : {users.length}</h3>
      <h3>Last user : {users[users.length - 1]}</h3>
      <h3>Unique total users : {unique.length}</h3>

      <input type="text" ref={ref} placeholder="Add a name" />
      <button onClick={handleAddUsers}>Add user</button>

      {users.map((item, index) => {
        return <h4 key={index}>{item}</h4>;
      })}
    </section>
  );
}

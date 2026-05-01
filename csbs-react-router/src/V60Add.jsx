import { useState } from "react";

export default function V60Add() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit() {
    let response = await fetch("http://localhost:3000/users");
    response = await response.json();
    let id = response.length;

    console.log(id + 1, name, age, email);

    let url = "http://localhost:3000/users";
    response = await fetch(url, {
      method: "Post",
      body: JSON.stringify({
        id: ++id,
        name: name,
        age: age,
        email: email,
      }),
    });

    response = await response.json();
    if (response) {
      alert("new user added");
      console.log(response);
    }
  }

  return (
    <section style={{ textAlign: "center" }}>
      <h2>V60 - with POST method API </h2>
      <h2>Add user</h2>

      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />

      <input
        type="number"
        placeholder="age"
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <br />

      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />

      <button onClick={handleSubmit}>Submit</button>
    </section>
  );
}

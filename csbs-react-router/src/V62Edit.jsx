import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
export default function V62Edit() {
  const { userID } = useParams();
  const url = `http://localhost:3000/users/${userID}`;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function getUserdata() {
    let response = await fetch(url);
    response = await response.json();
    setName(response.name);
    setAge(response.age);
    setEmail(response.email);
  }

  useEffect(() => {
    getUserdata();
  }, []);

  async function handleUpdate() {
    // const updatedData = {
    //   name: name,
    //   age: age,
    //   email: email,
    // };
    await fetch(url, {
      method: "PATCH",
      body: JSON.stringify({ name, age, email }),
    });
    navigate("/v59home");
  }

  return (
    <section
      style={{
        textAlign: "center",
        gap: "20px",
        display: "grid",
        maxWidth: "200px",
        margin: "0 auto",
      }}
    >
      <Link to="/v59home">
        <h2>back</h2>
      </Link>
      <h2>Edit user detail of {name}</h2>

      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleUpdate}>Update user</button>
    </section>
  );
}

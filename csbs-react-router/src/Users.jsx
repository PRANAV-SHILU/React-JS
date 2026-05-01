import { Link } from "react-router";
export default function Users() {
  const userData = [
    { id: 1, name: "Anil" },
    { id: 2, name: "Sam" },
    { id: 3, name: "Sidhu" },
    { id: 4, name: "Peter" },
    { id: 5, name: "Bruce" },
    { id: 6, name: "Tony" },
  ];
  return (
    <>
      <div style={{ display: "grid", marginLeft: "10px", gap: "10px" }}>
        <h1>User list page</h1>
        {userData.map((item) => (
          <div key={item.id}>
            <Link to={"/users/" + item.id}>{item.name}</Link>
          </div>
        ))}

        <h2>Optional segment</h2>
        {userData.map((item) => (
          <div key={item.id}>
            <Link to={"/users/" + item.id + "/" + item.name}>{item.name}</Link>
          </div>
        ))}
      </div>
    </>
  );
}

import { useEffect, useState } from "react";

export default function V58() {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  async function getUsersData() {
    setLoading(true);
    let url = "http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json();
    setUsersData(response);
    setLoading(false);
  }

  useEffect(() => {
    getUsersData();
  }, []);
  return (
    <section>
      <h2>V58 - integrated selfmade API and loader</h2>

      <table cellSpacing="25px">
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>AGE</th>
          <th>EMAIL</th>
          <th>CITY</th>
          <th>PHONE</th>
        </tr>
        {!isLoading ? (
          usersData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.city}</td>
              <td>{user.phone}</td>
            </tr>
          ))
        ) : (
          <h1>Loading data...</h1>
        )}
      </table>
    </section>
  );
}

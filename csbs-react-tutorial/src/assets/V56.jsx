import { useEffect, useState } from "react";

export default function V56() {
  const [userData, setUserData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  async function getUsersData() {
    setLoading(true);
    const url = "https://dummyjson.com/users";
    let response = await fetch(url);
    response = await response.json();
    setUserData(response.users);
    setLoading(false);
  }

  useEffect(() => {
    getUsersData();
  }, []);

  console.log(userData);

  return (
    <section>
      <h2>V56 - API</h2>
      <table cellPadding="20px" border="2px">
        <tbody>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
          {!isLoading ? (
            userData &&
            userData.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
              </tr>
            ))
          ) : (
            <h1>No internet</h1>
          )}
        </tbody>
      </table>
    </section>
  );
}

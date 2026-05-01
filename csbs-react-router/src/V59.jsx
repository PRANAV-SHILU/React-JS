import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
const url = "http://localhost:3000/users";
export default function V59() {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function getUsersData() {
    setLoading(true);
    let response = await fetch(url);
    response = await response.json();
    setUsersData(response);
    setLoading(false);
  }

  useEffect(() => {
    getUsersData();
  }, []);

  async function handleDelete(id) {
    await fetch(url + "/" + id, { method: "delete" });
    getUsersData();
  }

  function handleEdit(id) {
    navigate("/v62edit/" + id);
  }

  return (
    <section>
      <h2>
        V59 - Routes and pages for user list and Add user <br /> V61 - delete{" "}
        <br /> V62+V63 - edit
      </h2>
      <table cellSpacing="25px">
        <thead>
          <tr>
            <th>NAME</th>
            <th>AGE</th>
            <th>EMAIL</th>
            <th>delete</th>
            <th>edit</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading ? (
            usersData.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => handleEdit(user.id)}>Edit</button>
                </td>
              </tr>
            ))
          ) : (
            <h1>Loading data...</h1>
          )}
        </tbody>
      </table>
    </section>
  );
}

import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

export default function AxiosGet() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err.message || "Failed to load users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  async function handleDelete(id) {
    try {
      await axios.delete(`${url}/${id}`);

      // update UI because we dont have rights to delete in api
      setData((prev) => prev.filter((user) => user.id !== id));

      alert("Deleted successfully");
    } catch (err) {
      alert(err.message || "Delete failed");
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <h1>Axios GET + DELETE</h1>

      <table cellPadding="20" cellSpacing="10" border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>City</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {data.slice(0, 5).map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

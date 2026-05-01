import axios from "axios";
import { useState } from "react";

const url = "https://jsonplaceholder.typicode.com/posts/1";

export default function AxiosPutPatch() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");

  const handlePut = async () => {
    try {
      const response = await axios.put(url, {
        id: 1,
        title: title,
        body: body,
        userId: 1,
      });

      setMessage("PUT: fully updated");
      console.log("PUT response:", response.data);
    } catch (err) {
      setMessage("PUT failed with " + err);
    }
  };

  const handlePatch = async () => {
    try {
      const response = await axios.patch(url, {
        title: title,
      });

      setMessage("PATCH: Title updated");
      console.log("PATCH response:", response.data);
    } catch (err) {
      setMessage("PATCH failed with " + err);
    }
  };

  return (
    <section>
      <h1>Axios PUT & PATCH</h1>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <textarea
        placeholder="Body (PUT only)"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handlePut}>PUT Update</button>
      <button onClick={handlePatch}>PATCH Update</button>

      <br />
      <br />
      {message && <p>{message}</p>}
    </section>
  );
}

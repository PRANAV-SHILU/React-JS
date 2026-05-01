import axios from "axios";
import { useState } from "react";

const url = "https://jsonplaceholder.typicode.com/posts";

export default function AxiosPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      const response = await axios.post(url, {
        title: title,
        body: body,
      });

      setSuccess("Post created successfully!");
      console.log("Response:", response.data);

      // clear form
      setTitle("");
      setBody("");
    } catch (err) {
      setError("Failed to create post with " + err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h1>Axios POST Method</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label> <br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Body</label> <br />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      <br />

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </section>
  );
}

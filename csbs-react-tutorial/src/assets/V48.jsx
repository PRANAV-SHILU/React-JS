import { useActionState } from "react";

export default function V48() {
  const handleSubmit = async (previousData, formData) => {
    const name = formData.get("name").trim();
    const password = formData.get("password").trim();

    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (name && password) {
      return { message: "Data submited successfully ", name, password };
    } else {
      return { error: "Please provide name and password", name, password };
    }
  };

  const [data, action, pending] = useActionState(handleSubmit, undefined);

  return (
    <section>
      <h2>V48 - useActionState hook</h2>

      <form action={action}>
        <input type="text" name="name" placeholder="name" />
        <input type="password" name="password" placeholder="password" />
        <button disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>
      </form>

      <h3 style={{ color: "red" }}>{data?.message || data?.error}</h3>

      {data && !data.error && (
        <>
          <p>Name : {data.name}</p>
          <p>Password : {data.password}</p>
        </>
      )}
    </section>
  );
}

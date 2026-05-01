import { useFormStatus } from "react-dom";

export default function V41() {
  async function handleSubmit() {
    await new Promise((res) => setTimeout(res, 2000));
  }

  return (
    <section>
      <h2>V41 - useFormStatus</h2>

      <form action={handleSubmit}>
        <CustomerForm />
      </form>
    </section>
  );
}

function CustomerForm() {
  const { pending } = useFormStatus();

  return (
    <>
      <input type="text" />
      <input type="text" />
      <button disabled={pending}>{!pending ? "submit" : "sending...."}</button>
      {/* when clicked pending becomes true then changes to false after submit  */}
    </>
  );
}

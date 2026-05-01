import "./App.css";
import OnlineCheck from "./Custome hooks/OnlineCheck.jsx";
import CustomeHookForm from "./Custome hooks/CustomHookForm.jsx";

export default function CustomHooks() {
  return (
    <>
      <h1>Custom Hooks</h1>

      <section>
        <OnlineCheck />
      </section>
      <section>
        <CustomeHookForm />
      </section>
    </>
  );
}

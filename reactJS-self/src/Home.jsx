import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section>
        <h2>Home Page</h2>
        <p>Welcome to the React Hooks learning app.</p>
      </section>

    <NavLink to="reacthookform">ReactHookForm</NavLink> | {" "}
    <NavLink to="yuplibrary">Yup Library</NavLink> |  {" "}
    <NavLink to='rhf-yup'>RHF + Yup</NavLink>
    </>
  );
}

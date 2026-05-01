import { NavLink, Outlet, Link } from "react-router";
import "./College.css";

export default function College() {
  return (
    <>
      <section className="nestedNav">
        <h1>College details</h1>
        <h2>
          <Link to="/">Go back to home</Link>
        </h2>
        <nav>
          <NavLink to="">Student</NavLink>
          <NavLink to="/department">Departments</NavLink>
          <NavLink to="details">Details</NavLink>
        </nav>
        <Outlet />
      </section>
    </>
  );
}

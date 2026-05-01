import { Outlet, NavLink } from "react-router-dom";

export default function Axios() {
  return (
    <nav>
      <NavLink to="/axios">Axios-get</NavLink> |{" "}
      <NavLink to="/axios/axios-post">Axios-Post</NavLink> |{" "}
      <NavLink to="/axios/axios-put-patch">Axios-Put-Patch</NavLink> |{" "}
      <Outlet />
    </nav>
  );
}

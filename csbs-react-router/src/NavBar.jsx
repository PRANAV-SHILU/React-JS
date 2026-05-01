import { NavLink, Outlet } from "react-router";
import "./NavBar.css";

const activeStyle = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "blue" : "black",
    fontSize: "20px",
    textDecoration: "none",
  };
};
// NavBar also gives active class you can directly give to  css file using .active see college.jsx and css
export default function NavBar() {
  return (
    <>
      <header>
        <nav>
          <div>
            <NavLink style={{ textDecoration: "none" }} to="/">
              <h2>LOGO</h2>
            </NavLink>
          </div>

          <div>
            <ul>
              <li>
                <NavLink style={activeStyle} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink style={activeStyle} to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink style={activeStyle} to="/user/login">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink style={activeStyle} to="/college">
                  College
                </NavLink>
              </li>
              <li>
                <NavLink style={activeStyle} to="/users">
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink style={activeStyle} to="/users/list">
                  List
                </NavLink>
              </li>
              <li>
                <NavLink style={activeStyle} to="/v59home">
                  V59-Home
                </NavLink>
              </li>
              <li>
                <NavLink style={activeStyle} to="/v60add">
                  V60-Add
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <Outlet />
    </>
  );
}

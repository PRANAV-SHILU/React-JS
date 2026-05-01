import { NavLink, Outlet } from "react-router-dom";

const styleLink = ({ isActive }) => {
  return {
    marginRight: "10px",
    textDecoration: "none",
    color: isActive ? "blue" : "black",
    fontSize: isActive ? "18px" : "16px",
  };
};

export default function UseRefHooks() {
  return (
    <>
      <div>
        <nav>
          <NavLink to="/use-ref/use-ref-component" style={styleLink}>
            useRef
          </NavLink>{" "}
          |{" "}
          <NavLink to="/use-ref/use-effect-component" style={styleLink}>
            useEffect
          </NavLink>{" "}
          |{" "}
        </nav>

        <hr />

        {/* Child routes render here */}
        <Outlet />
      </div>
    </>
  );
}

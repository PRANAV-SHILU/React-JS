import { NavLink, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const styleLink = ({isActive}) => {
  return {
    marginRight: '10px',
    textDecoration:'none',
    color: isActive ? 'blue' : 'black',
    fontSize: isActive ? '18px' : '16px'
  };
};

export default function App() {
  return (
    <div>
      <nav>
        <NavLink to="/" style={styleLink}>Home</NavLink> | {" "}
        <NavLink to="/component" style={styleLink}>Component</NavLink> |{" "}
        <NavLink to="/interactive" style={styleLink}>Interactive</NavLink> |{" "}
        <NavLink to="/use-state" style={styleLink}>useState</NavLink> |{" "}
        <NavLink to="/use-ref" style={styleLink}>useRef</NavLink> |{" "}
        <NavLink to="/custom-hooks" style={styleLink}>Custom Hooks</NavLink> |{" "}
        <NavLink to="/axios" style={styleLink}>axios</NavLink> | {" "}
        <NavLink to="/toast" style={styleLink}>Toast</NavLink> | {" "}
        <NavLink to="/redux" style={styleLink}>Redux</NavLink> | {" "}
      </nav>

      <hr />

      {/* Child routes render here */}
      <Outlet />
      {/* <ToastContainer/> */}
      <ToastContainer theme="colored"/>
      

    </div>
  );
}

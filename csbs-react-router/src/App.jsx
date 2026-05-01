import { Routes, Route, Navigate } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Register from "./Register";
import NavBar from "./NavBar";
import PageNotFound from "./PageNotFound";
import College from "./College";
import Student from "./Student";
import Details from "./Details";
import Department from "./Department";
import Users from "./Users";
import UserDetails from "./UserDetails";
import V59 from "./V59";
import V60Add from "./V60Add";
import V62Edit from "./V62Edit";

export default function App() {
  return (
    <>
      {/* <NavBar /> */}

      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/users/list?" element={<Users />} />{" "}
          {/*Dynamic routing and optional segment */}
          <Route path="/users/:id/:name?" element={<UserDetails />} />
          {/*Dynamic routing and optional segment */}
          <Route path="/about" element={<About />} />
          <Route path="/v59home" element={<V59 />} />
          <Route path="/v60add" element={<V60Add />} />
          <Route path="/v62edit/:userID" element={<V62Edit />} />
          <Route path="user">
            {" "}
            {/*prefix*/}
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/register" element={<Register />} />
          </Route>
          <Route path="/college" element={<College />}>
            <Route index element={<Student />} />
            {/* <Routeyou can use department like this duo and removing /> from department inside college jsx file */}
            <Route path="details" element={<Details />} />
          </Route>
          <Route path="/department" element={<Department />} />
        </Route>

        {/* <Route path="/college" element={<College />}>
          <Route index element={<Student />} />
          <Route path="details" element={<Details />} />
        </Route> */}

        {/* <Route path="/college/department" element={<Department />} />   */}
        {/* remove / from department from college.jsx for above one */}

        {/* <Route path="/department" element={<Department />} /> */}

        <Route path="*" element={<PageNotFound />} />
        {/* <Route path="/*" element={<Navigate to="/login" />} /> */}
      </Routes>
    </>
  );
}

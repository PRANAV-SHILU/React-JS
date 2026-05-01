import { Link } from "react-router";
export default function Login() {
  return (
    <>
      <h1>Login page</h1>
      <Link to="/user/register">Register</Link>
    </>
  );
}

import { Link } from "react-router";
export default function PageNotFound() {
  return (
    <>
      <h1>Page Not Found </h1>
      <br />
      <br />
      <h2>Kindly redirect to Home page</h2>
      <br />
      <br />
      <Link to="/">Go to Home page</Link>
    </>
  );
}

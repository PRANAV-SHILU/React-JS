import { Link } from "react-router";
export default function Department() {
  return (
    <>
      <h1>Department section</h1>
      <h2>
        <Link to="/college">Go back to college</Link>
      </h2>
    </>
  );
}

import { Link, useParams } from "react-router";

export default function UserDetails() {
  const param = useParams();

  return (
    <>
      <div>
        <h1>User Details page</h1>
        <h2>User id is {param.id}</h2>
        {param.name && <h2>User name is {param.name}</h2>}

        <h2>
          <Link to="/users">Back</Link>
        </h2>
      </div>
    </>
  );
}

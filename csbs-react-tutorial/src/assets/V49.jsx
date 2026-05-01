import { Fragment, useId } from "react";
export default function V49() {
  return (
    <section>
      <h2>V49 - useId hook</h2>
      <p>generates unique IDs for form elements if we have multiple form with same fields</p>
      <p>check on inspect for id</p>
      <UniqueForm />
      <br />
      <UniqueForm />
      <br />
      <UniqueForm />
    </section>
  );
}

function UniqueForm() {
  const user = useId();

  return (
    <Fragment>
      <label htmlFor={user+'name'}>Name : {user+'name'}</label>
      <input type="text" id={user+'name'} placeholder="Enter your name" />

      <label htmlFor={user+'password'}>Password : {user+'password'}</label>
      <input type="password" id={user+'password'} placeholder="Enter your password" />

      <label htmlFor={user+'email'}>Email : {user+'email'}</label>
      <input type="email" id={user+'email'} placeholder="Enter your email" />
    </Fragment>
  );
}

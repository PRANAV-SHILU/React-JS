import { useImmer } from "use-immer";
const initialValue = {
  fname: "",
  lname: "",
  pass: "",
  email: "",
};
const initialTouched = {
  fname: false,
  lname: false,
  pass: false,
  email: false,
};

export default function FormValidation() {
  const [value, setValue] = useImmer(initialValue);
  const [touched, setTouched] = useImmer(initialTouched);

  return (
    <section>
      <h3>V21 - Form using useImmer</h3>
      <form method="post" action="">
        <div>
          <input
            type="text"
            value={value.fname}
            placeholder="First name"
            onChange={(e) =>
              setValue((draft) => ({ ...draft, fname: e.target.value }))
            }
            onBlur={() =>
              setTouched((d) => {
                d.fname = true;
              })
            }
          />

          {touched.fname && value.fname.trim().length < 3 && (
            <span> First name must be at least 3 characters long</span>
          )}
        </div>
        <div>
          <input
            type="text"
            value={value.lname}
            placeholder="Last name"
            onChange={(e) =>
              setValue((draft) => ({ ...draft, lname: e.target.value }))
            }
            onBlur={() =>
              setTouched((d) => {
                d.lname = true;
              })
            }
          />

          {touched.lname && value.lname.trim().length < 3 && (
            <span> Last name must be at least 3 characters long</span>
          )}
        </div>
        <div>
          <input
            type="password"
            value={value.pass}
            placeholder="Password"
            onChange={(e) =>
              setValue((draft) => ({ ...draft, pass: e.target.value }))
            }
            onBlur={() =>
              setTouched((d) => {
                d.pass = true;
              })
            }
          />

          {touched.pass && value.pass.trim().length < 8 && (
            <span> Password must be at least 8 characters long</span>
          )}
        </div>
        <div>
          <input
            type="email"
            value={value.email}
            placeholder="Email"
            onChange={(e) =>
              setValue((draft) => ({ ...draft, email: e.target.value }))
            }
            onBlur={() =>
              setTouched((d) => {
                d.email = true;
              })
            }
          />

          {touched.email &&
            (value.email.trim().length < 1 || !value.email.includes("@")) && (
              <span> Email is required and must contain "@" symbol</span>
            )}
        </div>
        <div>
          <input
            type="submit"
            value="submit"
            onClick={() => {
              setValue(initialValue);
            }}
          />
          <input
            type="reset"
            value="reset"
            onClick={() => {
              setValue(initialValue);
            }}
          />
        </div>
      </form>

      <p>First name : {value.fname}</p>
      <p>Last name : {value.lname}</p>
      <p>Password : {value.pass}</p>
      <p>Email : {value.email}</p>
    </section>
  );
}

import { useFormInput } from "./UseFormInput";

export default function CustomeHookForm() {
  const firstNameProps = useFormInput("Pranav");
  const lastNameProps = useFormInput("Shilu");

  return (
    <>
      <form>
        <input type="text" {...firstNameProps} />
        <input type="text" {...lastNameProps} />
      </form>

      <h4>
        Full name : {firstNameProps.value} {lastNameProps.value}
      </h4>
    </>
  );
}

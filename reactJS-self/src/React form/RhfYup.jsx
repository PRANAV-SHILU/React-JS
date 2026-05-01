import { NavLink } from "react-router-dom";
import { TestSchema } from "./TestSchema";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "../assets/css/ReactHookForm.module.css";

export default function RhfYup() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(TestSchema),
    mode: "all",

    defaultValues: {
      name: "Pranav",
      email: "pranav@gmail.com",
      age: "",
      // phone: "9033823598",
      phones: [{ number: "" }],
      password: "123456",
      confirmPassword: "123456",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "phones",
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <section>
      <NavLink to="/">Back</NavLink>
      <h2>RHF + Yup</h2>

      <form className={styles.grid} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.flex}>
          <input type="text" placeholder="Name" {...register("name")} />
          <p className={styles.errorMessage}>{errors.name?.message}</p>
        </div>

        <div className={styles.flex}>
          <input type="email" placeholder="email" {...register("email")} />
          <p className={styles.errorMessage}>{errors.email?.message}</p>
        </div>

        <div className={styles.flex}>
          <input
            type="number"
            placeholder="age"
            {...register("age", { valueAsNumber: true })}
          />
          <p className={styles.errorMessage}>{errors.age?.message}</p>
        </div>

        {/* <div className={styles.flex}>
          <input type="tel" placeholder="phone" {...register("phone")} />
          <p className={styles.errorMessage}>{errors.phone?.message}</p>
        </div> */}

        <div>
          {fields.map((field, index) => (
            <div key={field.id} style={{ display: "flex", gap: "10px" }}>
              <input
                type="text"
                placeholder={`number ${index}`}
                {...register(`phones.${index}.number`)}
              />

              <p style={{ color: "red", fontSize: "16px" }}>
                {errors.phones?.[index]?.number?.message}
              </p>

              {index !== 0 && (
                <button type="button" onClick={() => remove(index)}>
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>

        <button type="button" onClick={() => append({ number: "" })}>
          Add Phone
        </button>
        <br />
        <br />

        <div className={styles.flex}>
          <input
            type="password"
            placeholder="password"
            {...register("password")}
          />
          <p className={styles.errorMessage}>{errors.password?.message}</p>
        </div>

        <div className={styles.flex}>
          <input
            type="password"
            placeholder="confirm Password"
            {...register("confirmPassword")}
          />
          <p className={styles.errorMessage}>
            {errors.confirmPassword?.message}
          </p>
        </div>

        <button type="submit">submit</button>
      </form>
    </section>
  );
}

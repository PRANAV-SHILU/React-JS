import { useState } from "react";
import styles from "../assets/css/ReactHookForm.module.css";
import { NavLink } from "react-router-dom";
import * as yup from "yup";

export default function Yup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    subscribe: false,
    age:"",
    tel:"",
  });

  const [errors, setErrors] = useState({});

  // Reusable Schemas
  const commonSchema = yup.string().required("This is a required field").trim();
  const passwordSchema = commonSchema.min(6, "Password must be at least 6 characters").test("not common","This is too much common",(v)=>v!=='password');

  const schema = yup.object({
    name : commonSchema.matches(/^[A-Za-z]+$/, "Only alphabetic characters are allowed").min(3, "Name must be at least 3 characters"),
    email : commonSchema.email("Invalid email format").when('subscribe',{
        is: true,
        then: (schema) => schema.transform(value => value === "" ? undefined : value).matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,10}$/,"Not an email"),
        otherwise: (schema) => schema.notRequired(),
    }), 
    password: passwordSchema,
    confirmPassword: passwordSchema.oneOf([yup.ref('password')],"Passwords must match"),
    subscribe: yup.boolean(),
    age: yup.number().required("This is a required field").typeError("Age must be a number").min(18, "You must be at least 18").max(99, "Age cannot exceed 99").transform((value, originalValue)=>originalValue === "" ? undefined : Number(originalValue)),
    tel: commonSchema.transform(v => v.replace(/\s+/g, "")).matches(/^[0-9]+$/, "Only digits allowed").length(10, "Must be exactly 10 digits"),
  })

  async function handleChange(e) {  

    const updatedForm = { ...form, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value };
    setForm(updatedForm);
    
    try {
        await schema.validateAt(e.target.name, updatedForm);
        setErrors((prev) => {
            return {...prev,[e.target.name]: undefined,};});      
        } catch (err) {
          setErrors((prev) => {
            return {...prev,[err.path]: err.message,};});
        }
    };

  async function handleSubmit(e) {
    e.preventDefault();
    
    try{
        await schema.validate(form, {abortEarly: false});
        setForm({name: "",email: "",password: "",confirmPassword: "",subscribe: false,age:"",tel:"",});
        console.log("Valid inputs : ",form);
    }catch(err){
      const newErrors = {};
      err.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }    
  }

  return (
    <section>
      <NavLink to="/">Back</NavLink>
      <h2>Yup library</h2>

      <form className={styles.grid} onSubmit={handleSubmit}>

        <div className={styles.flex}>
          <input type="text" name="name" placeholder="name" value={form.name} onChange={handleChange} />
          {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
        </div>

        <div className={styles.flex}>
          <label>
            <input type="checkbox" name="subscribe" checked={form.subscribe} onChange={handleChange}/>
            Subscribe to newsletter
          </label>
        </div>

        <div className={styles.flex}>
          <input type="text" name="email" placeholder="email" value={form.email} onChange={handleChange} />
          {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
        </div>
        
        <div className={styles.flex}>
          <input type="password" name="password" placeholder="password" value={form.password} onChange={handleChange} />
          {errors.password && <p className={styles.errorMessage}>{errors.password}</p>}
        </div>

        <div className={styles.flex}>
            <input type="password" name="confirmPassword" placeholder="confirm password" value={form.confirmPassword} onChange={handleChange} />
            {errors.confirmPassword && <p className={styles.errorMessage}>{errors.confirmPassword}</p>}
        </div>

        <div className={styles.flex}>
            <input type="number" name="age" placeholder="age" value={form.age} onChange={handleChange} />
            {errors.age && <p className={styles.errorMessage}>{errors.age}</p>}
        </div>

        
        <div className={styles.flex}>
            <input type="tel" name="tel" placeholder="tel" value={form.tel} onChange={handleChange} />
            {errors.tel && <p className={styles.errorMessage}>{errors.tel}</p>}
        </div>

        <button type="submit">Submit</button>


      </form>
    </section>
  );
}

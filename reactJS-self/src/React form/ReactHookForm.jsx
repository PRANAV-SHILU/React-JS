import styles from '../assets/css/ReactHookForm.module.css';
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

export default function ReactHookForm() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    watch,
    formState: {
      errors,
      isSubmitting,
      isValid,
    },
  } = useForm({mode: "all",});

  const password = watch("password");

  const onSubmit = async (data)=>{
    console.log(data);

    const email = getValues("email"); 
    if (!email.endsWith("@gmail.com")) {
     alert("Only Gmail allowed");
      return;
    }
  
    await new Promise((res)=> setTimeout(res, 2000)); // Simulate async operation

    reset();
  }

  

  return (
    <section>
      <NavLink to="/">Back</NavLink>
      <h2>React Hook Form</h2>

      <form className={styles.grid} onSubmit={handleSubmit(onSubmit)}>

        <div className={styles.flex}>
            <input type="text" placeholder="username" {...register('username',{required: 'Username is required',setValueAs: (v) => v.trim()})}/>
            {errors.username && <p className={styles.errorMessage}>{errors.username.message}</p>}
        </div>

        <div className={styles.flex}>
            <input type="email" placeholder='Email' {...register('email',{
              required: 'Email is required',
              setValueAs: (v) => v.trim(),
              pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,10}$/, message: 'Invalid email format'}})} />
            {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
        </div>

        <div className={styles.flex}>
            <input type="password" placeholder='Password'  {...register('password',{
                setValueAs: (v) => v.trim(), // Trim whitespace before validation
                required:'Password is required',
                minLength:{value:6,message:'Password must be at least 6 characters long'},
                maxLength:{value:12,message:'Password must not exceed 12 characters'}})} />
            {errors.password && <p className={styles.errorMessage}>{errors.password.message}</p>}
        </div>

        <div className={styles.flex}>
              <input  type="password" placeholder='confirm password' {...register("confirmPassword", {
                validate: v => v === password || "Password Mismatch",})}/>
              {errors.confirmPassword && <p className={styles.errorMessage}>{errors.confirmPassword.message}</p>}
        </div>

        <div className={styles.flex}>
            <input type="number" placeholder='Age' {...register('age',{
                valueAsNumber: true, // Convert input value to number
                required:'Age is required',
                min:{value:18,message:'You must be at least 18 years old'},
                max:{value:99,message:'Age must be less than 100'}})} />
            {errors.age && <p className={styles.errorMessage}>{errors.age.message}</p>}
        </div>

        <div className={styles.flex}>
            <input type="tel" placeholder='Phone Number' {...register('phone',{
                setValueAs: (v) => v.replace(/\s+/g, ""), // remove ALL spaces
                valueAsNumber: true,
                required: 'Phone number is required',
                pattern:{value: /^[0-9]{10}$/, message: 'Phone number must be exactly 10 digits not string'},
                })} />
            {errors.phone && <p className={styles.errorMessage}>{errors.phone.message}</p>}
        </div>

        <div>
            <input type="url" placeholder='Website disabled' {...register('website',{disabled: true, required:'required'})} />
        </div>

        <div>
            <button type="submit" disabled={!isValid || isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
            <button type="reset">Reset</button>
        </div>
      </form>
    </section>
  );
}

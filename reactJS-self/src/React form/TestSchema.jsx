import * as yup from "yup";

const commonSchema = yup.string().trim().required("This is a required field");

export const TestSchema = yup.object({
  name: commonSchema
    .matches(/^[A-Za-z ]+$/, "Only alphabetic characters are allowed")
    .min(3, "name must be atleast 3 character long"),

  email: commonSchema
    .email("Enter a valid email")
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,10}$/, "Not an email"),

  age: yup
    .number()
    .required("age is required")
    .typeError("Age must be a number")
    .min(18, "Age must be above 18"),

  // phone: commonSchema
  //   .transform((v) => v.replace(/\s+/g, ""))
  //   .matches(/^[0-9]{10}$/, "Phone must be 10 digits"),

  phones: yup
    .array()
    .of(
      yup.object({
        number: commonSchema
          .transform((v) => v.replace(/\s+/g, ""))
          .matches(/^[0-9]{10}$/, "Phone must be 10 digits"),
      })
    )
    .min(1, "Atleast one number required"),

  password: commonSchema.min(6, "minimum 6 character long password needed"),

  confirmPassword: commonSchema.oneOf(
    [yup.ref("password")],
    "password must match"
  ),
});

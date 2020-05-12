import { string, object, number } from "yup"; // for only what you need
let yup = require("yup");

export const basicFormValidationSchema = object({
  location: yup.string().required("required"),
  membershipType: yup.string().required("required"),
  meansOfPayment: string().required("required"),
  // Email: yup
  //   .string("Enter a email")
  //   .email("enter a valid email")
  //   .required("email is required"),
  // Phone: number("Enter your phone number")
  //   .required("your phone number is required")
  //   .min(2, "too short"),
  // PostalAddress: string("Enter your postal address")
  //   .required("your postal address is required")
  //   .min(2, "too short"),
  // CurrentTakeHome: string("Select your current salary").required(
  //   "your current salary is required"
  // ),
  // location: yup.string().min(2, "too short").required("Required"), // these constraints take precedence
});

export const carFormInitSchema = yup.object().shape({
  carInfo: yup.array().of(
    yup.object().shape({
      vehicleType: yup.string().min(1, "too short").required("Required"),
      price: yup.string().min(1, "too short").required("Required"),
      bidType: yup.string().min(1, "too short").required("Required"), // these constraints take precedence
    })
  ),
});

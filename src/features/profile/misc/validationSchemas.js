import { string, object } from "yup"; // for only what you need
let yup = require("yup");

export const basicFormValidationSchema = object({
  FirstName: yup
    .string("Enter a name")
    .required("firstname is required")
    .min(2, "too short"),
  LastName: string("Enter your lastname")
    .required("your last name is required")
    .min(2, "too short"),
  MiddleName: string("Enter your middlename")
    .required("your middle is required")
    .min(2, "too short"),
  Nationality: string("Enter a your nationality").required(
    "your nationality is required"
  )
});

export const workFormValidationSchema = yup.object().shape({
  workExperience: yup.array().of(
    yup.object().shape({
      JobTitle: yup
        .string()
        .min(2, "too short")
        .required("Required"), // these constraints take precedence
      Employer: yup
        .string()
        .min(1, "too short")
        .required("Required"),
      Industry: yup
        .string()
        .min(1, "too short")
        .required("Required"),
      StartDate: yup
        .string()
        .min(1, "too short")
        .required("Please input the day you started working in this firm") // these constraints take precedence
    })
  )
});

export const contactFormValidationSchema = object({
  Email: yup
    .string("Enter a email")
    .required("email is required")
    .email("enter a valid email"),
  ContactNumber: yup
    .number("Enter your lastname")
    .required("your mobile number is required")
    .test(
      "len",
      "Must be exactly 11 characters",
      val => val && val.toString().length === 10
    ),
  Address: string("Enter your current Address").required(
    "your address is required"
  )
});

export const qualificationFormValidationSchema = object({
  ITProficiency: yup
    .string("select your I.T proficiency level")
    .required("select your I.T proficiency level"),
  EducationalQualifications: yup
    .string("select your educational qualifications")
    .required("select your educational qualifications"),
  ProfessionalQualifications: yup
    .string("select your professional qualifications")
    .required("select your professional qualifications"),
  UserEducation: yup
    .string("select your professional qualifications")
    .required("select your professional qualifications")
});

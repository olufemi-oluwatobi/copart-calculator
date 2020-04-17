import { string, object, number } from "yup"; // for only what you need
let yup = require("yup");

export const basicFormValidationSchema = object({
  FirstName: yup
    .string("Enter a name")
    .required("firstname is required")
    .min(2, "too short"),
  Title: yup
    .string("Enter a name")
    .required("firstname is required")
    .min(2, "too short"),
  LastName: string("Enter your lastname")
    .required("your last name is required")
    .min(2, "too short"),
  Email: yup
    .string("Enter a email")
    .required("email is required")
    .email("enter a valid email"),
  Phone: number("Enter your phone number")
    .required("your phone number is required")
    .min(2, "too short"),
  PostalAddress: string("Enter your postal address")
    .required("your postal address is required")
    .min(2, "too short"),
  CurrentTakeHome: string("Select your current salary").required(
    "your current salary is required"
  ),
});

export const workFormValidationSchema = yup.object().shape({
  workExperience: yup.array().of(
    yup.object().shape({
      JobTitle: yup.string().min(2, "too short").required("Required"), // these constraints take precedence
      Employer: yup.string().min(1, "too short").required("Required"),
      Industry: yup.string().min(1, "too short").required("Required"),
      Responsibilities: yup.string().min(1, "too short").required("Required"), // these constraints take precedence
    })
  ),
});

export const eduFormValidationSchema = yup.object().shape({
  educationalBackground: yup.array().of(
    yup.object().shape({
      UniversityName: yup.string().min(2, "too short").required("Required"), // these constraints take precedence
      DegreeType: yup.string().min(1, "too short").required("Required"),
      Concentration: yup.string().min(1, "too short").required("Required"),
      Location: yup.string().min(1, "too short").required("Required"), // these constraints take precedence
    })
  ),
});

export const proValidationSchema = yup.object().shape({
  professionalQualification: yup.array().of(
    yup.object().shape({
      Name: yup.string().min(2, "too short").required("Required"), // these constraints take precedence
      Body: yup.string().min(1, "too short").required("Required"),
      ObtainedAt: yup.string().min(1, "too short").required("Required"),
    })
  ),
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
      (val) => val && val.toString().length === 10
    ),
  Address: string("Enter your current Address").required(
    "your address is required"
  ),
});

export const qualificationFormValidationSchema = object({
  Name: yup
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
    .required("select your professional qualifications"),
});

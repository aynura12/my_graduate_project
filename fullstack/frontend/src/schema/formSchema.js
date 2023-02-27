import * as yup from "yup";
export const formSchema = yup
  .object()
  .shape({
    fullName: yup
      .string("Pls enter string text")
      .min(3, "FullName is Too Short!")
      .max(50, "FullName is Too Long!")
      .required("This field is required"),
    firstName: yup
      .string("Pls enter string text")
      .min(3, "FirstName is Too Short!")
      .max(30, "FirstName is Too Long!")
      .required("This field is required"),
    lastName: yup
      .string("Pls enter string text")
      .min(3, "Lastname is Too Short!")
      .max(30, "Lastname is Too Long!")
      .required("This field is required"),
    email: yup
      .string("Pls enter email firmatted text")
      .required("This field is required"),
    number: yup
      .number("Pls enter number")
      .positive("The number must be greater than 0!")
      .min(10, "Phone number must be 10 characters!")
      .required("This field is required"),
    message: yup
      .string("Pls enter string text")
      .required("This field is required"),
    address: yup
      .string("Pls enter string text")
      .max(50, "address is Too Long!")
      .required("This field is required"),
    image: yup
      .string("Pls enter string text")
      .required("This field is required"),
    date: yup
      .number("Pls enter number")
      .positive("The number must be greater than 0!")
      .min(8, "Phone number must be 8 characters!")
      .required("This field is required"),
    occupation: yup
      .string("Pls enter string text")
      .required("This field is required"),
    comment: yup
      .string("Pls enter string text")
      .required("This field is required"),
    money: yup
      .number("Pls enter number")
      .positive("The number must be greater than 0!")
      .required("This field is required"),
    country: yup
      .string("Pls enter string text")
      .required("This field is required"),
    city: yup
      .string("Pls enter string text")
      .required("This field is required"),
    mm: yup.string("Pls enter string text").required("This field is required"),
    cvc: yup
      .number("Pls enter number")
      .min(3, "CVC is Too Short!")
      .positive("The number must be greater than 0!")
      .required("This field is required"),
    cardNumber: yup
      .number("Pls enter number")
      .positive("The number must be greater than 0!")
      .min(16, "Card number is Too Short!")
    
      .required("This field is required"),
    billingAddress: yup
      .string("Pls enter string text")
      .required("This field is required"),
    text: yup
      .string("Pls enter string text")
      .required("This field is required"),
    location: yup
      .string("Pls enter string text")
      .required("This field is required"),
  })
  .required();

import * as yup from "yup";
export const formSchema = yup
  .object()
  .shape({
    fullName: yup
      .string("Pls enter string text")
      .min(3, "fullName is Too Short!")
      .max(50, "fullName is Too Long!")
      .required("This field is required"),
    firstName: yup
      .string("Pls enter string text")
      .min(3, "firstname is Too Short!")
      .max(30, "firstname is Too Long!")
      .required("This field is required"),
    lastName: yup
      .string("Pls enter string text")
      .min(3, "lastname is Too Short!")
      .max(30, "lastname is Too Long!")
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
      .min(3, "cvc is Too Short!")
      .max(3, "cvc is Too Long!")
      .positive("The number must be greater than 0!")
      .required("This field is required"),
    cardNumber: yup
      .number("Pls enter number")
      .positive("The number must be greater than 0!")
      .min(16, "card number is Too Short!")
      .max(16, "card number is Too Long!")
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

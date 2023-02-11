import * as yup from 'yup';
export const formSchema = yup
  .object()
  .shape({
    fullName: yup.string("Pls enter string text").required("This field must not be left blank"),
    email: yup.string("Pls enter email firmatted text").required("This field must not be left blank"),
    number: yup.number("Pls enter number").required("This field must not be left blank"),
    message: yup.string("Pls enter string text").required("This field must not be left blank"),
  })
  .required();
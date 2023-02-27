import * as yup from "yup";
export const adminSchema = yup
  .object()
  .shape({
    fullName: yup
      .string("Pls enter string text")
      .min(3, "fullName is Too Short!")
      .max(50, "fullName is Too Long!")
      .required("This field is required"),
    name: yup
      .string("Pls enter string text")
      .min(3, "name is Too Short!")
      .max(30, "name is Too Long!")
      .required("This field is required"),
    image: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    date: yup
      .number("Pls enter number")
      .positive("The number must be greater than 0!")
      .required("This field is required"),
    title: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    text: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    color: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    detailText: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    detailImage: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    detailTitle: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    category: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    goal: yup
      .number("Pls enter number")
      .positive("The number must be greater than 0!")
      .required("This field is required"),
    raised: yup
      .number("Pls enter number")
      .positive("The number must be greater than 0!")
      .required("This field is required"),
    payment: yup
      .number("Pls enter number")
      .positive("The number must be greater than 0!")
      .required("This field is required"),
    day: yup
      .number("Pls enter number")
      .min(1, "Day is Too Short!")
      .max(2, "Day is Too Long!")
      .positive("The number must be greater than 0!")
      .required("This field is required"),
    location: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    website: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    phone: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    month: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    watch: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    requirements: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
  })
  .required();

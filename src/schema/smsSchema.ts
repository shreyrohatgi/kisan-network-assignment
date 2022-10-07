import * as yup from "yup";

export const smsSchema = yup.object().shape({
  otp: yup.string().length(6).required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  receiverNumber: yup
    .string()
    .matches(/^(0)?^(\+91)[56789]\d{9}$/)
    .length(13)
    .required(),
});

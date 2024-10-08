import * as yup from 'yup';

export const authSchema = yup.object().shape({
    email: yup.string()
        .email("Please enter a valid email.")
        .required("Email is required."),
    password: yup.string()
        .required("Password is required.")
})
import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import {
  startGoogleLogin,
  startLoginEmailPassword,
} from "../Redux/Actions/authActions";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("The email is required"),
  password: Yup.string()
    .required("The password is required")
    .min(6, "Must be 6 characters or more")
    .max(20, "Must be 20 characters or less"),
});

const Login = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          dispatch(startLoginEmailPassword(values.email, values.password));
        }}
      >
        {({ isValid }) => (
          <Form>
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="span" className="error" />
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="span" className="error" />
            <button
              type="submit"
              disabled={!isValid}
            >
              Ingresar
            </button>
            <button
              type="submit"
              onClick={() => dispatch(startGoogleLogin())}
            >
              Registrarse con Google
            </button>
            <Link to="/signup" className="link">
              No tiene una cuenta?
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;

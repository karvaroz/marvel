import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import {
  startGoogleLogin,
  startLoginEmailPassword,
} from "../../Redux/Actions/authActions";

import "./Login.css"

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
          <div className="form-Container">
            <Form className="form">
              <div className="title">Login</div>
              <div className="input-container ic1">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  style={{ color: "white" }}
                />
              </div>
              <div className="input-container ic2">
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  style={{ color: "white" }}
                />
              </div>
              <button type="submit" disabled={!isValid} className="submit">
                Ingresar
              </button>
              <button
                className="submit"
                type="submit"
                style={{ backgroundColor: "red", marginTop: "10px" }}
                onClick={() => dispatch(startGoogleLogin())}
              >
                Registrarse con Google
              </button>
              <Link to="/signup" style={{ marginTop: "10px" }}>
                No tiene una cuenta?
              </Link>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Login;

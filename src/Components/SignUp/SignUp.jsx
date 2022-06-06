import React from "react";
import { useDispatch } from "react-redux";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";


import "../Login/Login.css";
import { useForm } from "../../Hooks/useForm";
import { startSignUpEmailPassword } from "../../Redux/Actions/authActions";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required("The name is required")
    .min(3, "Must be 3 characters or more"),
  email: Yup.string()
    .email("Invalid email address")
    .required("The email is required"),
  password: Yup.string()
    .required("The password is required")
    .min(6, "Must be 6 characters or more")
    .max(20, "Must be 20 characters or less"),
  confirmPassword: Yup.string()
    .required("The password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const SignUp = () => {
  const dispatch = useDispatch();
  const [reset] = useForm();

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        dispatch(
          startSignUpEmailPassword(values.email, values.password, values.name)
        );
        reset();
      }}
    >
      {({ isValid }) => (
        <div className="form-Container">
          <Form className="form">
            <div className="title">Sign Up</div>
            <div className="input-container ic1">
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className="input"
              />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: "white" }}
              />
            </div>
            <div className="input-container ic2">
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
            <div className="input-container ic2">
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Password again"
                className="input"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                style={{ color: "white" }}
              />
            </div>
            <button type="submit" disabled={!isValid} className="submit">
              Registrarse
            </button>
            <Link to="/" className="link">
              Ya tiene una cuenta?
            </Link>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SignUp;

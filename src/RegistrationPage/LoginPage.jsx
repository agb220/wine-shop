import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

import "./RegistrationPage.css";

function LoginPage() {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .typeError("Enter your email")
      .required("Required"),
    password: yup
      .string()
      .typeError("Create password")
      .required("Required"),
  });

  return (
    <>
      <div className="registration">
        <div className="form">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validateOnBlur
            onSubmit={(initialValues) => {
              console.log("initialValues", initialValues);
            }}
            validationSchema={validationSchema}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isValid,
              handleSubmit,
              dirty,
            }) => (
              <form className="form-items" onSubmit={handleSubmit}>
                <div className="form-item">
                  <label htmlFor={`email`}> </label>
                  <input
                    className={"input"}
                    type={"email"}
                    name={`email`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Email"
                  />
                </div>
                {touched.email && errors.email && (
                  <p className={"form-errors"}>{errors.email}</p>
                )}

                <div className="form-item">
                  <label htmlFor={`password`}> </label>
                  <input
                    className={"input"}
                    type={"password"}
                    name={`password`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Password"
                  />
                </div>
                {touched.password && errors.password && (
                  <p className={"form-errors"}>{errors.password}</p>
                )}

                <button
                  className="btn-form"
                  id="btn"
                  disabled={!isValid && !dirty}
                  onClick={handleBlur}
                  type="submit"
                >
                  Login
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default LoginPage;

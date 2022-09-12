import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";

import LoginPage from "./LoginPage";

import "./RegistrationPage.css";

function RegistrationPage() {
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .typeError("Enter your name")
      .required("Required"),
    surname: yup
      .string()
      .typeError("Enter your surname")
      .required("Required"),
    phone: yup
      .number()
      .typeError("Enter your phone number")
      .required("Required"),
    email: yup
      .string()
      .typeError("Enter your email")
      .required("Required"),
    confirmEmail: yup
      .string()
      .oneOf([yup.ref("email")], "The email does not match")
      .required("Required"),
    password: yup
      .string()
      .typeError("Create password")
      .required("Required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "The password does not match")
      .required("Required"),
    address: yup
      .string()
      .typeError("Enter your city")
      .required("Required"),
  });

  const [agree, setAgree] = useState(false);

  const handleChange = () => {
    if (agree === true) {
      setAgree(true);
    }
    setAgree(!agree);
  };

  return (
    <>
      <div className="registration">
        <h2>Login</h2>
        <LoginPage />
        <div className="form">
          <div className="form-checkbox">
            <label htmlFor="checkbox">
              <span>I don't have a registration</span>
            </label>
            <input
              className="btn-checkbox"
              onChange={() => handleChange("agree")}
              checked={agree}
              id="checkbox"
              name="checkbox"
              type="checkbox"
            ></input>
          </div>

          {agree === true ? (
            <Formik
              initialValues={{
                name: "",
                surname: "",
                phone: "",
                email: "",
                confirmEmail: "",
                password: "",
                confirmPassword: "",
                address: "",
              }}
              validateOnBlur
              onSubmit={(initialValues) => {
                console.log(initialValues);
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
                  {touched.name && errors.name && (
                    <p className={"form-errors"}>{errors.name}</p>
                  )}
                  <div className="form-item">
                    <label htmlFor={`name`}> </label>
                    <input
                      className={"input"}
                      type={"text"}
                      name={`name`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      placeholder="Name"
                    />
                  </div>
                  {touched.surname && errors.surname && (
                    <p className={"form-errors"}>{errors.surname}</p>
                  )}
                  <div className="form-item">
                    <label htmlFor={`surname`}> </label>
                    <input
                      className={"input"}
                      type={"text"}
                      name={`surname`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.surname}
                      placeholder="Surname"
                    />
                  </div>
                  {touched.phone && errors.phone && (
                    <p className={"form-errors"}>{errors.phone}</p>
                  )}
                  <div className="form-item">
                    <label htmlFor={`phone`}> </label>
                    <input
                      className={"input"}
                      type={"phone"}
                      name={`phone`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                      placeholder="Phone number"
                    />
                  </div>
                  {touched.email && errors.email && (
                    <p className={"form-errors"}>{errors.email}</p>
                  )}
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
                  {touched.confirmEmail && errors.confirmEmail && (
                    <p className={"form-errors"}>{errors.confirmEmail}</p>
                  )}
                  <div className="form-item">
                    <label htmlFor={`confirmEmail`}> </label>
                    <input
                      className={"input"}
                      type={"confirmEmail"}
                      name={`confirmEmail`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmEmail}
                      placeholder="Confirm email"
                    />
                  </div>
                  {touched.password && errors.password && (
                    <p className={"form-errors"}>{errors.password}</p>
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
                  {touched.confirmPassword && errors.confirmPassword && (
                    <p className={"form-errors"}>{errors.confirmPassword}</p>
                  )}
                  <div className="form-item">
                    <label htmlFor={`confirmPassword`}> </label>
                    <input
                      className={"input"}
                      type={"password"}
                      name={`confirmPassword`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                      placeholder="Confirm password"
                    />
                  </div>
                  {touched.address && errors.address && (
                    <p className={"form-errors"}>{errors.address}</p>
                  )}
                  <div className="form-item">
                    <label htmlFor={`address`}> </label>
                    <input
                      className={"input"}
                      type={"text"}
                      name={`address`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                      placeholder="Enter your address"
                    />
                  </div>

                  <button
                    className="btn-form"
                    id="btn"
                    disabled={!isValid && !dirty}
                    onClick={handleBlur}
                    type="submit"
                  >
                    Send
                  </button>
                </form>
              )}
            </Formik>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}

export default RegistrationPage;

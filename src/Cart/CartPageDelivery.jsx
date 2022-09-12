import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

import "./cart.css";

function CartPageDelivery() {
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

  return (
    <div className="delivery-form__items">
      <Formik
        initialValues={{
          name: "",
          surname: "",
          phone: "",
          email: "",
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
            {touched.name && errors.name && (
              <p className={"form-errors"}>{errors.name}</p>
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
            {touched.surname && errors.surname && (
              <p className={"form-errors"}>{errors.surname}</p>
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
            {touched.phone && errors.phone && (
              <p className={"form-errors"}>{errors.phone}</p>
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
            {touched.email && errors.email && (
              <p className={"form-errors"}>{errors.email}</p>
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
            {touched.address && errors.address && (
              <p className={"form-errors"}>{errors.addressCity}</p>
            )}
            {/* <button
            className="btn-form"
            id="btn"
            disabled={!isValid && !dirty}
            onClick={handleBlur}
            type="submit"
          >
            Save
          </button> */}
          </form>
        )}
      </Formik>
    </div>
  );
}

export default CartPageDelivery;

import React, { useState, useEffect } from "react";
import "./loginWithValidation.css";
const LoginWIthValidation = () => {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    
    const errors = {};
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!values.username) {
      errors.username = "username is required:";
    }
    else if(values.username.length > 8){
        errors.username = "username is more then 8 letters";
    }
    // else if(values.username.length < 15){
    //     errors.username = "username is lessthen then 15 letters";
    // }

    if (!values.email) {
      errors.email = "email is required:";
    } else if (!regex.test(values.email)) {
      errors.email = "please email is required:";
    }

    if (!values.password) {
      errors.password = "password is required:";
    } else if (values.password.length < 4) {
      errors.password = "password must and should 4 letters:";
    } else if (values.password.length > 10) {
      errors.password = "password less then letters:";
    }

    return errors;
  };

  return (
    <>
      <div className="container">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="success">Successfully logged in</div>
        ) : (
            <div className="output">
          <p>Username: {formValues.username}</p>
          <p>Email: {formValues.email}</p>
          <p>Password: {formValues.password}</p>
          </div>
        )}

        <div className="form">
          <form onSubmit={handleSubmit}>
            <h2 className="title">Login Form With Validation</h2>
            <div className="divider"></div>
            <div className="field">
              <label className="label">Username: </label>
              <input
                className="input"
                type="text"
                name="username"
                placeholder="Enter your username"
                value={formValues.usename}
                onChange={changeHandler}
              />
            </div>
            <p>{formErrors.username}</p>
            <div className="field">
              <label className="label">Email: </label>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formValues.email}
                onChange={changeHandler}
              />
            </div>
            <p>{formErrors.email}</p>
            <div className="field">
              <label className="label">Password: </label>
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formValues.password}
                onChange={changeHandler}
              />
            </div>
            <p>{formErrors.password}</p>
            <button className="button">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default LoginWIthValidation;

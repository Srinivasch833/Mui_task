import React, { useState, useEffect } from "react";
import "./loginWithValidation.css";

const SignupWIthValidation = () => {
    const [data, setData] = useState({
        username: '',
        email:'',
        phone: '',
        password: '',
        confirmPassword: '',

    });

    const {username, email, phone, password, confirmPassword} = data;

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const changeHandler = (e) => {
    setData({...data, [e.target.name]: [e.target.value]})
    console.log(data)
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(data))
    setIsSubmit(true);
    // console.log(data)
  };

  useEffect(() => {
    console.log(formErrors)
  if(Object.keys(formErrors).length === 0 && isSubmit){
    console.log(data);
    
  }
  }, [formErrors]);

//   useEffect(() => {
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
//     }
//   }, [formErrors]);

  const validate = (values) => {
    
    const errors = {};
    const reuser = /^[A-Za-z][A-Za-z0-9_]{7,29}$/ ;
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const rephone = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/ ;

    if (!values.username) {
      errors.username = "username is required:";
    }
    else if(!reuser.test(values.username)){
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

    if (!values.phone) {
        errors.phone = "phone is required:";
      } else if (!rephone.test(values.phone)) {
        errors.phone = "please enter valid phone number:";
      }

    if (!values.password) {
      errors.password = "password is required:";
    } else if (values.password.length < 4) {
      errors.password = "password must and should 4 letters:";
    } 
    // else if (values.password.length > 10) {
    //   errors.password = "password less then letters:";
    // }

    if (!values.confirmPassword) {
        errors.confirmPassword = "Confirm Password is required:";
      } else if (values.confirmPassword.length < 4) {
        errors.password = "password must and should 4 letters:";
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
          <p>Username: {username}</p>
          <p>Email: {email}</p>
          <p>Phone Number: {phone}</p>
          <p>Password: {password}</p>
          <p>Confirm Password: {confirmPassword}</p>
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
                value={username}
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
                value={email}
                onChange={changeHandler}
              />
            </div>
            <p>{formErrors.email}</p>
            <div className="field">
              <label className="label">Phone Number: </label>
              <input
                className="input"
                type="tel"
                name="phone"
                placeholder="Enter your phone Number"
                value={phone}
                onChange={changeHandler}
              />
            </div>
            <p>{formErrors.phone}</p>
            <div className="field">
              <label className="label">Password: </label>
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={changeHandler}
              />
            </div>
            <p>{formErrors.password}</p>
            <div className="field">
              <label className="label">Confirm Password: </label>
              <input
                className="input"
                type="password"
                name="confirmPassword"
                placeholder="Enter your Confirm Password"
                value={confirmPassword}
                onChange={changeHandler}
              />
            </div>
            <p>{formErrors.confirmPassword}</p>
            <button className="button">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignupWIthValidation;

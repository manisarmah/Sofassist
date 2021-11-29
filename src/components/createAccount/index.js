import React from "react";
import "./styles.css";
const Signup = () => {
  return (
    <div>
      <p className="headingLogin">Create Account</p>

      <div className="loginInputs">
        <div className="nameInput">
          <input type="text" placeholder="Name" required />
        </div>
        <br />
        <div className="emailInput">
          <input type="email" placeholder="Email" required />
        </div>
        <br />

        <div className="passwordInput">
          <input type="password" placeholder="Password" required />
        </div>

        <br />
        <div className="passwordInput">
          <input type="password" placeholder="Confirm Password" required />
        </div>
      </div>
      <br />

      <div className="loginButton">
        <button>Continue</button>
      </div>
    </div>
  );
};

export default Signup;

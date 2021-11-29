import React from "react";
import "./styles.css";
const Login = () => {
  return (
    <div>
      <p className="headingLogin">Log In</p>
      <br />
      <div className="loginInputs">
        <div className="emailInput">
          <input type="text" placeholder="Email" required />
        </div>
        <br />

        <div className="passwordInput">
          <input type="password" placeholder="Password" required />
        </div>
      </div>
      <br />
      <div className="loginButton">
        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;

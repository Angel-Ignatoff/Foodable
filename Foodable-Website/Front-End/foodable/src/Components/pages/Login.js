import React from "react";
import "./cssFiles/Login.css";
import { Button_Register } from "../MPComponents/Button";

function Login() {
  return (
    <div className="user">
      <header className="page_header_logo">
        <h1 className="page_title">Sign In</h1>
      </header>
      <form className="form">
        <div className="sign-in-form">
          <input
            type="email"
            placeholder="Enter Email"
            className="form__input"
            required=""
          />
        </div>
        <div className="sign-in-form">
          <input
            type="password"
            placeholder="Password"
            className="form__input"
            required=""
            minLength={8}
          />
        </div>
        <div className="buttonbg">
          <input
            className="signinbutton"
            type="submit"
            defaultValue="Sign in"
          />
        </div>
        <p className="sign-upmessage">Don't have an account? Sign Up!</p>
        <div className="signupbut">
          <Button_Register className="btn-mobile" value="Donate Food">
            {" "}
            Sign Up
          </Button_Register>
        </div>
      </form>
    </div>
  );
}

export default Login;

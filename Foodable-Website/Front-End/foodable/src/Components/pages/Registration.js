import React from "react";
import "./cssFiles/Register.css";
import { Button } from "../MPComponents/Button";

function Registration() {
  return (
    <div className="user">
      <header className="page_header_logo">
        <h1 className="page_title">Sign up</h1>
      </header>
      <form className="form">
        <div className="form__group">
          <input
            type="email"
            placeholder="Enter Email"
            className="form__input"
            required=""
          />
        </div>
        <div className="form__group">
          <input
            id="create_pw"
            type="password"
            placeholder="Password"
            className="form__input"
            required=""
            minLength={8}
          />
        </div>
        <div className="form__group">
          <input
            id="confirm_pw"
            type="password"
            placeholder="Re-enter Password"
            className="form__input"
            required=""
          />
        </div>
        <div className="tosbox">
          <input
            type="checkbox"
            id="ToS"
            name="ToS"
            defaultValue="ToS"
            required=""
          />
          <label htmlFor="ToS">
            I agree to the <a href="">Terms of Use</a> and
            <a href="">Privacy Policy</a>
          </label>
        </div>
        <div className="buttonbg">
          <input className="regbut" type="submit" />
        </div>
        <p className="sign-inmessage">Or if you have an account</p>
        <div className="signinbut">
          <Button className="btn-mobile"> Sign in</Button>
        </div>
      </form>
    </div>
  );
}

export default Registration;

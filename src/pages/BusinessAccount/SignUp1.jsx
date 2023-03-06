import React from "react";
import { Link } from "react-router-dom";

import LoginComponent from "../../components/LoginComponent";

import "../../styles/signup1.css";

const SignUp1 = () => {
  const title =
    "Start taking steps to manage your business now.";

  return (
    <LoginComponent
      intro={title}
      type="Businesses"
    >
      <h5 className="signup1__intro">
        Personal Information
      </h5>
      <p className="signup1__desc">
        Provide your legal name and work mail.
      </p>
      <div className="signup1__form__wrap">
        <form>
          <input
            type="text"
            name=""
            className="signup1__input"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name=""
            className="signup1__input"
            placeholder="Last Name"
            required
          />
          <input
            type="email"
            name=""
            className="signup1__input"
            placeholder="Email Address"
            required
          />
          <Link to="/signup2">
            <button
              type="submit"
              className="signup1__btn"
            >
              Continue
            </button>
          </Link>
        </form>
      </div>
    </LoginComponent>
  );
};

export default SignUp1;

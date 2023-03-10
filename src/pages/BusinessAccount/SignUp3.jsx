import React from "react";

import LoginComponent from "../../components/LoginComponent";

import "../../styles/signup3.css";

const SignUp3 = () => {
  const title =
    "Start taking steps to manage your business now.";
  return (
    <LoginComponent
      intro={title}
      type="Businesses"
    >
      <h5 className="signup3__intro">
        One Last Step
      </h5>
      <p className="signup3__desc">
        Avoid easily guessable password, and make
        sure it is easy to remember.
      </p>
      <div className="signup3__form__wrap">
        <form>
          <input
            type="password"
            className="signup3__input"
            placeholder="Password"
            required
          />
          <input
            type="password"
            className="signup3__input"
            placeholder="Confirm Password"
            required
          />
          <button
            type="submit"
            className="signup3__btn"
          >
            Create Account
          </button>
        </form>
      </div>
    </LoginComponent>
  );
};

export default SignUp3;

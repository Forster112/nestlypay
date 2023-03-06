import React from "react";
import { Link } from "react-router-dom";

import LoginComponent from "../../components/LoginComponent";

import "../../styles/resetpass.css";

const ResetPass = () => {
  const title =
    "Start taking steps to manage your business now.";
  return (
    <LoginComponent
      intro={title}
      type="Businesses"
    >
      <h5 className="resetpass__intro">
        Forgot Password?
      </h5>
      <p className="resetpass__desc">
        Did you forget your password ? Let's help
        you reset it.
      </p>
      <div className="resetpass__form__wrap">
        <form>
          <input
            type="email"
            className="resetpass__input"
            placeholder="Email Address"
            required
          />
          <Link to="/updatepass">
            <button
              type="submit"
              className="resetpass__btn"
            >
              Get Reset Link
            </button>
          </Link>
        </form>
      </div>
      <Link to="/masterauth">
        <p className="resetpass__to__start">
          Back to Sign In
        </p>
      </Link>
    </LoginComponent>
  );
};

export default ResetPass;

import React from "react";
import { Link } from "react-router-dom";

import LoginComponent from "../../components/LoginComponent";

import "../../styles/signup.css";

const Signup = () => {
  const title =
    "Are you a Freelancer?Create a one time free invoice without signing in";
  return (
    <LoginComponent
      intro={title}
      type="Businesses"
    >
      <h5 className="signup__intro">
        Create free Invoice
      </h5>
      <p className="signup__desc">
        Create a one time free invoice without
        signing up.
      </p>
      <div className="signup__form__wrap">
        <form>
          <input
            type="text"
            className="signup__input"
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            className="signup__input"
            placeholder="Email Address"
            required
          />
          <button
            type="submit"
            className="signup__btn"
          >
            Create Now
          </button>
        </form>
      </div>
      <p className="signup__to__signin">
        Already Have Account?{" "}
        <Link to="/login">
          <span>Sign In</span>
        </Link>{" "}
      </p>
    </LoginComponent>
  );
};

export default Signup;

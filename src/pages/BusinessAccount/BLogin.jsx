import React from "react";
import { Link } from "react-router-dom";

import LoginComponent from "../../components/LoginComponent";

import "../../styles/blogin.css";

const BLogin = () => {
  const title =
    "Start taking steps to manage your business now.";

  return (
    <LoginComponent intro={title} type="Business">
      <div className="blogin__intro">
        <h5>Welcome Back!</h5>
        <p>Pick up where you left off.</p>
      </div>
      <div className="blogin__form">
        <form>
          <input
            type="email"
            name=""
            className="blogin__input"
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            name=""
            className="blogin__input blogin__input__password"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="blogin__submit__btn"
          >
            Sign In
          </button>
        </form>
      </div>
      <div className="blogin__more__action">
        <p className="add__account">
          Don't Have an Account?{" "}
          <Link to="/signup1">
            <span>Create One</span>
          </Link>
        </p>
        <Link to="/resetpass">
          <p>Forgot password?</p>
        </Link>
      </div>
    </LoginComponent>
  );
};

export default BLogin;

import React from "react";
import { Link } from "react-router-dom";

import LoginComponent from "../../components/LoginComponent";

import "../../styles/login.css";

const Login = () => {
  const title =
    "Start taking steps to manage your business now.";
  return (
    <LoginComponent
      intro={title}
      type="Businesses"
    >
      <h5 className="login__intro">
        Welcome Back!
      </h5>
      <p className="login__desc">
        Pick up where you left off.
      </p>
      <div className="login__form__wrap">
        <form>
          <input
            type="email"
            className="login__input"
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            className="login__input"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="login__btn"
          >
            Sign In
          </button>
        </form>
      </div>
      <p className="login__to__signup">
        Don't Have an Account?{" "}
        <Link to="/signup">
          <span>Create One</span>
        </Link>
      </p>
      <Link to="/resetpass">
        <p className="login__fpassword">
          Forgot Password
        </p>
      </Link>
    </LoginComponent>
  );
};

export default Login;

import React from "react";

import LoginComponent from "../../components/LoginComponent";

import "../../styles/newusersign.css";

const NewUserSign = () => {
  const title =
    "Start taking steps to manage your business now.";
  return (
    <LoginComponent
      intro={title}
      type="Businesses"
    >
      <h5 className="newuser__intro">
        Create an Account
      </h5>
      <p className="newuser__desc">
        Tell us a bit about you. Provide your
        legal name, work mail and home address.
      </p>
      <div className="newuser__form__wrap">
        <form>
          <input
            type="text"
            className="newuser__input"
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            className="newuser__input"
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            className="newuser__input"
            placeholder="Password"
            required
          />
          <button type="submit" className="newuser__btn">Create Now</button>
        </form>
      </div>
    </LoginComponent>
  );
};

export default NewUserSign;

import React from "react";

import LoginComponent from "../../components/LoginComponent";

import "../../styles/updatepass.css";

const UpdatePass = () => {
  const title =
    "Start taking steps to manage your business now.";
  return (
    <LoginComponent
      intro={title}
      type="Businesses"
    >
      <h5 className="updatepass__intro">
        Reset Password
      </h5>
      <div className="updatepass__form__wrap">
        <form>
          <input
            type="password"
            className="updatepass__input"
            placeholder="New Password"
            required
          />
          <input
            type="password"
            className="updatepass__input"
            placeholder="Confirm Password"
            required
          />
          <button
            type="submit"
            className="updatepass__btn"
          >
            Update
          </button>
        </form>
      </div>
    </LoginComponent>
  );
};

export default UpdatePass;

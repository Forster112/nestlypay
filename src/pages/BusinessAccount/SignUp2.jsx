import React from "react";
import { Link } from "react-router-dom";

import LoginComponent from "../../components/LoginComponent";

import "../../styles/signup2.css";

const SignUp2 = () => {
  const title =
    "Start taking steps to manage your business now.";
  return (
    <LoginComponent
      intro={title}
      type="Businesses"
    >
      <div className="signup2__intro__wrap">
        <h5 className="signup2__intro">
          Business Information
        </h5>
        <p className="signup2__desc">
          Provide your business name, business
          mail and company address.
        </p>
      </div>
      <div className="signup2__form__wrap">
        <form>
          <input
            type="text"
            placeholder="Company Name"
            required
            className="signup2__input"
          />
          <input
            type="email"
            placeholder="Company Email"
            required
            className="signup2__input"
          />
          <input
            type="text"
            placeholder="Address One"
            required
            className="signup2__input"
          />
          <input
            type="text"
            placeholder="Address Two"
            className="signup2__input"
          />
          <div className="signup2__little__input">
            <input
              type="text"
              placeholder="City"
              className="signup2__input"
              required
            />
            <select
              name="State"
              className="signup2__input signup2__select"
            >
              <option value="State">State</option>
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
              <option value="Benin">Benin</option>
            </select>
          </div>
          <div className="signup2__little__input">
            <input
              type="text"
              placeholder="Postal Code"
              className="signup2__input"
              required
            />
            <select
              name="country"
              className="signup2__input signup2__select"
            >
              <option value="Country">
                Country
              </option>
              <option value="Nigeria">
                Nigeria
              </option>
              <option value="Canada">
                Canada
              </option>
              <option value="England">
                England
              </option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Website (optional)"
            className="signup2__input"
          />
          <Link to="/signup3">
            <button
              type="submit"
              className="signup2__btn"
            >
              Continue
            </button>
          </Link>
          <p className="signup__to__signin">
            Already Have an Account?{" "}
            <Link to="/blogin">
              <span>Sign In</span>
            </Link>
          </p>
        </form>
      </div>
    </LoginComponent>
  );
};

export default SignUp2;

import React from "react";
import { Link } from "react-router-dom";

import LoginComponent from "../components/LoginComponent";

import "../styles/masterauth.css";

const MasterAuth = () => {
  const title =
    "Start taking steps to manage your business now.";
  return (
    <LoginComponent intro={title} type="people">
      <div className="form__container">
        <div className="start__wrap">
          <p className="account__type">
            Choose your account type
          </p>
          <span>
            Get a downloadable receipts on every
            invoice payment as a <br />
            reference to help your business in
            management and accounting.
          </span>
        </div>

        <Link to="/blogin">
          <div className="biz div">
            <div className="divIcon__wrap">
              <i class="ri-fire-fill"></i>
            </div>
            <div>
              <h4>Business</h4>
              <p>
                Create invoices as a business.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/newusersign">
          <div className="biz div">
            <div className="divIcon__wrap">
              <i class="ri-file-3-fill"></i>
            </div>
            <div>
              <h4>Personal</h4>
              <p>
                Create a one-time invoice as a
                freelancer.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </LoginComponent>
  );
};

export default MasterAuth;

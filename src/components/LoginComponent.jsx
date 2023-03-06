import React from "react";

import faces from "../assets/images/FACES.png";

import "../styles/logincomponent.css";

const LoginComponent = (props) => {
  return (
    <div className="container">
      <div className="intro__wrap">
        <h2>NESTLY PAY</h2>
        <div className="intro">
          <p>{props.intro}</p>
          <div className="img__wrap">
            <img src={faces} alt="people" />
            <span>Join 1893 {props.type}</span>
          </div>
        </div>
      </div>
      <div className="form__wrap">
        {props.children}
      </div>
    </div>
  );
};

export default LoginComponent;

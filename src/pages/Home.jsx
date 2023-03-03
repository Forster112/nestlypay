import React from "react";

import '../styles/home.css'
import logo from '../assets/images/LOGO.png'
import dashboard from '../assets/images/Dashboard.png'

const Home = () => {
  return (
    <div>
      <header>
        <div className="nav">
          <img src={logo} alt="" />
          <button>Sign In</button>
        </div>
        <div className="desc">
          <h2 className="title">
            Connecting Businesses for <br />{" "}
            Simplified Payments.
          </h2>
          <p className="para">
            Create and send invoices, manage your
            finance, track sales, and <br /> get
            paid faster.
          </p>
          <button className="get__started">
            Create free invoice
          </button>
        </div>
      </header>
      <main>
        <img
          src={dashboard}
          alt=""
          className="dashboard"
        />
      </main>
    </div>
  );
};

export default Home;

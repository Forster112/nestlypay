import React from "react";
import { Link } from "react-router-dom";

import "../styles/home.css";
import logo from "../assets/images/LOGO.png";
import dashboard from "../assets/images/Dashboard.png";
import mobile from "../assets/images/Iphone.png";

import ImageSlider from "../components/slider/ImageSlider";

const Home = () => {
  return (
    <div className="home__wrap">
      <header>
        <div className="nav">
          <img src={logo} alt="" />
          <Link to="/masterauth">
            <button>Sign In</button>
          </Link>
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
          <Link to="/signup">
            <button className="get__started">
              Create free invoice
            </button>
          </Link>
        </div>
      </header>
      <main>
        <section className="intro__section">
          <img
            src={dashboard}
            alt=""
            className="dashboard"
          />
          <p className="duty__para">
            Never chase a client again. Speed up
            your cash flow and manage our business
            at your fingertips. Let Nestlypay help
            with the hard work, while you focus on
            your business. <br />
            <span>
              Get a fast invoice today &rarr;
            </span>
          </p>
        </section>
        <section className="slider">
          <ImageSlider />
        </section>
        <section className="last__section">
          <h2>
            Ready to Grow Your <br /> Business in
            One Solution?
          </h2>
          <p>
            Say hello to Nestlypay, a platform
            that enables you to send professional
            invoices, save time, digitalize your
            bills and manage your business in
            minutes.
          </p>
          <Link to="/masterauth">
            <button>Get Started</button>
          </Link>
          <div className="mobile__dashboard">
            <img
              src={mobile}
              alt=""
              className="mobile"
            />
            <img
              src={dashboard}
              alt=""
              className="last__dashboard"
            />
          </div>
        </section>
        <footer>
          <div className="icon">
            <div className="icon__wrap">
              <i class="ri-facebook-line"></i>
            </div>
            <div className="icon__wrap">
              <i class="ri-twitter-fill"></i>
            </div>
            <div className="icon__wrap">
              <i class="ri-instagram-line"></i>
            </div>
            <div className="icon__wrap">
              <i class="ri-linkedin-line"></i>
            </div>
          </div>
          <p>help@nestlypay.co</p>
          <p>
            © 2022. NestlyPay Limited All rights
            reserved
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Home;

import React from "react";
import "../App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { SocialIcon } from "react-social-icons";
/* import { useState } from "react"; */
import "../css/footer.scss";
import { Link } from "react-router-dom";

const year = new Date().getFullYear();

const Footer = (props) => {
  //const [defGradient, setGradient] = useState(props);

  return (
    <div className="container-fluid mt-5" id="footerBackground">
      <div className={props.bgtint}></div>
      <div
        className="container-fluid text-center align-items-center"
        id={props.footer2}
      >
        <div className="container-fluid text-center align-items-center"></div>
        <div className="row">
          <div className="col-12 col-md-4 text-center align-itmes-center my-4">
            <h5 className="textdark pb-2">
              <b>More Links</b>
            </h5>
            {/*  <a href="/" className="textdark d-block pb-2">
              Events
            </a> */}
            <a href="/" className="textdark d-block pb-2 nlink">
              Home
            </a>
            <Link to="/contact" className="textdark d-block pb-2 nlink">
              Contact Us
            </Link>
          </div>
          <div className="col-12 col-md-4 textdark text-justify align-items-center py-3 px-2">
            <span className="my-auto" id="footerHeading">
              IET MPSTME ON CAMPUS
            </span>
          </div>
          <div className="col-12 col-md-4 text-center align-itmes-center my-4">
            <h5 className="textdark pb-2">
              <b>Social</b>
            </h5>
            {/* ! Import correct logos */}
            <SocialIcon
              className="social-icons"
              url="https://instagram.com/ietmpstme"
            />
             <SocialIcon
              className="social-icons"
              url="https://www.facebook.com/ietmpstme/"
            />
            <SocialIcon
              className="social-icons"
              url="https://in.linkedin.com/company/iet-mpstme"
            />
          </div>
        </div>

        <div className="py-5 text-center" id="copyright">
          Copyright © IET MPSTME on Campus {year}
        </div>
      </div>
    </div>
  );
};

export default Footer;

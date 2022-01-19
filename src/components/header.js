/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */

import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import TypedReactHooksDemo from "./animation.js";
import "boxicons";
import "../css/header.scss";
import "tilt.js";
/* import Tilt from "react-tilt";
import iet_logo from "../images/IET_LOGO.png"; */

const Header = () => {
  const [style, setStyle] = useState("typist");
  const changeStyle = () => {
    console.log("you just clicked");
    setStyle("typist2");
  };
  return (
    <div className="container-fluid my-5" id="headerContainer">
      <div className="row align-items-center my-5">
        <div className="col-sm-12 col-md-12 col-lg-12 align-items-center text-center">
          <div className={style}>
            {/*  <box-icon name="quote" id="quote" color="black" size="100px"></box-icon>  */}
            <TypedReactHooksDemo />
          </div>
          <div className="quote-small">
            We at IET aim to <span className="highlight1">inspire</span>,{" "}
            <span className="highlight2">inform</span> and{" "}
            <span className="highlight3">influence</span> young minds to help
            engineer a better world. We share knowledge in the fields of
            engineering and technology to encourage students to find new and
            innovative solutions to problems which have plagued mankind for
            decades. We believe in inspiring and enabling the youth of today to
            use their innovation to make a better world for tomorrow.
          </div>
          <button id="btn" onClick={changeStyle}>
            Explore Events!
          </button>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12 align-items-center text-center">
          {/*  <div id="tiltjs" className="align-items-center text-center mx-auto">
            <Tilt
              className="Tilt align-items-center mx-auto"
              options={{ max: 50 }}
              style={{ height: 250, width: 250 }}
            >
              <div className="Tilt-inner">
                <span>IET</span>
              </div>
            </Tilt>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;

/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */

import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import TypedReactHooksDemo from "./animation.js";
import "boxicons";
import "../css/header.scss";
/* import Atropos from "atropos";
import "atropos/scss"; */
import { Link } from "react-router-dom";
/* import BG from "../Assets/Images/HnCAtropos/BG.png";
import Gradients from "../Assets/Images/HnCAtropos/Gradients.png";
import Matrix from "../Assets/Images/HnCAtropos/Matrix.png";
import Text from "../Assets/Images/HnCAtropos/Text.png"; */

const Header = () => {
  return (
    <div className="container-fluid my-5" id="headerContainer">
      <div className="row align-items-center my-5">
        <div className="col-sm-12 col-md-12 col-lg-12 align-items-center text-center">
          <div className="typist">
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
          <h1 className="mt-5 p-2">Check out our latest event!</h1>
        </div>
        <div
          className="col-sm-12 col-md-12 col-lg-12 text-center"
          id="atroposContainer"
        >
          {/*           <Atropos
            className="hncAtropos mx-auto my-5"
            rotateXMax={5}
            rotateYMax={5}
            alwaysActive={true}
            activeOffset={30}
          >
            <img src={BG} id="atroposBG" data-atropos-offset="-5" alt="BG" />
            <img
              src={Gradients}
              id="atroposGradient"
              data-atropos-offset="-4.5"
              alt="Gradients"
            />
            <img
              src={Matrix}
              id="atroposMatrix"
              data-atropos-offset="5"
              alt="Matrix"
            />
            <img
              src={Text}
              id="atroposText"
              data-atropos-offset="10"
              alt="Text"
            />
          </Atropos> */}
          <Link to="/hackncode">
            <button id="btn" /* data-atropos-offset="12" */>
              Hack n' Code
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

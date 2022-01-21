import React from "react";
import "../css/navbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import iet_logo from "../images/IET_LOGO.png";
import "boxicons";
import { Link as RLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
/* import * as Scroll from "react-scroll"; */
/* import { useState } from "react"; */
/* import "../App.css"; */
/* import Event from "./event.js"; */
/* let slink = Scroll.Link; */
const NavBar = (props) => {
  /* console.log(props.data); */
  return (
    <nav className="navbar navbar-expand-sm fixed-top" id={props.defaultNav}>
      <div className="container-fluid mx-3">
        {/*! Fix the icon  */}
        <a href="/" className="navbar-brand">
          <img
            src={iet_logo}
            className="image-fluid"
            alt="iet-logo"
            // width="3%"
            // height="3%"
          />
        </a>
        <RLink to="/hackncode">
          <button id="navbtn" className="nav-item nav-link mx-auto my-auto">
            Hack n' Code
          </button>
        </RLink>
        {/*  <button className="btn ml-auto mx-3" id="demo">
          Contact Us
        </button> */}
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#collapseNav"
        >
          <box-icon name="menu" color="black" crossOrigin></box-icon>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
          <div className="navbar-nav">
            <ScrollLink
              to="aboutContainer"
              className="nav-item nav-link my-auto"
              spy={true}
              smooth={true}
              offset={-50}
            >
              About
            </ScrollLink>
            <ScrollLink
              to="eventContainer"
              className="nav-item nav-link mx-1 my-auto"
              spy={true}
              smooth={true}
              offset={-145}

            >
              Events
            </ScrollLink>

            {/*  <Link to="/hackncode">
              <button id="navbtn" className="nav-item nav-link mx-1 my-auto">
                Hack n' Code
              </button>
            </Link> */}

            {/*  <a href="/" className="nav-item nav-link mx-1 my-auto">
              Gallery
          </a>*/}
            <RLink to="/contact" className="nav-item nav-link mx-1 my-auto">
              Contact Us
            </RLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

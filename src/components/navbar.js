import React, { useEffect, useState } from "react";
import "../css/navbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "boxicons";
import { Link as RLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
/* import getEventListeners from "../../node_modules/geteventlisteners/src/getEventListeners"; */

const NavBar = (props) => {
/*   console.log(props.test.link11); */
  const [show, setShow] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  );
  const [scrollDirection, setScrollDirection] = useState();

  const controlNavbar = () => {
    setBodyOffset(document.body.getBoundingClientRect());
    setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
    setLastScrollTop(-bodyOffset.top);
    if (window.scrollY !== 0) {
      if (scrollDirection === "up") {
        setShow(false);
      } else {
        setShow(true);
      }
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  });

  /* const checkthis = document.querySelector("#testtest"); */
  /* console.log(props.defaultNavLink.link1); */
  /*   console.log(props.defaultNavLink.defNavLink1);
  console.log(props.defaultNav); */
  /* const show = true; */
  return (
    <nav
      className="navbar navbar-expand-sm fixed-top"
      id={props.defaultNav}
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? 1 : 0,
      }}
    >
      <div className="container-fluid mx-3">
        <a href="/" className="navbar-brand">
          <img
            src={props.defaultNavIcon}
            className="image-fluid"
            alt="iet-logo"
          />
        </a>
        <RLink to="/hackncode">
          <button id="navbtn" className="nav-item nav-link mx-auto my-auto">
            Hack n' Code
          </button>
        </RLink>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#collapseNav"
        >
          <box-icon
            name="menu"
            color={props.defaultBoxIcon}
            crossOrigin
          ></box-icon>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
          <div className="navbar-nav">
            <ScrollLink
              to={props.defaultNavLinks.defNavLink1Id}
              className="nav-item nav-link my-auto mx-1"
              spy={true}
              smooth={true}
              offset={-50}
              id="testtest"
            >
              {/* About */} {props.defaultNavLinks.defNavLink1}
            </ScrollLink>
            <ScrollLink
              to={props.defaultNavLinks.defNavLink2Id}
              className="nav-item nav-link mx-1 my-auto"
              spy={true}
              smooth={true}
              offset={-145}
            >
              {props.defaultNavLinks.defNavLink2}
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

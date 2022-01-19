import "../css/navbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import iet_logo from "../images/IET_LOGO.png";
import "boxicons";
import { Link } from "react-router-dom";
/* import * as Scroll from "react-scroll"; */
/* import { useState } from "react"; */
import "../App.css";
/* import Event from "./event.js"; */
/* let slink = Scroll.Link; */
const NavBar = (props) => {
  /*   document.addEventListener("load", () => {
    document.addEventListener("scroll", (e) => {
      console.log("scrolling");
    });
  }); */
  /*   document.addEventListener("click", function () {
            document.getElementById("demo").innerHTML = "Hello World!";
    }) */

  /*   window.addEventListener("scroll", function(){
   if(window.scrollY > 50){document.getElementsByClassName('navbar-brand').classList.add('fixed-top')}
  }) */

  /* const [bg, setBg] = useState("ffffff");
  const changeBg = () => {
    setBg("000000");
    console.log("test", setBg.value);
  };
  let changingBgColor = setBg; */

  /* const [style, setStyle] = useState("#ffffff");
  const changeStyle = () => {
    console.log("you just clicked");
    setStyle("#ffffff");
    let changedBgColor = setStyle;
  }; */

  console.log(props.data);
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
            <a href="/" className="nav-item nav-link mxy-auto">
              About
            </a>
            <a href="/" className="nav-item nav-link mx-1 my-auto">
              Events
            </a>
            <Link to="/hackncode">
              <button
                id="btn"
               /*  onClick={() => {
                  props.data();
                }} */
                className="nav-item nav-link mx-1 my-auto"
              >
                Hack n' Code
              </button>
            </Link>

            <a href="/" className="nav-item nav-link mx-1 my-auto">
              Gallery
            </a>
            <Link to="/contact" className="nav-item nav-link mx-1 my-auto">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

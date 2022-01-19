import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../App";


/* import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { escapeSelector, isWindow } from "jquery"; */

export default function GoToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  //return null;
  return (
    <div
      className="toTopButton"
      onClick={GoToTop}
    >
      <div className="upIcon">
        {" "}
        <box-icon name="up-arrow" color="white" crossOrigin></box-icon>
      </div>
    </div>
  );
}

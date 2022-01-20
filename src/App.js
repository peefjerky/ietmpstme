import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Provider } from "./context";
/* import ReactDOM from "react-dom"; */
import NavBar from "./components/navbar.js";
/* import Header from "./components/header.js"; */
/* import About from "./components/about";
import Event from "./components/event.js"; */
import Footer from "./components/footer.js";
import Contact from "./components/contact";
/* import Tingle from "./components/tinglejs.js"; */
import Modal from "./components/modalb4";
import GoToTop from "./components/goToTop";
import HomePage from "./components/homePage";
import "./App.css";
import NotFound from "./components/notFound";
/* import createReactClass from "create-react-class"; */
import LocationChange from "./Hooks/hear-for-location";
import { AnimatePresence } from "framer-motion/dist/framer-motion";

/* import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"; */
import AOS from "aos";
import "aos/dist/aos.css";
import "boxicons";
import Hack_n_code from "./Pages/HacknCode/hack-n-code";
/* import locationChange from "./Hooks/hear-for-location"; */

function App() {
  const AniLocation = useLocation();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [defGlass, setGlass] = useState("glass");

  const changeGlass = () => {
    setGlass("glass2");
  };
  const [defNav, setNav] = useState("Navbar");
  const changeNav = () => {
    setNav("Navbar2");
  };
  const [defGradient, setGradient] = useState("footerGradient");
  const changeGradient = () => {
    setGradient("footerGradient2");
  };

  const [defFooter, setFooter] = useState("footer");
  const changeFooter = () => {
    setFooter("footer2");
  };

  const [defBg, setBg] = useState("background");
  const changeBg = () => {
    setBg("background2");
  };

  const [defCircle1, setCircle1] = useState("circle1");

  const changeCircle1 = () => {
    setCircle1("circle1hide");
  };
  const [defCircle2, setCircle2] = useState("circle2");

  const changeCircle2 = () => {
    setCircle2("circle2hide");
  };
  const [defCircle3, setCircle3] = useState("circle3");

  const changeCircle3 = () => {
    setCircle3("circle3hide");
  };
  const revertChanges = () => {
    setGlass("glass");
    setNav("Navbar");
    setGradient("footerGradient");
    setFooter("footer");
    setBg("background");
    setCircle1("circle1");
    setCircle2("circle2");
    setCircle3("circle3");
  };
  /*   var glass = document.getElementsByClassName("glass");
  glass.style.height = "100px";
  var glassHeight = glass.clientHeight + "px"; */

  return (
    <Provider>
      {/*   <GoToTop></GoToTop> */}
      <LocationChange
        sexyfunctions={() => {
          changeGlass();
          changeBg();
          changeCircle1();
          changeCircle2();
          changeCircle3();
          changeGradient();
          changeFooter();
          changeNav();
        }}
        revert={revertChanges}
      />

      <div className="container_main" id="Main">
        <div className={defBg}>
          <div className={defCircle1}></div>
          <div className={defCircle2}></div>
          <div className={defCircle3}></div>

          <div className="foreground" id="toTop">
            {/*  <button
      <BrowserRouter>
        <LocationChange
          sexyfunctions={() => {
            changeGlass();
            changeBg();
            changeCircle1();
            changeCircle2();
            changeCircle3();
            changeGradient();
            changeFooter();
            changeNav();
          }}
          revert={revertChanges}
        />

        <div className="container_main" id="Main">
          <div className={defBg}>
            <div className={defCircle1}></div>
            <div className={defCircle2}></div>
            <div className={defCircle3}></div>

            <div className="foreground" id="toTop">
              {/*  <button
                className="btn btn-info"
                style={{ position: "absolute", top: "50px" }}
                onClick={changeBg}
              >
                Changebg
              </button> */}
            <NavBar
              data={() => {
                changeGlass();
                changeBg();
                changeCircle1();
                changeCircle2();
                changeCircle3();
                changeGradient();
                changeFooter();
                changeNav();
              }}
              defaultNav={defNav}
            />
            <section className={defGlass}>
              <AnimatePresence>
                <Routes anilocation={AniLocation} key={AniLocation.key}>
                  <Route exact path="/" element={<HomePage />} />
                  <Route exact path="/contact" element={<Contact />}></Route>
                  <Route
                    exact
                    path="/hackncode"
                    element={<Hack_n_code />}
                  ></Route>
                  <Route exact path="*" element={<NotFound />}></Route>
                </Routes>
              </AnimatePresence>
              <Footer bgtint={defGradient} footer2={defFooter} />
            </section>
          </div>
        </div>
        <Modal />

        {/* <Tingle /> */}
      </div>
      <GoToTop></GoToTop>
    </Provider>
  );
}

export default App;

import React, { useState, useEffect, useCallback } from "react";
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
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

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
  const [defNav, setNav] = useState("Navbar");
  const [defGradient, setGradient] = useState("footerGradient");
  const [defFooter, setFooter] = useState("footer");
  const [defBg, setBg] = useState("background");
  const [defCircle1, setCircle1] = useState("circle1");
  const [defCircle2, setCircle2] = useState("circle2");
  const [defCircle3, setCircle3] = useState("circle3");

  const onRouteChange = useCallback(() => {
    setGlass("glass2");
    setNav("Navbar2");
    setGradient("footerGradient2");
    setFooter("footer2");
    setBg("background2");
    setCircle1("circle1hide");
    setCircle2("circle2hide");
    setCircle3("circle3hide");
  }, [
    setGlass,
    setNav,
    setGradient,
    setFooter,
    setBg,
    setCircle1,
    setCircle2,
    setCircle3,
  ]);

  const revertChanges = useCallback(() => {
    setGlass("glass");
    setNav("Navbar");
    setGradient("footerGradient");
    setFooter("footer");
    setBg("background");
    setCircle1("circle1");
    setCircle2("circle2");
    setCircle3("circle3");
  }, [
    setGlass,
    setNav,
    setGradient,
    setFooter,
    setBg,
    setCircle1,
    setCircle2,
    setCircle3,
  ]);
  /*   const background = useTransform(["#ff008c", "#7700ff", "rgb(230, 255, 0)"]); */
  return (
    <Provider>
      {/*   <GoToTop></GoToTop> */}
      <LocationChange sexyfunctions={onRouteChange} revert={revertChanges} />

      <div className="container_main" id="Main">
        <div className={defBg}>
          <motion.div
            className={defCircle1}
            /* cy={"-100vh"} */
            initial={{ y: "-100vh" }}
            /*     y={"-100vh"} */
            animate={{ y: "0vh" }}
            whileInView={{ scale: 1.3 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: "easeInOut",
              /* repeat: "Infinity",
              repeatType: "reverse", */
            }}
          ></motion.div>
          <motion.div
            className={defCircle2}
            whileInView={{ scale: 1.8 }}
            transition={{
              duration: 2,
              delay: 0.4,
              ease: "easeInOut",
              repeat: "Infinity",
              repeatType: "reverse",
            }}
            /* initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: "Infinity",
              repeatType: "reverse",
            }} */
          ></motion.div>
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
            <NavBar data={onRouteChange} defaultNav={defNav} />
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

import React, { useState /* , useEffect */ /* , useCallback  */ } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Provider } from "./context";
/* import ReactDOM from "react-dom"; */
import NavBar from "./components/navbar.js";
/* import Header from "./components/header.js"; */
/* import About from "./components/about";
import Event from "./components/event.js"; */
import Footer from "./components/footer.js";
import Contact from "./components/contact";
import Modal from "./components/modalb4";
import GoToTop from "./components/goToTop";
import HomePage from "./components/homePage";
import "./App.css";
import iet_logo from "./images/IET_LOGO.png";
import iet_blue from "./Assets/Images/IET_Blue.png";
import NotFound from "./components/notFound";
/* import createReactClass from "create-react-class"; */
import LocationChange from "./Hooks/hear-for-location";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
/* import AOS from "aos";
import "aos/dist/aos.css"; */
import "boxicons";
import Hack_n_code from "./Pages/HacknCode/hack-n-code";

function App() {
  const AniLocation = useLocation();
  /*   useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []); */
  console.log("main app");
  const [defGlass, setGlass] = useState("glass");
  const [defNav, setNav] = useState("Navbar");
  const [defBoxIcon, setBoxIcon] = useState("#a046b4");
  const [defNavIcon, setNavIcon] = useState(iet_logo);
  const [defGradient, setGradient] = useState("footerGradient");
  const [defFooter, setFooter] = useState("footer");
  const [defBg, setBg] = useState("background");
  const [defCircle1, setCircle1] = useState("circle1");
  const [defCircle2, setCircle2] = useState("circle2");
  const [defCircle3, setCircle3] = useState("circle3");
  const [defNavLink1, setNavLink1] = useState("About");
  const [defNavLink2, setNavLink2] = useState("Events");
  const [defNavLink1Id, setNavLink1Id] = useState("aboutContainer");
  const [defNavLink2Id, setNavLink2Id] = useState("eventContainer");

  /*   const [defNavLinkss, setNavLinkss] = useState({
    link11: "About",
    link11Id: "About Container",
  });
 */
  /*   const link11 = defNavLinkss.link11;
  const link11Id = defNavLinkss.link11Id; */

  const onRouteChange = () => {
    console.log("onRouteRender");
    setGlass("glass2");
    setNav("Navbar2");
    setBoxIcon("#c3c4ff");
    setNavIcon(iet_blue);
    setGradient("footerGradient2");
    setFooter("footer2");
    setBg("background2");
    setCircle1("circle1hide");
    setCircle2("circle2hide");
    setCircle3("circle3hide");
    setNavLink1("Information");
    setNavLink2("FAQs");
    setNavLink1Id("hncInformationContainer");
    setNavLink2Id("hncFaq");
    /*  setNavLinkss({ ...defNavLinkss, link11: "Information" }); */
  }; /* , [
    setGlass,
    setNav,
    setBoxIcon,
    setGradient,
    setFooter,
    setBg,
    setCircle1,
    setCircle2,
    setCircle3,
    setNavLink1,
    setNavLink2,
  ]); */
  /*defGlass,
    defNav,
    defBoxIcon,
    defGradient,
    defFooter,
    defBg,
    defCircle1,
    defCircle2,
    defCircle3,
    defNavLink1,
    defNavLink2, */

  const revertChanges = () => {
    setGlass("glass");
    setNav("Navbar");
    setNavIcon(iet_logo);
    setBoxIcon("#a046b4");
    setGradient("footerGradient");
    setFooter("footer");
    setBg("background");
    setCircle1("circle1");
    setCircle2("circle2");
    setCircle3("circle3");
    setNavLink1("About");
    setNavLink2("Events");
    setNavLink1Id("aboutContainer");
    setNavLink2Id("eventContainer");
  }; /* , [
    setGlass,
    setNav,
    setBoxIcon,
    setGradient,
    setFooter,
    setBg,
    setCircle1,
    setCircle2,
    setCircle3,
  ]); */
  /*   const background = useTransform(["#ff008c", "#7700ff", "rgb(230, 255, 0)"]); */
  return (
    <Provider>
      {/*   <GoToTop></GoToTop> */}
      <LocationChange
        apply={onRouteChange}
        changes={{
          defGlass,
          defNav,
          defBoxIcon,
          defGradient,
          defFooter,
          defBg,
          defCircle1,
          defCircle2,
          defCircle3,
          defNavLink1,
          defNavLink2,
          /*  defNavLinkss, */
        }}
        revert={revertChanges}
      />

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
            whileInView={{ scale: 1.8, rotate: 360 }}
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
            <NavBar
              data={onRouteChange}
              defaultNav={defNav}
              defaultBoxIcon={defBoxIcon}
              defaultNavIcon={defNavIcon}
              defaultNavLinks={{
                defNavLink1,
                defNavLink2,
                defNavLink1Id,
                defNavLink2Id,
              }}

              /*  defaultNavLink={{ defNavLink1, defNavLink2 }} */
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
              <Footer
                bgtint={defGradient}
                footer2={defFooter}
                /* test={defNavLinkss} */
              />
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

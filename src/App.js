import React, {
  useEffect,
  useLayoutEffect,
  useState /* , useEffect */ /* , useCallback  */,
} from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Provider } from "./context";
import ReactGA from "react-ga4";
import NavBar from "./components/navbar.js";
import Footer from "./components/footer.js";
import Contact from "./components/contact";
/* import Modal from "./components/modalb4"; */
import GoToTop from "./components/goToTop";
import HomePage from "./components/homePage";
import "./App.css";
import iet_logo from "./Assets/Images/IET_LOGO.webp";
import iet_blue from "./Assets/Images/IET_Blue.webp";
import NotFound from "./components/notFound";
import LocationChange from "./Hooks/hear-for-location";
import { motion, AnimatePresence } from "framer-motion";
import Hnc_Loading from "./components/hnc_loading";
import "boxicons";

const Lazy_Hack_n_code = React.lazy(() =>
  import("./Pages/HacknCode/hack-n-code")
);
const Lazy_Hnc_submission = React.lazy(() =>
  import("./Pages/HacknCode/components/hnc_submission")
);
function App() {
  const AniLocation = useLocation();
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
  const [isVisible, setIsVisible] = useState(false);

  //* This function will run when there is a route change to /hackncode

  useEffect(() => {
    ReactGA.initialize("G-5196BRMP9B");
    ReactGA.send(window.location.pathname + window.location.search);
  }, []);

  const onRouteChange = () => {
    /*  console.log("onRouteRender"); */
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
  };

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
  };

  const submission = useLocation();

  useLayoutEffect(() => {
    if (submission.pathname === "/hackncode/submission") {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [submission.pathname]);

  return (
    <Provider>
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
        }}
        revert={revertChanges}
      />
      <div className="container_main" id="Main">
        {/*//* Background */}
        <div className={defBg}>
          <motion.div
            className={defCircle1}
            initial={{ y: "-100vh" }}
            animate={{ y: "0vh" }}
            whileInView={{ scale: 1.3 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: "easeInOut",
            }}
          ></motion.div>
          <motion.div
            style={{
              visibility: isVisible ? "visible" : "hidden",
              opacity: isVisible ? 1 : 0,
            }}
            className={defCircle2}
            whileInView={{ scale: 1.8, rotate: 360 }}
            transition={{
              duration: 2,
              delay: 0.4,
              ease: "easeInOut",
              repeat: "Infinity",
              repeatType: "reverse",
            }}
          ></motion.div>
          <motion.div
            style={{
              visibility: isVisible ? "visible" : "hidden",
              opacity: isVisible ? 1 : 0,
            }}
            className={defCircle3}
            whileInView={{ scale: 1.1, rotate: 720, y: "30%" }}
            transition={{
              duration: 2,
              delay: 0.4,
              ease: "easeInOut",
              repeat: "Infinity",
              repeatType: "reverse",
            }}
          ></motion.div>
          {/*//* Foreground */}
          <div className="foreground" id="toTop">
            <NavBar
              data={onRouteChange}
              defaultNav={defNav}
              defaultBoxIcon={defBoxIcon}
              defaultNavIcon={defNavIcon}
              defaultVisibility={isVisible}
              defaultNavLinks={{
                defNavLink1,
                defNavLink2,
                defNavLink1Id,
                defNavLink2Id,
              }}
            />
            <section className={defGlass}>
              {/*//* Routes */}
              <React.Suspense fallback={<Hnc_Loading />}>
                <AnimatePresence>
                  <Routes anilocation={AniLocation} key={AniLocation.key}>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/contact" element={<Contact />}></Route>
                    <Route
                      exact
                      path="/hackncode"
                      element={<Lazy_Hack_n_code />}
                    ></Route>
                    <Route
                      exact
                      path="/hackncode/submission"
                      element={<Lazy_Hnc_submission />}
                    ></Route>
                    <Route exact path="*" element={<NotFound />}></Route>
                  </Routes>
                </AnimatePresence>
              </React.Suspense>
              <Footer bgtint={defGradient} footer2={defFooter} />
            </section>
          </div>
        </div>
        {/* //!Disabled modal for Now <Modal /> */}
      </div>
      <GoToTop></GoToTop>
    </Provider>
  );
}

export default App;

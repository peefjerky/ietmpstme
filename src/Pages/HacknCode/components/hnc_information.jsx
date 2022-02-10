import React /* , { useEffect } */ from "react";
import "../../../css/hnc_information.scss";
/* import Asset1 from "../../../Assets/SVG/Asset1.svg"; */
import { motion } from "framer-motion";
import Hnc_animation2 from "../../../components/hnc_animation2";
/* import AOS from "aos";
import "aos/dist/aos.css"; */

const Hnc_information = () => {
  /*  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []); */

  return (
    <div className="container-fluid my-5" id="hncInformationContainer">
      <div className="row mx-lg-5 mx-md-5 mx-sm-3 align-items-center">
        <div
          className="col-lg-6 col-md-12 col-lg overflow-scroll"
          id="hncCardContainer"
        >
          {/* <div className="mb-5 pt-5 text-center">
            <box-icon
              name="mouse"
              animation="fade-down"
              color="#c3c4ff"
              size="40px"
            ></box-icon>
            <h3 className="mt-3 scrollIcon">SCROLL</h3>
          </div> */}
          <h1 className="text-center">
            Get to learn about <span>competitive coding</span> and much more!
          </h1>
          <motion.div
            className="card mt-5 mx-3 mx-sm-2 mx-lg-2 mx-md-2"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            /* viewport={{ once: true }} */
          >
            <div className="card-body">
              <h3 className="card-title p-2">Why participate?</h3>
              <hr />
              <p className="card-text">
                Whether you have just started your coding journey or you are
                strides ahead and want to test your skills,
                <strong> Hack-n-Code</strong> is just the right place for you.
                It provides an encouraging learning platform for beginners who
                can witness the professionals work and take the right steps for
                their respective journeys. For the veterans this event is an
                amazing opportunity to <strong>test their skills </strong>
                against other professionals and also
                <strong> boost their CVs</strong> by winning. Besides you can
                always just aim for the prize and maybe if you are lucky and
                creative you will be richer than when you first started.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="card my-5 mx-3 mx-sm-2 mx-lg-2 mx-md-2"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            /*  viewport={{ once: true }} */
          >
            <div className="card-body">
              <h3 className="card-title p-2">Who can participate?</h3>
              <hr />
              <p className="card-text">
                <strong>Hack-n-Code</strong> is an innovative learning platform
                that offers something to learn for everyone ranging from
                <strong> beginners to professionals</strong>. So whether you are
                a school student or a college graduate,
                <strong> IET welcomes all of you </strong>
                to take a part in this enriching experience and move forward in
                your respective coding journeys.
              </p>
            </div>
          </motion.div>
          {/*  <motion.div
            className="card my-5 mx-sm-2"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="card-body">
              <h3 className="card-title p-2">Who can participate?</h3>
              <hr />
              <p className="card-text">
                HacknCode is an innovative learning platform that offers
                something to learn for everyone ranging from beginners to
                professionals. So whether you are a school student or a college
                graduate, IET welcomes all of you to take a part in this
                enriching experience and move forward in your respective coding
                journeys.
              </p>
            </div>
          </motion.div> */}
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 p-5">
          {/* <img src={Asset1} className="img-fluid p-5" alt="Hnc_information" /> */}
          <Hnc_animation2 className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Hnc_information;

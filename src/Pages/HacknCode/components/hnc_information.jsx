import React, { useEffect } from "react";
import "../../../css/hnc_information.scss";
import Asset1 from "../../../Assets/SVG/Asset1.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hnc_information = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="container-fluid my-5" id="hncInformationContainer">
      <div className="row mx-lg-5 mx-md-5 mx-sm-3">
        <div className="col-lg-6 col-md-12 col-lg">
          <div
            className="card"
            data-aos="slide-right"
            data-aos-easing="ease-in-out"
          >
            <div className="card-body">
              <h2 className="card-title p-2">Why participate?</h2>
              <hr />
              <p className="card-text">
                Whether you have just started your coding journey or you are
                strides ahead and want to test your skills, HackNCode is just
                the right place for you. It provides an encouraging learning
                platform for beginners who can witness the professionals work
                and take the right steps for their respective journeys. For the
                veterans this event is an amazing opportunity to test their
                skills against other professionals and also boost their CVs by
                winning. Besides you can always just aim for the prize and maybe
                if you are lucky and creative you will richer than when you
                first started.
              </p>
            </div>
          </div>
          <div
            className="card my-5"
            data-aos="slide-right"
            data-aos-easing="ease-in-out"
          >
            <div className="card-body">
              <h2 className="card-title p-2">Who can participate?</h2>
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
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-lg align-items-center">
          <img src={Asset1} className="img-fluid p-5" alt="Hnc_information" />
        </div>
      </div>
    </div>
  );
};

export default Hnc_information;

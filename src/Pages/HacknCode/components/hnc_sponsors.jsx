import React, { useEffect } from "react";
import "../../../css/hnc_sponsors.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const Hnc_sponsors = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="container-fluid my-5 text-center" id="hncSponsors">
      <div className="row mx-5">
        <h1 className="pb-3" data-aos="fade-in">
          Our Sponsor
        </h1>
        <div
          className="col-lg-12 col-sm-12 col-md-12 mt-3 mb-5 align-items-center"
          id="sponsorsContanier"
          data-aos="slide-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <div className="align-self-center my-5">
            <div className="my-4">
              <h3 className="text-white align-self-center my-5">
                Coming Soon!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hnc_sponsors;

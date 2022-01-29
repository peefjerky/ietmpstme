import React /* , { useEffect } */ from "react";
import "../../../css/hnc_sponsors.scss";
/* import AOS from "aos";
import "aos/dist/aos.css"; */
const Hnc_sponsors = () => {
  /*   useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []); */
  return (
    <div className="container-fluid my-5 text-center" id="hncSponsors">
      <h1 className="mb-3">Our Sponsors</h1>
      <div className="row mx-5 align-items-center text-center">
        <div
          className="col-lg-12 col-sm-12 col-md-12 mt-3 mb-5"
          id="sponsorsContanier"
        >
          <div className="my-5">
            <h3 className="text-white align-middle my-5">Coming Soon!</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hnc_sponsors;

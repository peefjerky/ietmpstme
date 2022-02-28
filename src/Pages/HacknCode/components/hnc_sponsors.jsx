import React /* , { useEffect } */ from "react";
import "../../../css/hnc_sponsors.scss";
import github from "../../../Assets/Images/GitHub.png";
import earthhack from "../../../Assets/Images/Earth+Hacks.webp";
import mlsa from "../../../Assets/Images/mlsa.webp";
/* import AOS from "aos";
import "aos/dist/aos.css"; */
const Hnc_sponsors = () => {
  /*   useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []); */
  return (
    <div className="container-fluid my-5 text-center" id="hncSponsors">
      <h1 className="my-5">Our Sponsors</h1>
      <div
        className="row mx-5 align-items-center text-center"
        id="sponsorsContanier"
      >
        <div className="d-flex flex-row sponn">
          <img
            src={github}
            alt="sponsor1"
            className="img-fluid"
            style={{ height: "100px", width: "100px", marginRight: "5rem", marginLeft: "5rem" }}
          />

          <img
            src={earthhack}
            alt="sponsor2"
            className="img-fluid"
            style={{ height: "100px", width: "450px", marginRight: "5rem", marginLeft: "8rem" }}
          />

          <img
            src={mlsa}
            alt="sponsor3"
            className="img-fluid"
            style={{ height: "150px", marginRight: "5rem", marginLeft: "5rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hnc_sponsors;

import React /* , { useEffect } */ from "react";
import "../../../css/hnc_sponsors.scss";
import github from "../../../Assets/Images/GitHub.png";
import earthhack from "../../../Assets/Images/Sponsors/earthhacks.webp";
import mlsa from "../../../Assets/Images/mlsa.webp";
import devfolio_logo from "../../../Assets/Images/Sponsors/Devfolio_Logo-White.png";
import polygon_logo from "../../../Assets/Images/Sponsors/Polygon_Logo-White.png";
import tezos_logo from "../../../Assets/Images/Sponsors/Tezos_Logo-White.png";
import filecoin_logo from "../../../Assets/Images/Sponsors/Filecoin_Coloured-White.png";
import celo_logo from "../../../Assets/Images/Sponsors/Celo_Logo-White.png";
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
        className="row mx-0 mx-md-5 mx-sm-0 mx-lg-5 align-items-center text-center py-5"
        id="sponsorsContanier"
      >
        <div className="col-12 col-lg-12 col-md-12 col-sm-12">
          <a href="https://github.com">
            <img
              src={github}
              alt="sponsor1"
              className="img-fluid"
              style={{
                height: "100px",
                width: "auto",
                marginRight: "5rem",
                marginLeft: "5rem",
              }}
            />
          </a>
          <a href="https://earthhacks.io/">
            <img
              src={earthhack}
              alt="sponsor2"
              className="img-fluid"
              style={{
                height: "100px",
                width: "auto",
                marginRight: "5rem",
                marginLeft: "5rem",
              }}
            />
          </a>
          <a href="https://studentambassadors.microsoft.com/">
            <img
              src={mlsa}
              alt="sponsor3"
              className="img-fluid"
              style={{
                height: "120px",

                marginRight: "5rem",
                marginLeft: "5rem",
                width: "auto",
              }}
            />
          </a>
          <a href="https://devfolio.co/">
            <img
              src={devfolio_logo}
              alt="sponsor4"
              className="img-fluid"
              style={{
                height: "auto",
                marginTop: "40px",
                marginRight: "5rem",
                marginLeft: "5rem",
                width: "auto",
              }}
            />
          </a>
          <a href="https://polygon.technology/">
            <img
              src={polygon_logo}
              alt="sponsor5"
              className="img-fluid"
              style={{
                height: "auto",
                marginTop: "40px",
                marginRight: "5rem",
                marginLeft: "5rem",
                width: "auto",
              }}
            />
          </a>
          <a href="https://tezos.com/">
            <img
              src={tezos_logo}
              alt="sponsor6"
              className="img-fluid"
              style={{
                height: "auto",
                marginTop: "40px",
                marginRight: "5rem",
                marginLeft: "5rem",
                width: "auto",
              }}
            />
          </a>
          <a href="https://filecoin.io">
            <img
              src={filecoin_logo}
              alt="sponsor7"
              className="img-fluid"
              style={{
                height: "80px",
                marginTop: "40px",
                marginRight: "5rem",
                marginLeft: "5rem",
                width: "auto",
              }}
            />
          </a>
          <a href="https://celo.org/">
            <img
              src={celo_logo}
              alt="sponsor8"
              className="img-fluid"
              style={{
                height: "auto",
                marginTop: "40px",
                marginRight: "5rem",
                marginLeft: "5rem",
                width: "auto",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hnc_sponsors;

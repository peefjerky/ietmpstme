import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../App.css";
import "boxicons";
// import AOS from "aos";
// import "aos/dist/aos.css";
import "../css/about.scss";

const About = () => {
  // AOS.init({ useClassNames: true });
  return (
    <div id="aboutContainer">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 text-center ">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                <small>What is IET</small>
              </h1>
              <p>
                The Institution of Engineering and Technology, IET, is a
                multidisciplinary professional engineering institution based in
                the United Kingdom. It seeks to inspire, inform, and influence
                the global engineering community to usher it towards a brighter,
                more prosperous future.
              </p>
              {/*  ! Figure this out
            <div className="iconCircle1"></div> */}
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 text-center ">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                <small>More About Us</small>
              </h1>
              <p>
                As a diverse home across engineering and technology, the IET,
                since its inception as the Society of Telegraph Engineers in
                1871, and then as the Institution of Electrical Engineers, has
                strived indefatigably to share knowledge that helps make better
                sense of the world.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="circle4"></div>
      <div className="circle5"></div>
    </div>
  );
};

export default About;

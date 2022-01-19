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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
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

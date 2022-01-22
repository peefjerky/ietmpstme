import React from "react";
import HnCTypedReactHooks from "../../../components/hnc_animation";
import "../../../css/hnc_header.scss";
import LaptopAnimation from "../../../components/laptopanimation";

import "../../../App.css";
const Hnc_header = () => {
  return (
    <div className="container-fluid my-5 text-lg-left" id="hncHeaderContainer">
      <div className="row align-items-center my-5 mx-sm-3 mx-md-5 mx-lg-5">
        <div className="col-sm-12 col-md-12 col-lg-6 align-items-lg-left align-items-md-center mb-5">
          <div>
            <span className="badge text-lg-start my-2">24 Hour Hackathon</span>
            <br />
            <span className="badge text-lg-start my-2">26th - 27th March</span>
          </div>
          <div className="hnc_typist mt-5">
            <HnCTypedReactHooks />
          </div>
          <div>
            <p className="mb-5">
              We share knowledge in the fields of engineering and technology to
              encourage students to find new and innovative solutions to
              problems which have plagued mankind for decades.
            </p>
            <button className="mx-3 d-inline-block align-items-center" id="btn">
              Register Now
            </button>
            <button className="mx-3 d-inline-block mb-3 mt-3" id="discbtn">
              {/*  <box-icon
                name="discord"
                type="logo"
                color="#ffffff"
                id="disclogo"

              ></box-icon> */}
              Join Our Discord!
            </button>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-6 mt-md-5 mt-sm-5 align-itmes-center mx-auto"
          id="hnc_svgimg"
        >
          {/*  <h1>Insert Some image</h1> */}
          {/* <img src={Asset6} className="img-fluid" alt="LaptopImage"></img> */}
          <LaptopAnimation />
        </div>
      </div>
    </div>
  );
};
export default Hnc_header;

import React from "react";
import HnCTypedReactHooks from "../../../components/hnc_animation";
/* import { FixedSizeList } from "react-window"; */
import "../../../css/hnc_header.scss";
import LaptopAnimation from "../../../components/laptopanimation";

import "../../../App.css";
const Hnc_header = () => {
  return (
    <div
      className="container-fluid my-5 text-lg-start text-sm-center text-center"
      id="hncHeaderContainer"
    >
      <div className="row align-items-center my-5 mx-3 mx-md-5 mx-lg-5">
        <div className="col-sm-12 col-md-12 col-lg-6 mb-5">
          <div>
            <span className="badge my-2">24 Hour Hackathon</span>
            <br />
            <span className="badge my-2">26th - 27th March</span>
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
              <a
                className="text-light stretched-link"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfnUXoyOuXkLSQOwEAABxTjdrP2r3CDA-5gKdIlfeaX2BJd0Q/viewform"
              >
                Register Now!
              </a>
            </button>
            {/* <button
              className="disabled mx-3 d-inline-block mb-3 mt-3"
              disabled
              id="discbtn"
              data-bs-container="body"
              data-bs-toggle="popover"
              title="Work In Progress"
              data-bs-content="Hold on! The Discord server is still being made for y'all!"
            >
              Join Our Discord!
            </button> */}
          </div>
        </div>
        <div
          className="col-sm-12 col-md-8 col-lg-6 mt-md-5 mt-sm-5 align-itmes-center mx-auto"
          id="hnc_svgimg"
        >
          {/*  <h1>Insert Some image</h1> */}
          {/* <img src={Asset6} className="img-fluid" alt="LaptopImage"></img> */}
          {/*  <FixedSizeList
            height={150}
            itemCount={998}
            itemSize={300}
            width={300}
          > */}
          <LaptopAnimation />
          {/*  </FixedSizeList> */}
        </div>
      </div>
    </div>
  );
};
export default Hnc_header;

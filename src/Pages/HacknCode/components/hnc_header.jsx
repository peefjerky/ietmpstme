import React, { useRef, useState, useEffect } from "react";
import HnCTypedReactHooks from "../../../components/hnc_animation";
/* import { FixedSizeList } from "react-window"; */
import "../../../css/hnc_header.scss";
import LaptopAnimation from "../../../components/laptopanimation";
import { Link } from "react-router-dom";
/* import Devfolio_Button from "../../../Assets/Images/Sponsors/Devfolio_Button.png"; */
import "../../../App.css";
const Hnc_header = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [width, setWidth] = useState();
  const myRef = useRef();
  const getSize = () => {
    const newWidth = myRef.current.clientWidth;

    if (newWidth < 380) {
      setWidth(newWidth - 50);
    } else {
      setWidth(newWidth - 200);
    }
  };
  useEffect(() => {
    getSize();
  }, []);
  useEffect(() => {
    window.addEventListener("resize", getSize);

    return () => {
      window.removeEventListener("resize", getSize);
    };
  }, []);

  return (
    <div
      className="container-fluid my-5 text-lg-start text-sm-center text-center"
      id="hncHeaderContainer"
    >
      <div
        className="row align-items-center my-5 mx-3 mx-md-5 mx-lg-5 align-items-center justify-content-center"
        ref={myRef}
      >
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
            {/* <button
              className="mx-3 d-inline-block align-items-center"
              id="btn_reg"
            >
              <img
                src={Devfolio_Button}
                style={{ height: "20px", width: "20px" }}
                alt="Devfolio"
                className="img-fluid me-3"
              />
              <a
                className="text-light stretched-link"
                href="https://lu.ma/HacknCode"
              >
                Apply with Devfolio
              </a>
            </button> */}
            <div
              className="apply-button"
              data-hackathon-slug="hackncode-5"
              data-button-theme="light"
              style={{ height: "44px", width: "312px" }}
            ></div>
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
            <p className="my-3">or</p>

            <a href="https://bit.ly/HacknCode">
              <button
                className="d-inline-block align-items-center ms-0 mt-3 mt-lg-0 mt-sm-3 mt-md-0"
                id="btn_reg2"
              >
                Google Forms
              </button>
            </a>
            <Link to="/guidelines">
              <button
                className="d-inline-block align-items-center ms-lg-4 ms-0 ms-md-3 ms-sm-0 mt-3 mt-lg-3 mt-sm-3 mt-md-3"
                id="btn_reg"
              >
                Check out our Guidelines!
              </button>
            </Link>
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
        <div className="mt-5 col-lg-12 col-12 col-sm-12 col-md-12">
          <div className="mx-auto text-center justify-content-center">
            <iframe
              src="https://discord.com/widget?id=956443824224354315&theme=dark"
              width={width}
              height="300"
              allowtransparency="true"
              frameborder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
            <a href="https://discord.gg/5r52GNH8Wq">
              <button
                className="disabled mx-3 d-inline-block mb-3 mt-3"
                id="discbtn"
              >
                Join Our Discord!
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hnc_header;

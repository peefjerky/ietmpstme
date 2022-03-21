import React from "react";
import "../../../css/hnc_modal_popup.scss";
import { Modal } from "react-bootstrap";
/* import { Button } from "react-bootstrap"; */
import LaptopAnimation from "../../../components/laptopanimation";
import HnCTypedReactHooks from "../../../components/hnc_animation";
import { Link } from "react-router-dom";

const Hnc_modal_popup = (props) => {
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
  return (
    <Modal
      id="Hnc_Modal"
      className="text-lg-start text-sm-center text-center text-md-center"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="">
        <Modal.Title id="contained-modal-title-vcenter">
          Register For Hack-n-Code 5.0
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="HncModalBody p-5">
        <div className="row mx-auto align-items-center">
          <div className="col-lg-6 col-md-6 col-12">
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
                We share knowledge in the fields of engineering and technology
                to encourage students to find new and innovative solutions to
                problems which have plagued mankind for decades.
              </p>
              <Link to="/hackncode">
                <button
                  className="mx-0 d-inline-block align-items-center"
                  id="btn"
                >
                  {/*  <a
                  className="text-light stretched-link"
                  href="https://lu.ma/HacknCode"
                >
                  Register Now!
                </a> */}
                  Register Now!
                </button>
              </Link>
              {/*  <div
                className="apply-button"
                data-hackathon-slug="hackncode-5"
                data-button-theme="light"
                style={{ height: "44px", width: "312px" }}
              ></div> */}
            </div>
          </div>

          <div
            className="col-sm-12 col-md-8 col-lg-6 mt-md-5 mt-sm-5 align-itmes-center mx-auto"
            id="hnc_svgimg"
          >
            <LaptopAnimation />
          </div>
        </div>
      </Modal.Body>
      {/*  <Modal.Footer >
        <Button
          onClick={props.onHide}>Register Now</Button>
      </Modal.Footer> */}
    </Modal>
  );
};
export default Hnc_modal_popup;

import React from "react";
import "../../../css/hnc_modal_popup.scss";
import { Modal } from "react-bootstrap";
/* import { Button } from "react-bootstrap"; */
import HnCTypedReactHooks2 from "../../../components/hnc_coming_soon";
import earthhack from "../../../Assets/Images/Sponsors/earthhacks.webp";
const Hnc_problem_statement = (props) => {
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
          PROBLEM STATEMENT
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="HncModalBody p-5">
        <div className="row mx-auto align-items-center">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center">
            <div className="hnc_typist">
              <HnCTypedReactHooks2 />
            </div>
            {/* !================UNCOMMENT AT 10:30 ================ */}
            {/*   <div className="mt-5">
              <ul>
                <li>
                  <b>Digital Futures:</b> How do we help improve people's lives
                  through technology?
                </li>
                <li>
                  <b>Healthy Lives:</b> How do we help people live healthy
                  lives?
                </li>
                <li>
                  <b>Sustainability and Climate Change:</b> How do we help the
                  planet through sustainable development?
                </li>
              </ul>
              <p>by</p>
              <div className="px-5 ">
                <a href="https://earthhacks.io/">
                  <img
                    src={earthhack}
                    alt="sponsor2"
                    className="img-fluid px-5"
                  />
                </a>
              </div>
            </div> */}
            {/* !================UNCOMMENT AT 10:30 ================ */}
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
export default Hnc_problem_statement;

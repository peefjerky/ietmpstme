/* eslint-disable react/jsx-pascal-case */
import React /* , { useEffect } */ from "react";
/* import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"; */
/* import Modal from "./modalb4"; */
import "../../../css/hnc_team.scss";
import "boxicons";
import { Consumer } from "../../../context";
import Hnc_team_card from "./hnc_team_card";
/* import {useRef} from "react"; */

const Hnc_team = () => {
  const check = document.querySelector("#HnCScroller");
  const distance = 100;
  /* function scrollRight() {
   check.scrollBy({
      left: distance,
      behavior: "smooth",
    });
  }
  function scrollLeft() {
    check.scrollBy({
      left: -distance,
      behavior: "smooth",
    });
  } */
  return (
    <Consumer>
      {(value) => {
        const { hnc_team } = value;
        return (
          <div
            className="container-fluid my-5 justify-content-center"
            id="hncTeamContainer"
          >
            <div className="row">
              <div className="container-fluid my-2">
                <h1 className="text-center center-square">Team</h1>
              </div>

              {/* Put your code after this comment */}

              <div
                className="row mx-auto d-flex flex-nowrap overflow-auto scrollbar align-items-center"
                /*   className="row mx-auto align-items-center" */
                id="HnCScroller"
              >
                {hnc_team.slice(0, 5).map((hnc_team) => (
                  <div key={hnc_team.id} className="col-auto">
                    <Hnc_team_card
                      id={hnc_team.id}
                      name={hnc_team.name}
                      position={hnc_team.position}
                      imageUrl={hnc_team.imgUrl}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-2 text-center">
                <box-icon
                  name="left-arrow-alt"
                  color="#c3c4ff"
                  size="40px"
                  /* onClick={scrollLeft} */
                ></box-icon>
                <box-icon
                  name="right-arrow-alt"
                  color="#c3c4ff"
                  size="40px"
                  /*  onClick={scrollRight} */
                ></box-icon>
                <h5 className="scrollIcon" /* onClick={scrollRight} */>
                  SCROLL
                </h5>
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Hnc_team;

import React /* , { useEffect } */ from "react";
/* import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"; */
/* import Modal from "./modalb4"; */
import "../../../css/hnc_team.scss";
/* import AOS from "aos";
import "aos/dist/aos.css"; */
import "boxicons";
import { Consumer } from "../../../context";
import Hnc_team_card from "./hnc_team_card";
/* import {useRef} from "react"; */

const Hnc_team = () => {
  /* useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []); */

  return (
    <Consumer>
      {(value) => {
        const { hnc_team } = value;
        return (
          <div
            className="container-fluid my-5 justify-content-center"
            id="hncTeamContainer"
          >
            <div className="row ">
              <div className="container-fluid my-2">
                <h1 className="text-center center-square">Team</h1>
              </div>
              {/* Put your code after this comment */}
              <div className="row mx-auto d-flex flex-nowrap overflow-auto scrollbar align-items-center">
                {hnc_team.slice(0, 1).map((hnc_team) => (
                  <div
                    key={hnc_team.id}
                    className="col-12 col-md-4 col-lg-3 mx-auto"
                  >
                    <Hnc_team_card
                      id={hnc_team.id}
                      name={hnc_team.name}
                      position={hnc_team.position}
                      imageUrl={hnc_team.imgUrl}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Hnc_team;

import React from "react";
import "../../../css/hnc_team.scss";
export default function Hnc_team_card(props) {
  const { name, position, imageUrl } = props;
  /*   let eventModals = "#myModal" + `${id}`; */
  /* console.log(id); */
  return (
    <div className="container" id="hncTeamCardContainer">
      <div className="row gy-2">
        <div className="col-auto">
          <div className="card my-5 text-center">
            <img
              className="card-img-top"
              style={{ backgroundSize: "scale-down" }}
              src={imageUrl}
              alt={name}
            />
            <div className="card-body">
              <h4 className="card-title">{name}</h4>
              <p className="card-text my-3">{position}</p>
              {/*  <button
                className="btn btn-primary stretched-link"
                data-bs-toggle="modal"
                data-bs-target={eventModals}
              >
                More <i className="fa fa-angle-right"></i>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

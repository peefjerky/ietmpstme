import React from "react";
import "../css/eventcard.scss";
export default function EventCard(props) {
  const { id, title, excerpt, imageUrl, backgroundcolor } = props;
  let eventModals = "#myModal" + `${id}`;
  return (
    <div className="container" id="eventCard">
      <div className="row gy-2">
        <div className="col-auto">
          <div
            className="card my-5"
            style={{ backgroundColor: `${backgroundcolor}` }}
          >
            <img
              className="card-img-top"
              style={{ backgroundSize: "scale-down" }}
              src={imageUrl}
              alt={title}
            />
            <div className="card-body">
              <h4 className="card-title">{title}</h4>
              <p className="card-text">{excerpt}</p>
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

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
/* import Modal from "./modalb4"; */
import "../css/events.scss";
// import AOS from "aos";
// import "aos/dist/aos.css";
import "boxicons";
import "./tinglejs.js";
import { Consumer } from "../context";
import EventCard from "./eventCard";
/* import {useRef} from "react"; */

const Event = () => {
  // AOS.refresh({ useClassNames: true,once: false, });

  /*   const testDivRef = useRef(null);

  function testComp(){
    const scrollToElement = () => testDivRef.current.scrollIntoView();
  } */

  return (
    <Consumer>
      {(value) => {
        const { iet_events } = value;
        return (
          <div
            className="container-fluid my-5 justify-content-center"
            id="eventContainer" /* ref={testDivRef} */
          >
            <div className="row">
              <div className="container-fluid my-2">
                <h3 className="text-center center-square">Events</h3>
              </div>
              {/* Put your code after this comment */}
              <div className="row mx-auto">
                {iet_events.map((ietevents) => (
                  <div key={ietevents.id} className="col-12 col-md-4 col-lg-3">
                    <EventCard
                      id={ietevents.id}
                      title={ietevents.title}
                      excerpt={ietevents.excerpt}
                      imageUrl={ietevents.imageUrl}
                      backgroundcolor={ietevents.backgroundcolor}
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

export default Event;

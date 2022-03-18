import React, { useState, useEffect, useRef } from "react";
import "../../../css/hnc_submission.scss";
import guidePDF from "../../../Assets/PDF/HnCGuide.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Hnc_submission = () => {
  const [numPages, setNumPages] = useState(null);
  const [width, setWidth] = useState();
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const myRef = useRef();
  const getSize = () => {
    const newWidth = myRef.current.clientWidth;
    setWidth(newWidth - 20);
    console.log(newWidth);
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
    <div className="container-fluid" id="hncSubmission">
      <div className="row mx-3 mx-sm-5 mx-md-5 mx-lg-5 px-0 px-lg-5 px-sm-5 px-md-5 align-items-center">
        {/* <div className="col-sm-12 col-lg-12 col-md-12 px-0 px-lg-5 px-sm-5 px-md-5">
          <h1 className="text-center">IMPORTANT INFORMATION</h1>
          <hr />
          <h3 className="mt-5">Themes</h3>
          <ul>
            <li>Finance</li>
            <li>Health</li>
            <li>Education</li>
            <li>Entertainment</li>
          </ul>
          <h3 className="mt-5">Judgement Criteria</h3>
          <ul>
            <li>Feasibility</li>
            <li>Utility/Applicability</li>
            <li>Design and UX</li>
            <li>Implementation (Functionality)</li>
          </ul>
          <h3 className="mt-5">Problem Statement</h3>
          <h4 className="mt-5">Education</h4>
          <ul>
            <li>
              How can we replace the human connection lost through social
              distancing?
            </li>
            <li>
              Create a progressive web app which can make virtual classes more
              interactive
            </li>
            <li>
              Build an AR/VR product which makes you feels you are working with
              people in person
            </li>
            <li>Create a badge generator / photobooth</li>
            <li>Apps that aid college students</li>
            <li>Attendance through facial recognition system</li>
          </ul>
          <h4 className="mt-5">Finance</h4>
          <ul>
            <li>A social networking platform for NFTs</li>
            <li>
              Build secure systems by using stronger encryption algorithms for
              online payments / transactions
            </li>
            <li>Using fraud detection systems for finances</li>
            <li>Personal financial assistant</li>
            <li>
              Build an application to educate children about financial planning
            </li>
          </ul>
          {}
          <h4 className="mt-5">Entertainment</h4>
          <ul>
            <li>
              Build a creative application by combining AI with music and art
            </li>
            <li>Build the most humorous hack</li>
            <li>Build a discord bot for fun and engaging discord activities</li>
            <li>
              Engage with folks from the community by building a Discord
              integration with an application that randomly selects individuals
              based on their interests and discord ids and allows conversation
            </li>
            <li>Build an engaging AR/VR/MR game</li>
            <li>
              Build a solution that provides the user with a unique
              entertainment experience through the use of technologies of your
              choice (AI/IoT)
            </li>
            <li>Create a hack that improves the mood of people</li>
          </ul>
          <h4 className="mt-5">Health</h4>
          <ul>
            <li>Smarter surveillance system in healthcare</li>
            <li>Virtual health assistant</li>
            <li>Improve medical and emergency communication</li>
            <li>AR/VR In hospitals</li>
            <li>
              Touchless experiences in hospitals with a system to meet people
              from wherever they are
            </li>
          </ul>
        </div> */}
        {/* <div className="col-lg-12 col-md-12 col-sm-12 my-5 px-0 px-lg-5 px-sm-5 px-md-5"> */}
        <div className="col-lg-12 col-md-12 col-sm-12 mb-5" ref={myRef}>
          <h1 className="mt-5 text-center">GUIDELINES</h1>
          <hr />
          <Document
            file={guidePDF}
            onLoadSuccess={onDocumentLoadSuccess}
            renderMode={"canvas"}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                /* width={width - 500} */
                /* width={Math.round(width / 1.35)} */
                width={width}
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
};
export default Hnc_submission;

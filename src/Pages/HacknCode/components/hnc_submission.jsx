import React, { useState, useEffect, useRef } from "react";
import "../../../css/hnc_submission.scss";
import ScaleLoader from "react-spinners/ScaleLoader";
import guidePDF from "../../../Assets/PDF/HnCGuide.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import img1 from "../../../Assets/Images/Guidelines/1.jpg";
import img2 from "../../../Assets/Images/Guidelines/2.jpg";
import img3 from "../../../Assets/Images/Guidelines/3.jpg";
import img4 from "../../../Assets/Images/Guidelines/4.jpg";

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
        <div className="col-sm-12 col-lg-12 col-md-12 px-0 px-lg-5 px-sm-5 px-md-5">
          <h1 className="text-center mt-5">IMPORTANT INFORMATION</h1>
          <hr />

          <h3 className="mt-5">Judgement Criteria</h3>
          <p>
            Judging for this challenge will be done asynchronously by a panel of
            judges from Earth Hacks. As part of your project submission, please
            include the following:
          </p>
          <ul>
            <li>
              Up to a 10-minute long presentation that presents your solution to
              the judges.
            </li>
            <li>
              Any other supplemental material that you would like to share with
              the judges.
            </li>
          </ul>
          <p>Make sure you do include the following too: </p>
          <ul>
            <li>
              The Link to your presentation (Google Slides/Canva etc)
            </li>
            <li>
              Link to your video(Google drive/YouTube etc)
            </li>
            <li>Link to your GitHub issue</li>
          </ul>
          <p>Judging will be based upon the following: </p>
          <ul>
            <li>Feasibility</li>
            <li>Utility/Application</li>
            <li>Design and UX</li>
            <li>Implementation (Functionality)</li>
          </ul>
          <p>And Final Submission to be done on <a href="https://forms.gle/2o9V584M3wZ2bhRR6">Google forms</a></p>

          <h1 className="mt-5 text-center">SUBMISSION GUIDELINES</h1>
          <hr />
          <h3 className="mt-5">Steps to follow:</h3>
          <ol>
            <li>
              During the hackathon, work on your project and update the code on
              a GitHub repository (preferred), and make it public, either
              through the GitHub Repository, a zip file on cloud storage,
              anywhere: as long as it is accessible by the judges.
              <p>
                <b>
                  Please remember to make your GitHub repository public before
                  sharing it with us.
                </b>
              </p>
              <img
                src={img1}
                alt="First Guideline"
                className="img-fluid my-5 rounded"
              />
            </li>
            <li>
              Make sure that the following are taken into consideration before
              submitting
              <b> (failure to do so will result in disqualification)</b>:
              <ul>
                <li>Make sure you have your code link ready.</li>
                <li>
                  You should be ready with your PPT or Document of your project.
                </li>
                <li>
                  Demo Video for the project-
                  <ul>
                    <li>Tell us about your project</li>
                    <li>Demo of your project</li>
                    <li>Video must be in English</li>
                    <li>File name should be TeamName_HnC</li>
                  </ul>
                </li>
                <li>
                  Demo Link (optional) - Hosted / Live link of the prototype
                </li>
              </ul>
            </li>
            <li>
              The submission for the project has to be made through a GitHub
              issue that needs to be made on this:&nbsp;&nbsp;
              <b>
                <a href="https://github.com/IETmpstme/HacknCode-5.0-Submissions">
                  https://github.com/IETmpstme/HacknCode-5.0-Submissions
                </a>
              </b>
              <img
                src={img2}
                alt="Second Guideline"
                className="img-fluid my-5 rounded"
              />
            </li>
            <li>
              Make sure you read the
              <b>
                {" "}
                <u>Code of Conduct:</u>
                <a href=" https://github.com/IETmpstme/HacknCode-5.0-Submissions/blob/main/coc.md">
                  {" "}
                  &nbsp;
                  <br />
                  https://github.com/IETmpstme/HacknCode-5.0-Submissions/blob/main/coc.md
                </a>
              </b>
            </li>
            <li>
              Click on the Issues tab and click on New Issue, to create a
              submission issue for your hackathon project. <br />
              Link: &nbsp;&nbsp;
              <b>
                <a href=" https://github.com/IETmpstme/HacknCode-5.0-Submissions/issues/new/choose">
                  https://github.com/IETmpstme/HacknCode-5.0-Submissions/issues/new/choose
                </a>
              </b>
              <img
                src={img3}
                alt="Third Guideline"
                className="img-fluid my-5 rounded"
              />
            </li>

            <li>
              Click on the Get started button and you will be able to see the
              Issue template to be followed to submit your hackathon project
              details.
            </li>
            <img
              src={img4}
              alt="Fourth Guideline"
              className="img-fluid my-5 rounded"
            />

            <li>
              <p>
                Make sure to follow the template and complete it. Once
                completed, submit the issue.
              </p>
              <p>
                While a team can submit multiple projects, each project must
                only be submitted once.
                <b>
                  If there are multiple submissions for the same project, we
                  will consider the last one.
                </b>
              </p>

              <p>
                Also note that no matter the number of submissions, one team can
                only win one set of prizes.
              </p>
            </li>
            <li>
              <p>
                {/* about google form submmisions */}
                And finally, you can submit your project through the Google Forms link provided here: &nbsp;&nbsp;
                <a href="https://forms.gle/2o9V584M3wZ2bhRR6">https://forms.gle/2o9V584M3wZ2bhRR6</a>
              </p>
            </li>
          </ol>
        </div>
        {/* <div className="col-lg-12 col-md-12 col-sm-12 my-5 px-0 px-lg-5 px-sm-5 px-md-5"> */}
        <div className="col-lg-12 col-md-12 col-sm-12 mb-5" ref={myRef}>
          <h1 className="mt-5 text-center">GUIDELINES</h1>
          <hr />
          <Document
            file={guidePDF}
            className="text-center"
            onLoadSuccess={onDocumentLoadSuccess}
            renderMode={"canvas"}
            loading={
              <ScaleLoader
                color={"#57ffb9"}
                loading={true}
                height={50}
                width={4}
                margin={2}
              />
            }
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
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

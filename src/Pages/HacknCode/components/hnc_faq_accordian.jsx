import React from "react";
import "../../../css/hnc_faq.scss";
const Hnc_faq_accordian = (props) => {
  const { id, question, answer } = props;
  let accordianHeading = `panelStayOpen-heading${id}`;
  let accordianDataBsTarget = `#panelsStayOpen-collapse${id}`;
  let accordianAriaControls = `panelsStayOpen-collapse${id}`;
  return (
    <div className="col-lg-12 col-12 mx-auto co-md-12 mt-3 align-items-center">
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id={accordianHeading}>
            <div
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={accordianDataBsTarget}
              aria-expanded="true"
              aria-controls={accordianAriaControls}
            >
              {question}
            </div>
          </h2>
          <div
            id={accordianAriaControls}
            className="accordion-collapse collapse hide"
            aria-labelledby={accordianAriaControls}
          >
            <p className="accordion-body">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hnc_faq_accordian;

import React, { useEffect } from "react";
import "../../../css/hnc_faq.scss";
import Hnc_faq_accordian from "./hnc_faq_accordian";
import { Consumer } from "../../../context.js";
import AOS from "aos";
import "aos/dist/aos.css";
const Hnc_faq = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Consumer>
      {(value) => {
        const { hnc_faqs } = value;
        return (
          <div className="container-fluid my-5 align-items-center" id="hncFaq">
            <div className="row mx-sm-2 mx-lg-5 mx-md-5">
              <h1 className="pb-3 text-center">FAQs</h1>
              <div
                className="col-sm-12 col-md-6 col-lg-6"
                data-aos="slide-right"
              >
                {hnc_faqs.slice(0, 4).map((hncfaqs) => (
                  <div key={hncfaqs.id} className="align-items-center ">
                    <Hnc_faq_accordian
                      id={hncfaqs.id}
                      question={hncfaqs.question}
                      answer={hncfaqs.answer}
                    />
                  </div>
                ))}
              </div>
              <div
                className="col-sm-12 col-md-6 col-lg-6"
                data-aos="slide-left"
              >
                {hnc_faqs.slice(4, 8).map((hncfaqs) => (
                  <div key={hncfaqs.id} className="align-items-center ">
                    <Hnc_faq_accordian
                      id={hncfaqs.id}
                      question={hncfaqs.question}
                      answer={hncfaqs.answer}
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

export default Hnc_faq;

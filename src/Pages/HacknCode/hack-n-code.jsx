import React, { useEffect, useState, useLayoutEffect } from "react";
import Hnc_header from "./components/hnc_header";
import Hnc_prize from "./components/hnc-prize";
import Hnc_sponsors from "./components/hnc_sponsors";
import Hnc_faq from "./components/hnc_faq";
import Hnc_information from "./components/hnc_information";
import { motion } from "framer-motion";
import Hnc_team from "./components/hnc_team";
import Hnc_gallery from "./components/hnc_gallery";
import Hnc_problem_statement from "./components/hnc_problem_statment";

const Hack_n_code = () => {
  /* console.log("HnC"); */
  const [questionShow, setQuestionShow] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setQuestionShow(true);
    }, 3000);
  }, []);

  const showProblemStatement = () => {
    setQuestionShow(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <Hnc_header show={showProblemStatement} />
      <Hnc_prize />
      <Hnc_information />
      <Hnc_gallery />
      <Hnc_team />
      <Hnc_sponsors />
      <Hnc_faq />
      <Hnc_problem_statement
        show={questionShow}
        onHide={() => setQuestionShow(false)}
      />
    </motion.div>
  );
};

export default Hack_n_code;

import React from "react";
import { useLocation } from "react-router-dom";
import Hnc_header from "./components/hnc_header";
import Hnc_prize from "./components/hnc-prize";
import Hnc_sponsors from "./components/hnc_sponsors";
import Hnc_faq from "./components/hnc_faq";
import Hnc_information from "./components/hnc_information";
const Hack_n_code = () => {
  const location = useLocation();
  console.log(location.pathname); // path is /contact

  return (
    <div>
      <Hnc_header />
      <Hnc_prize />
      <Hnc_information />
      <Hnc_sponsors />
      <Hnc_faq />
    </div>
  );
};

export default Hack_n_code;

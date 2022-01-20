import React from "react";
import Hnc_header from "./components/hnc_header";
import Hnc_prize from "./components/hnc-prize";
import Hnc_sponsors from "./components/hnc_sponsors";
import Hnc_faq from "./components/hnc_faq";
import Hnc_information from "./components/hnc_information";
import { motion } from "framer-motion/dist/framer-motion";
const Hack_n_code = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Hnc_header />
      <Hnc_prize />
      <Hnc_information />
      <Hnc_sponsors />
      <Hnc_faq />
    </motion.div>
  );
};

export default Hack_n_code;

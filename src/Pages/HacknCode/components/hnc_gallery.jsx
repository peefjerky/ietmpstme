import React from "react";
/* import { motion, AnimatePresence } from "framer-motion/dist/framer-motion"; */
/* import { wrap } from "popmotion"; */
import { Consumer } from "../../../context";
import "../../../css/hnc_gallery.scss";

const Hnc_gallery = () => {
  return (
    <Consumer>
      {(value) => {
        const { hnc_images } = value;
        /* console.log(hnc_images[0].imgUrl); */
        return (
          <div className="container-fluid my-5" id="hnc_Gallery">
            <div className="row mx-5">
              <div className="col-lg-12 col-md-12 col-sm-12"></div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Hnc_gallery;

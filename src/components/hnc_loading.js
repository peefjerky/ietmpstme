import React from "react";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";
import "../css/hnc_loading.scss";
/* import Text from "../Assets/Images/HnCAtropos/Text.png"; */
const Hnc_Loading = () => {
  const override = css`
    display: block;
    margin: 0 auto;
  `;
  return (
    <div className="container-fluid" id="loadingContainer">
      <div
        className="row align-items-center position-relative mx-auto text-center"
        style={{ height: "50vh" }}
      >
        <div
          className="col-lg-12 col-md-12 col-sm-12 my-5 mx-auto"
          id="styledLoadingContainer"
          /* style={{ height: "100vh" }} */
        >
          <ScaleLoader
            color={"#57ffb9"}
            loading={true}
            css={override}
            height={100}
            width={4}
            margin={2}
          />
        </div>
      </div>
    </div>
  );
};

export default Hnc_Loading;

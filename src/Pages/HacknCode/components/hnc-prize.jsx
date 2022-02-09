import React /* , { useEffect } */ from "react";
/* import CountUp from "react-countup"; */
import "../../../css/hnc-prize.scss";
/* import AOS from "aos";
import "aos/dist/aos.css"; */

const Hnc_prize = () => {
  /* useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []); */

  return (
    <div className="container-fluid my-5" id="hncPrizeContainer">
      <div className="row mx-lg-5 mx-md-5 mx-sm-3 mx-3 mb-5 align-items-center">
        <div className="col-lg-6 col-sm-12 col-md-6 align-items-center mb-5 text-center">
          <div className="countupnumber">
            {/*  <CountUp
              start={}
              end={0}
              duration={4}
              delay={1}
              separator=" "
              prefix="TBA"
              suffix=""
              useEasing
            ></CountUp> */}
            TBA
          </div>
          <div className="badge mb-4 text-start">PRIZE POOL</div>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6 align-items-center text-center text-sm-center text-md-start text-lg-start">
          <h1 className="pb-3">
            Win exciting <span>prizes!</span>
          </h1>
          <p className="my-1">
            Participate and get a chance to win exciting
            <strong> cash prizes</strong> and maybe even amazing goodies from
            our sponsors.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hnc_prize;

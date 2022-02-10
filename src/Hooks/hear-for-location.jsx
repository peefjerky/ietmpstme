import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const LocationChange = (props) => {
  const { pathname } = useLocation();

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };

  useEffect(() => {
    ScrollToTop();
    window.addEventListener("load", ScrollToTop);
    return () => {
      window.removeEventListener("load", ScrollToTop);
    };
  }, []);

  useLayoutEffect(() => {
    if (pathname === "/hackncode" || pathname === "/hackncode/submission") {
      props.apply();
    } else {
      props.revert();
    }
  }, [
    pathname,
    props,
    props?.changes?.defGlass, // eslint-disable-line react-hooks/exhaustive-deps
    props?.changes?.defNav, // eslint-disable-line react-hooks/exhaustive-deps
    props?.changes?.defBoxIcon, // eslint-disable-line react-hooks/exhaustive-deps
    props?.changes?.defNavIcon, // eslint-disable-line react-hooks/exhaustive-deps
    props?.changes?.defGradient, // eslint-disable-line react-hooks/exhaustive-deps
    props?.changes?.defFooter, // eslint-disable-line react-hooks/exhaustive-deps
    props?.changes?.defBg, // eslint-disable-line react-hooks/exhaustive-deps
    props?.changes?.defCircle1, // eslint-disable-line react-hooks/exhaustive-deps
    props?.changes?.defCircle2, // eslint-disable-line react-hooks/exhaustive-deps
    props?.changes?.defCircle3, // eslint-disable-line react-hooks/exhaustive-deps
    props?.changes?.defNavLink1, // eslint-disable-line react-hooks/exhaustive-deps
    props?.changes?.defNavLink2, // eslint-disable-line react-hooks/exhaustive-deps
    /* props?.changes?.defNavLinkss.link11, //eslinke-disable-line react-hooks/exhaustive-deps */
  ]);

  return null;
};
export default LocationChange;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const LocationChange = (props) => {
  const { pathname } = useLocation();
  /* console.log(props.changes.defNavLinkss.link11); */
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };

  /*  if (pathname === "/hackncode") {
    refreshPage();
  } else {
    window.location.reload(false);
  } */
  useEffect(() => {
    ScrollToTop();
    window.addEventListener("load", ScrollToTop);
    return () => {
      window.removeEventListener("load", ScrollToTop);
    };
  }, []);

  useEffect(() => {
    if (pathname === "/hackncode") {
      props.apply();
      console.log("hear-for-location");
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
  /*   useEffect(() => {
    const refreshPage = () => {
      window.location.reload(true);
    };
    window.addEventListener("load", refreshPage);
    return () => {
      window.removeEventListener("load", refreshPage);
    };
  }, []); */

  return null;
};
/*  props?.changes?.defGlass,
          props?.changes?.defNav,
          props?.changes?.defBoxIcon,
          props?.changes?.defGradient,
          props?.changes?.defFooter,
          props?.changes?.defBg,
          props?.changes?.defCircle1,
          props?.changes?.defCircle2,
          props?.changes?.defCircle3,
          props?.changes?.defNavLink1,
          props?.changes?.defNavLink2, */
export default LocationChange;


import { useEffect } from "react";
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
  });
  useEffect(() => {
    if (pathname === "/hackncode") {
      props.apply();
    } else {
      props.revert();
    }
  }, [pathname, props]);

  return null;
};

export default LocationChange;

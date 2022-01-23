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
    /*   console.log(pathname + "This is being rendered"); */
    ScrollToTop();
    if (pathname === "/hackncode") {
      props.sexyfunctions();
    } else {
      props.revert();
    }
    window.addEventListener("load", ScrollToTop);
    return () => {
      window.removeEventListener("load", ScrollToTop);
    };
  }, [pathname, props]);

  return null;
};

export default LocationChange;

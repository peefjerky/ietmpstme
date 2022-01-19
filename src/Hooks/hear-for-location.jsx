import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const LocationChange = (props) => {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  if (location.pathname === "/hackncode") {
    props.sexyfunctions();
  } else {
    props.revert();
  }
  return null;
};

export default LocationChange;

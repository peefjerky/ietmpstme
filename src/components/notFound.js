import React from "react";
import { useLocation } from "react-router-dom";

export default function NotFound() {
  const loaction = useLocation();
  console.log(loaction.pathname);
  return (
    <div className="container text-center py-5 my-5">
      <div className="display-4 pt-5 mt-5">
        <span className="text-danger">Oops! </span>
        It's a 404!
        <div className="lead">Sorry, can't find what you're looking for.</div>
      </div>
    </div>
  );
}

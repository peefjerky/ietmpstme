import React from "react";
import Header from "./header.js";
import About from "./about";
import Event from "./event.js";

export default function HomePage() {
  return (
    <div>
      <Header />
      <About />
      <Event />
    </div>
  );
}

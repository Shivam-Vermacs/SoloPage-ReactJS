import React from "react";
import ReactImage from "../assets/react.svg";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <img src={ReactImage} className="react-logo" alt="react logo" />
        <span className="reactfacts-text">ReactFacts</span>
      </nav>
    </header>
  );
}

import React from "react";
import "././Header.css";
import Upper from "./Upper/Upper";
import Hero from "./Hero/Hero";

export default function Header() {
  return (
    <header>
      <div className="headerContainer">
        <Upper />
        <Hero />
      </div>
    </header>
  );
}

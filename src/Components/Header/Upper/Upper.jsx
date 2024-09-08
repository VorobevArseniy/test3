import React from "react";
import "./././Upper.css";

export default function Upper() {
  return (
    <div>
      <div className="upperContainer">
        <div className="logo upperItem">
          {" "}
          <img src="assets\logo.png" />{" "}
        </div>
        <div className="textBlock">
          <div className="blockItem">Home</div>
          <div className="blockItem">Product</div>
          <div className="blockItem">Faq</div>
          <div className="blockItem">Contact</div>
        </div>
      </div>
    </div>
  );
}

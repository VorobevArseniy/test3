import React from "react";
import "./././Upper.css";

const links = [
  { id: 1, text: "Home", link: "#" },
  { id: 2, text: "Product", link: "#" },
  { id: 3, text: "Faq", link: "#" },
  { id: 4, text: "Contact", link: "#" },
];

export default function Upper() {
  return (
    <div>
      <div className="upperContainer">
        <div className="logo upperItem">
          {" "}
          <img src="src\assets\logo.png" />{" "}
        </div>
        <div className="textBlock">
          {/* <div className="blockItem">Home</div>
          <div className="blockItem">Product</div>
          <div className="blockItem">Faq</div>
          <div className="blockItem">Contact</div> */}
          <ul>
            {links.map((links) => (
              <li key={links.id} className="blockItem">
                <a href={links.link}>{links.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

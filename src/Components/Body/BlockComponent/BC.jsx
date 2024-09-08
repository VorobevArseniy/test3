import React from "react";
import "./././BC.css";

export default function BC(props) {
  // function func() {
  //   return {
  //     order: 1,
  //   };
  // }

  return (
    <div>
      <div className="BCcontainer">
        <div className="BCimgContainer">
          <img src={props.src} alt="" />
        </div>
        <div
          style={props.isMirrored ? { order: -1 } : undefined}
          className="BCtextContainer"
        >
          <h3>{props.title}</h3>
          <h2>{props.text}</h2>
          <h4>{props.description}</h4>
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  );
}

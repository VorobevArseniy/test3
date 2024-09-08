import React from "react";
import "./././Hero.css";

export default function Hero() {
  return (
    <>
      <div className="heroContainer">
        {/* <img src="assets\hero.png" alt="" /> */}
        <div className="heroImg">
          <div className="textContent">
            <div className="textContainer">
              <h3>Food app</h3>
              <h1>Why stay hungry when</h1>
              <h1>you can order form Bella Onojie</h1>
              <p>Download the bella onoje's food app now on</p>
            </div>
          </div>
          <div className="buttonGroup">
            <button className="appButton">Playstore</button>
            <button>AppStore</button>
          </div>
        </div>
      </div>
    </>
  );
}

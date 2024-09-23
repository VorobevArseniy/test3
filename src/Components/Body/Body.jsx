import React, { useEffect, useRef, useState } from "react";
import "././Body.css";
import { array } from "././data";
import Block1 from "./Block1/Block1";
import BC from "./BlockComponent/BC.jsx";
import Goida from "./Goida/Goida.jsx";

export default function Body() {
  console.log(array);
  return (
    <body>
      <Block1 />
      {/* <BC
        src={array[0].src}
        title={array[0].title}
        text={array[0].text}
        description={array[0].description}
        isMirrored={array[0].isMirrored}
      /> */}

      {array.map((data) => (
        <BC key={data.text} {...data} />
      ))}

      <Goida></Goida>
    </body>
  );
}

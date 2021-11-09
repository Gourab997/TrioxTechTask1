import React from "react";
import { useState, useEffect } from "react";

import "./Box.css";

const Box = () => {
  //blueBerry
  const [blueBerryTop, setBlueBerryTop] = useState(-22);
  const [blueBerryLeft, setBlueBerryLeft] = useState(90.2);
  const [blueBerryRight, setBlueBerryRight] = useState();
  const [blueBerryBottom, setBlueBerryBottom] = useState();

  //police
  const [policeBoxTop, setPoliceBoxTop] = useState(36);
  const [policeBoxLeft, setPoliceBoxLeft] = useState();
  const [policeBoxRight, setPoliceRight] = useState();
  const [policeBoxBottom, setPoliceBottom] = useState();
  //oxford
  const [oxfordBlueTop, setOxfordBlueTop] = useState(14.4);
  const [oxfordBlueLeft, setOxfordBlueLeft] = useState(90.2);
  const [oxfordBlueRight, setOxfordRight] = useState(0);
  const [oxfordBlueBottom, setOxfordBottom] = useState(0);
  //black
  const [blackBoxTop, setblackBoxTop] = useState(0);
  const [blackBoxLeft, setblackBoxLeft] = useState(0);
  const [blackBoxRight, setblackBoxRight] = useState(0);
  const [blackBoxBottom, setblackBoxBottom] = useState(0);

  const handleShuffle = () => {
    setBlueBerryTop(Math.floor(Math.random() * 100));
    setBlueBerryLeft(Math.floor(Math.random() * 100));
    setBlueBerryRight(Math.floor(Math.random() * 100));
    setBlueBerryBottom(Math.floor(Math.random() * 100));
    setPoliceBoxTop(Math.floor(Math.random() * 100));
    setPoliceBoxLeft(Math.floor(Math.random() * 100));
    setPoliceRight(Math.floor(Math.random() * 100));
    setPoliceBottom(Math.floor(Math.random() * 100));
    setOxfordBlueTop(Math.floor(Math.random() * 100));
    setOxfordBlueLeft(Math.floor(Math.random() * 100));
    setOxfordRight(Math.floor(Math.random() * 100));
    setOxfordBottom(Math.floor(Math.random() * 100));
    setblackBoxTop(Math.floor(Math.random() * 100));
    setblackBoxLeft(Math.floor(Math.random() * 100));
    setblackBoxRight(Math.floor(Math.random() * 100));
    setblackBoxBottom(Math.floor(Math.random() * 100));
  };

  const blackBox = {
    position: "relative",
    top: `${blackBoxTop}%`,
    left: `${blackBoxLeft}%`,
    right: `${blackBoxRight}%`,
    bottom: `${blackBoxBottom}%`,
  };

  const blueBerry = {
    position: "relative",
    top: `${blueBerryTop}%`,
    left: `${blueBerryLeft}%`,
    right: `${blueBerryRight}%`,
    bottom: `${blueBerryBottom}%`,
  };
  const policeBox = {
    position: "relative",
    top: `${policeBoxTop}%`,
    left: `${policeBoxLeft}%`,
    right: `${policeBoxRight}%`,
    bottom: `${policeBoxBottom}%`,
  };
  const oxfordBlue = {
    position: "relative",
    top: `${oxfordBlueTop}%`,
    left: `${oxfordBlueLeft}%`,
    right: `${oxfordBlueRight}%`,
    bottom: `${oxfordBlueBottom}%`,
  };

  return (
    <div>
      <div className='box'>
        <div style={blackBox} className='blackBox'>
          <h2>15</h2>
        </div>
        <div style={blueBerry} className='blueBerry'>
          <h2>25</h2>
        </div>
        <div style={policeBox} className='policeBox'>
          <h2>18</h2>
        </div>
        <div style={oxfordBlue} className='oxfordBlue'>
          <h2>30</h2>
        </div>
      </div>
      <button onClick={() => handleShuffle()}> Shuffle</button>
    </div>
  );
};

export default Box;

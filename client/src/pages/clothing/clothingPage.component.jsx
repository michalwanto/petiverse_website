import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const ClothingPage = () => {
  useEffect(() => {
    Draggable.create(".picture");
  });
  return (
    <div>
      <h1>ClothingPage</h1>
      <img
        className="picture"
        src={require("./png-pictures/dog-pict.png")}
      ></img>
      <img className="picture" src={require("./png-pictures/cloth1.png")}></img>
      <img className="picture" src={require("./png-pictures/cloth2.png")}></img>
    </div>
  );
};

export default ClothingPage;

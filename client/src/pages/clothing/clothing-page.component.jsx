import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import FileLoader from "../../components/file-loader/fileLoader.js";

import "./clothing-page.styles.scss";

gsap.registerPlugin(Draggable);

const ClothingPage = () => {
  useEffect(() => {
    Draggable.create(".picture");
  });
  return (
    <div>
      <h1>ClothingPage</h1>

      <img className="picture" src={require("./png-pictures/cloth1.png")}></img>
      <img className="picture" src={require("./png-pictures/cloth2.png")}></img>
      <FileLoader />
    </div>
  );
};

export default ClothingPage;

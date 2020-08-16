import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import FileLoader from "../../components/file-loader/fileLoader.js";

import "./clothing-page.styles.scss";

gsap.registerPlugin(Draggable);

const ClothingPage = () => {
  return (
    <div>
      <h1>ClothingPage</h1>

      <FileLoader />
    </div>
  );
};

export default ClothingPage;

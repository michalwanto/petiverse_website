import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import FileLoader from "../../components/file-loader/fileLoader.js";

gsap.registerPlugin(Draggable);

const WebGlPage = () => {
  return (
    <div>
      <h1>WebGlPage</h1>
      <FileLoader />
    </div>
  );
};

export default WebGlPage;

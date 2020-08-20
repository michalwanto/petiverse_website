import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

import "./products-page.styles.css";
import { urlencoded } from "body-parser";

gsap.registerPlugin(Draggable);

const ProductsPage = () => {
  useEffect(() => {
    Draggable.create(".picture");
  });
  return (
    <div>
      <h1>FUR AWAY</h1>
      <h2>Ultimate Portable Pet Fur Roller</h2>
      <img
        className="fur"
        src={
          "https://firebasestorage.googleapis.com/v0/b/petiverse-f7288.appspot.com/o/shop%2Fcollection%2Fcleaning%20%2Frollers%2Fdisplays%2Ffur.png?alt=media&token=c003b03b-7788-400c-a555-b8921cf4a7ae"
        }
      />
      <img
        className="front_pink_big"
        src={
          "https://firebasestorage.googleapis.com/v0/b/petiverse-f7288.appspot.com/o/shop%2Fcollection%2Fcleaning%20%2Frollers%2Fdisplays%2Ffront_pink_big.png?alt=media&token=cad78d66-e4cf-4adf-a106-4bfa9205555a"
        }
      />
    </div>
  );
};

export default ProductsPage;

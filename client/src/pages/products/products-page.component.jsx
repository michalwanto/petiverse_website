import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const ProductsPage = () => {
  useEffect(() => {
    Draggable.create(".picture");
  });
  return;
};

export default ProductsPage;

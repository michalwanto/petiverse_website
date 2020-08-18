import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

import { ProductsPageContainer, ProductImage } from "./products-page.styles";

gsap.registerPlugin(Draggable);

const ProductsPage = () => {
  useEffect(() => {
    Draggable.create(".picture");
  });
  return <ProductsPageContainer></ProductsPageContainer>;
};

export default ProductsPage;

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

import { ProductsPageContainer, ProductImage } from "./products-page.styles";

gsap.registerPlugin(Draggable);

const ProductsPage = () => {
  useEffect(() => {
    Draggable.create(".picture");
  });
  return (
    <ProductsPageContainer>
      <h1>Products Page</h1>
      <ProductImage
        className=" dog picture"
        src={require("./png-pictures/dog1.png")}
      ></ProductImage>
      <ProductImage
        className="picture"
        src={require("./png-pictures/dogAndCat.png")}
      ></ProductImage>
      <ProductImage
        className="picture"
        src={require("./png-pictures/foodBowl.png")}
      ></ProductImage>
      <ProductImage
        className="picture"
        src={require("./png-pictures/sofa1.png")}
      ></ProductImage>
      <ProductImage
        className="picture"
        src={require("./png-pictures/table1.png")}
      ></ProductImage>
    </ProductsPageContainer>
  );
};

export default ProductsPage;

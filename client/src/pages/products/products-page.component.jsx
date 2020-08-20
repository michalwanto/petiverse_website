import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

import "./products-page.styles.css";
import { urlencoded } from "body-parser";

import backButton from "../../assets/decor/back.svg";
import addToCart from "../../assets/decor/addtocart.svg";
import inStock from "../../assets/decor/instock.svg";
import likeIcon from "../../assets/decor/likeicon.svg";
import paymentDesc from "../../assets/decor/paymentdesc.svg";
import addToCartLong from "../../assets/decor/addtocartlong.svg";

import dog from "../../assets/decor/dog.svg";
import dragme from "../../assets/decor/dragme.svg";
import ellipseblue from "../../assets/decor/ellipseblue.svg";
import ellipsepink from "../../assets/decor/ellipsepink.svg";
import pawprint from "../../assets/decor/pawprint.svg";
import sayings from "../../assets/decor/sayings.svg";

gsap.registerPlugin(Draggable);

const ProductsPage = () => {
  useEffect(() => {
    Draggable.create(".draggable");
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
      <img
        className="highlights_top_blue"
        src={
          "https://firebasestorage.googleapis.com/v0/b/petiverse-f7288.appspot.com/o/shop%2Fcollection%2Fcleaning%20%2Frollers%2Fhighlights%2Fhighlights_top_blue.png?alt=media&token=db4ce19a-8930-46fc-988a-c86d05cfc0fc"
        }
      />
      <img
        className="highlights_spin_pink"
        src={
          "https://firebasestorage.googleapis.com/v0/b/petiverse-f7288.appspot.com/o/shop%2Fcollection%2Fcleaning%20%2Frollers%2Fhighlights%2Fhighlights_spin_pink.png?alt=media&token=ca2b6ba2-480a-4594-83d7-480852ed20e1"
        }
      />
      <img
        className="highlights_pull_blue"
        src={
          "https://firebasestorage.googleapis.com/v0/b/petiverse-f7288.appspot.com/o/shop%2Fcollection%2Fcleaning%20%2Frollers%2Fhighlights%2Fhighlights_pull_blue.png?alt=media&token=437a3a84-758b-4b6b-a224-9afd0b9a59e3"
        }
      />

      <img
        className="desc1"
        src={
          "https://firebasestorage.googleapis.com/v0/b/petiverse-f7288.appspot.com/o/shop%2Fcollection%2Fcleaning%20%2Frollers%2Fdescriptions%2Fdescription1.svg?alt=media&token=dca1d268-8232-4072-8632-3267250318d8"
        }
      />
      <img
        className="desc2"
        src={
          "https://firebasestorage.googleapis.com/v0/b/petiverse-f7288.appspot.com/o/shop%2Fcollection%2Fcleaning%20%2Frollers%2Fdescriptions%2Fdescription2.svg?alt=media&token=13d264f4-4e02-476c-85b7-a03d7ede7262"
        }
      />
      <img
        className="sofa"
        src={
          "https://firebasestorage.googleapis.com/v0/b/petiverse-f7288.appspot.com/o/shop%2Fcollection%2Fcleaning%20%2Frollers%2Fdraggable%2Fsofa.svg?alt=media&token=82d4e703-ccc7-48c1-9c60-7b756704d9f0"
        }
      />
      <img
        className="dragrollblue draggable"
        src={
          "https://firebasestorage.googleapis.com/v0/b/petiverse-f7288.appspot.com/o/shop%2Fcollection%2Fcleaning%20%2Frollers%2Fdraggable%2Frollerblue.svg?alt=media&token=1dfbfdcc-6b74-4420-aac2-9a80a515dd09"
        }
      />
      <img
        className="dragrollpink draggable"
        src={
          "https://firebasestorage.googleapis.com/v0/b/petiverse-f7288.appspot.com/o/shop%2Fcollection%2Fcleaning%20%2Frollers%2Fdraggable%2Frollerpink.svg?alt=media&token=c8f5d4c6-34f8-40cb-91e1-1dee8d1bc984"
        }
      />

      <img className="backButton" src={backButton} />
      <img className="addToCart" src={addToCart} />
      <img className="inStock" src={inStock} />
      <img className="likeIcon" src={likeIcon} />
      <img className="paymentDesc" src={paymentDesc} />
      <img className="addToCartLong" src={addToCartLong} />

      <img className="dog" src={dog} />
      <img className="dragme" src={dragme} />
      <img className="ellipseblue" src={ellipseblue} />
      <img className="ellipsepink" src={ellipsepink} />
      <img className="pawprint" src={pawprint} />
      <img className="sayings " src={sayings} />
    </div>
  );
};

export default ProductsPage;

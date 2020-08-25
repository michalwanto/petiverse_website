import React from "react";
import "./checkout.component.styles.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import tickIcon from "../../assets/decor/tickIcon.svg";
import petiversePackaging from "../../assets/decor/petiversePackaging.svg";
import pawPrint from "../../assets/decor/pawprint.svg";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import { CheckoutItemContainer, PawPrint } from "./checkout.styles.jsx";

const CheckoutPage = (cartItems, cartTotal) => {
  return (
    <div className="CheckoutPageContainer">
      <h1 className="confirmTitle">ORDER CONFIRMATION</h1>
      <h2 className="confirmSubtitle">
        We also sent you an email of your receipt
      </h2>
      <h4 className="referenceNumberTitle">REFERENCE NUMBER</h4>
      <h3 className="referenceNumber">0984923732</h3>
      <h5 className="referenceAddress">
        Larry Denise Kingdom of Narnia, Beyond The Wardrobe, CSL 1234 098754321
        iamlarrydeniseyeah@gmail.com
      </h5>
      <button className="continueShoppingBtn">CONTINUE SHOPPING</button>
      <img className="confirmTickIcon" src={tickIcon}></img>
      <div className="PaidOrdersContainer">
        {cartItems.cartItems.map((item) => (
          <CheckoutItemContainer>
            <img className="itemImg" src={item.imageUrl}></img>
          </CheckoutItemContainer>
        ))}
      </div>
      <img className="petiversePackaging" src={petiversePackaging}></img>
      <PawPrint></PawPrint>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);

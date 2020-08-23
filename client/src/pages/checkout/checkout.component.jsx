import React from "react";
import "./checkout.component.styles.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import tickIcon from "../../assets/decor/tickIcon.svg";
import petiversePackage from "../../assets/decor/petiversePackage.svg";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

const CheckoutPage = (cartItems, cartTotal) => {
  return (
    <div className="CheckoutPageContainer">
      <h1 className="confirmTitle">ORDER CONFIRMATION</h1>
      <h2 className="confirmSubtitle">
        We also sent you an email of your receipt
      </h2>
      <img className="confirmTickIcon" src={tickIcon}></img>
      <div className="PaidOrdersContainer">
        {cartItems.cartItems.map((item) => (
          <img className="itemImg" src={item.imageUrl}></img>
        ))}
      </div>
      <img className="petiversePackage" src={petiversePackage}></img>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);

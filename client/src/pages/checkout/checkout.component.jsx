import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import CheckoutForm from "../../components/checkout-form/CheckoutForm";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
  CheckoutItemsSummary,
  PaymentDetailsEntry,
} from "./checkout.styles";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const CheckoutPage = ({ cartItems, total }) => {
  const stripePromise = loadStripe(
    "pk_test_51Fj8tREh1LbLp58TzJsVxn42WbhQkn5aZYYt0rtUJnMNoO0rYkMOE8Pq7wsFi4gswhmL7ljGLQvgjbzyVfLKuQmg00tNBg7hbg"
  );

  console.log(stripePromise);

  return (
    <CheckoutPageContainer>
      <CheckoutItemsSummary>
        <CheckoutHeaderContainer>
          <HeaderBlockContainer>
            <span>Product</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Description</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Quantity</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Price</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Remove</span>
          </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <TotalContainer>TOTAL: ${total}</TotalContainer>
        <WarningContainer>
          *Please use the following test credit card for payments*
          <br />
          4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </WarningContainer>
        <StripeCheckoutButton price={total} />
      </CheckoutItemsSummary>
      <PaymentDetailsEntry>
        <Elements stripe={stripePromise}>
          <CheckoutForm price={total} />
        </Elements>
      </PaymentDetailsEntry>
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);

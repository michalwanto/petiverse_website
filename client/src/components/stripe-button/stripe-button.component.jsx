import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { addCartToAdminStart } from "../../redux/cart/cart.actions";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Fj8tREh1LbLp58TzJsVxn42WbhQkn5aZYYt0rtUJnMNoO0rYkMOE8Pq7wsFi4gswhmL7ljGLQvgjbzyVfLKuQmg00tNBg7hbg";

  const onToken = (token) => {
    console.log("payment is succcesful");
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment Successful");
      })
      .catch((error) => {
        console.log("Payment Error: ", JSON.parse(error));
        alert(
          "There was an error with your payment. Please ensure that you use the rigth payment"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  addCartToAdminStart: ({ cartItems, token }) =>
    dispatch(addCartToAdminStart({ cartItems, token })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StripeCheckoutButton);

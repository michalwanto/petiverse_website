import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "@emotion/styled";
import axios from "axios";

import Row from "./prebuilt/Row";
import BillingDetailsFields from "./prebuilt/BillingDetailsFields";
import SubmitButton from "./prebuilt/SubmitButton";
import CheckoutError from "./prebuilt/CheckoutError";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CardElementContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;

  & .StripeElement {
    width: 100%;
    padding: 15px;
  }
`;

const CheckoutForm = ({ price, onSuccessfulCheckout, history }) => {
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState();
  const stripe = useStripe();
  const elements = useElements();

  const handleFormSubmit = async (ev) => {
    ev.preventDefault();

    const billingDetails = {
      name: ev.target.name.value,
      email: ev.target.email.value,
      address: {
        city: ev.target.city.value,
        line1: ev.target.address.value,
        state: ev.target.state.value,
        postal_code: ev.target.zip.value,
      },
    };

    setProcessingTo(true);

    const { data: clientSecret } = await axios({
      url: "/payment",
      method: "post",
      data: {
        amount: price * 100,
      },
    });

    const cardElement = elements.getElement(CardElement);

    const paymentMethodReq = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: billingDetails,
    });

    console.log(paymentMethodReq);

    const confirmedCardPayment = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethodReq.paymentMethod.id,
    });

    console.log(confirmedCardPayment);

    const loadSuccesPage = () => {
      history.push("/successPage");
    };
    loadSuccesPage();
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#fff",
        "::placeholder": {
          color: "#87bbfd",
        },
      },
      invalid: {
        color: "#FFC7EE",
        iconColor: "#FFC7EE",
      },
    },
    hidePostalCode: true,
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Row>
        <BillingDetailsFields />
      </Row>
      <Row>
        <CardElementContainer>
          <CardElement options={cardElementOptions} />
        </CardElementContainer>
      </Row>
      {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}
      <Row>
        <SubmitButton disabled={isProcessing}>
          {isProcessing ? "Processing..." : `Pay $${price}`}
        </SubmitButton>
      </Row>
    </form>
  );
};

export default withRouter(CheckoutForm);

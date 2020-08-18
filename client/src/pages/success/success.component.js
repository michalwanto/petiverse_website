import React from "react";
import styled from "@emotion/styled";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";

const Container = styled.div`
  width: 475px;
  height: 100%;
  margin: 30px auto 0 auto;
  text-align: center;
  color: black;
`;

const Title = styled.div`
  font-size: 58px;
`;

const Message = styled.div`
  margin-top: 40px;
`;

export default () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }, 100);
  });

  return (
    <div>
      <Container>
        <Confetti width={width} height={height} numberOfPieces={450} />
        <Title>congrats!</Title>
        <Message>Stripe has successfully processed your payment</Message>
      </Container>
    </div>
  );
};

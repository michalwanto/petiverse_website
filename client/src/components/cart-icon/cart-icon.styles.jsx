import styled from "styled-components";

import { ReactComponent as ShoppingIconSVG } from "../../assets/cart.svg";

export const CartContainer = styled.div`
  width: 45px;
  height: 45px;

  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  position: absolute;
  width: 29.85px;
  height: 29.15px;
  right: 63.16px;
  top: 38.18px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  width: 13px;
  height: 9px;
  right: 67.66px;
  top: 47.11px;

  font-family: TS Block;
  font-style: normal;
  font-weight: bold;
  font-size: 9px;
  line-height: 10px;

  color: #000000;
`;

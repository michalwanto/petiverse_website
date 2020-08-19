import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as ShoppingIconSVG } from "../../assets/shopping-bag.svg";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LinkContainer = styled(Link)`
  height: 100%;
  width: 70px;
`;

export const CartContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

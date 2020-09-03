import styled from "styled-components";
import { Link } from "react-router-dom";

export const HamburgerTitle = styled(Link)`
  font-family: TS Block;
  font-size: 15px;
  margin-left: 10px;
`;

export const ListItem = styled(Link)`
  cursor: pointer;
  margin: 10px;
`;

export const SubOptionsContainer = styled.div`
  margin-left: 35px;
  display: flex;
  flex-direction: column;
`;

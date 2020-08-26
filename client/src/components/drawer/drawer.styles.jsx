import styled from "styled-components";
import { Link } from "react-router-dom";
import ListItem1 from "@material-ui/core/ListItem";

export const HamburgerTitle = styled(Link)`
  font-family: TS Block;
  font-size: 15px;
  margin-left: 10px;
`;

export const ListItem = styled(ListItem1)`
  cursor: pointer;
`;

export const SubOptionsContainer = styled.div`
  margin-left: 35px;
`;

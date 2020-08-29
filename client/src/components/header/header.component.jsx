import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import { fetchCartItemsFromFirestoreStart } from "../../redux/cart/cart.actions";

import { HeaderContainer, LinkContainer } from "./header.styles";

import { signOutStart } from "../../redux/user/user.actions";

import logo from "../../assets/header/logo.svg";
import ham from "../../assets/header/ham.svg";
import delivery from "../../assets/header/delivery.svg";
import cart from "../../assets/header/cart.svg";

import TemporaryDrawer from "../../components/drawer/drawer.component";

import "./header.styles.css";

const Header = ({
  currentUser,
  hidden,
  signOutStart,
  cartItems,
  fetchCartItemsFromFirestoreStart,
}) => (
  <HeaderContainer>
    <TemporaryDrawer>
      <img src={ham} className="ham" />
    </TemporaryDrawer>

    <LinkContainer to="/">
      <img src={logo} className="logo" />
    </LinkContainer>

    <LinkContainer to="/roller">
      <img src={delivery} className="delivery" />
    </LinkContainer>

    <CartIcon />

    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: (cartItems) => dispatch(signOutStart(cartItems)),
  fetchCartItemsFromFirestoreStart: () =>
    dispatch(fetchCartItemsFromFirestoreStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

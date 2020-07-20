import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { fetchCartItemsFromFirestoreStart } from "../../redux/cart/cart.actions";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

import { signOutStart } from "../../redux/user/user.actions";

const Header = ({
  currentUser,
  hidden,
  signOutStart,
  cartItems,
  fetchCartItemsFromFirestoreStart,
}) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      <OptionLink as="div" onClick={() => fetchCartItemsFromFirestoreStart()}>
        addCartDbt
      </OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => signOutStart(cartItems)}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
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

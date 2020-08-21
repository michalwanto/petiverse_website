import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import AdminPage from "./pages/admin/admin.component";
import ProductsPage from "./pages/products/products-page.component";
import WebGlPage from "./pages/webglpage/webglpage.component";
import SuccessPage from "./pages/success/success.component";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import { checkCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

const App = ({ checkCurrentUser, currentUser }) => {
  useEffect(() => {
    checkCurrentUser();
  }, [checkCurrentUser]);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
        <Route path="/admin" component={AdminPage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/webGlPage" component={WebGlPage} />
        <Route path="/successPage" component={SuccessPage} />
      </Switch>
      {window.location.pathname === "/admin" ? null : <Header />}
      {window.location.pathname === "/admin" ? null : <Footer />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkCurrentUser: () => dispatch(checkCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

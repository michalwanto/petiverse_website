import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage1 from "./pages/checkout1/checkout1.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import AdminPage from "./pages/admin/admin.component";
// import RollerPage from "./pages/rollerpage/rollerpage.component";
import WebGlPage from "./pages/webglpage/webglpage.component";
import SuccessPage from "./pages/success/success.component";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import { checkCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

const RollerPage = lazy(() =>
  import("./pages/rollerpage/rollerpage.component")
);

const App = ({ checkCurrentUser, currentUser }) => {
  useEffect(() => {
    checkCurrentUser();
  }, [checkCurrentUser]);

  return (
    <div>
      {window.location.pathname === "/admin" ? null : <Header />}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout1" component={CheckoutPage1} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
        <Route path="/admin" component={AdminPage} />
        <Suspense fallback={<div>...Loading</div>}>
          <Route path="/roller" component={RollerPage} />
        </Suspense>
        <Route path="/webGlPage" component={WebGlPage} />
        <Route path="/successPage" component={SuccessPage} />
        <Route path="/checkout" component={CheckoutPage} />
      </Switch>

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

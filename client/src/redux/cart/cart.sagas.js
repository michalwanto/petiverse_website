import { all, put, takeLatest, call } from "redux-saga/effects";

import UserActionTypes from "../user/user.types";

import { getCurrentUser, firestore } from "../../firebase/firebase.utils";

import {
  clearCart,
  fetchCartItemsFromFirestoreSuccess,
  fetchCartItemsFromFirestoreFailure,
  addCartToAdminStart,
} from "./cart.actions";
import CartActionTypes from "./cart.types";

export function* clearCartOnSignOutSuccess() {
  yield put(clearCart());
}

export function* addCartToAdminFirestoreAsync({
  payload: { cartItems, token },
}) {
  try {
    const userRef = yield firestore.doc(`admin/customers/orders/${token.id}`);
    const snapshot = yield userRef.get();
    yield userRef.set({
      ...snapshot.data(),
      purchasedItems: cartItems,
      token: token,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* addCartToFirestoreAsync({ payload: items }) {
  try {
    const userAuth = yield getCurrentUser();
    const userRef = yield firestore.doc(`users/${userAuth.uid}`);
    const snapshot = yield userRef.get();
    const mapCartItems = yield items.map((item) => item);
    yield userRef.set({
      ...snapshot.data(),
      cartItems: mapCartItems,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* fetchCartItemsFromFirestoreAsync() {
  try {
    const userAuth = yield getCurrentUser();
    const userRef = yield firestore.doc(`users/${userAuth.uid}`);
    const snapshot = yield userRef.get();
    const cartItems = yield snapshot.data().cartItems;
    yield put(fetchCartItemsFromFirestoreSuccess(cartItems));
  } catch (error) {
    yield put(fetchCartItemsFromFirestoreFailure(error));
  }
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOutSuccess);
}

export function* onAddCartToFirestoreStart() {
  yield takeLatest(
    CartActionTypes.ADD_CART_TO_FIRESTORE_START,
    addCartToFirestoreAsync
  );
}

export function* onFetchCartItemsFromFirestoreStart() {
  yield takeLatest(
    CartActionTypes.FETCH_CART_ITEMS_FROM_FIRESTORE_START,
    fetchCartItemsFromFirestoreAsync
  );
}

export function* onAddCartToAdminFirestoreAsync() {
  yield takeLatest(
    CartActionTypes.ADD_CART_TO_ADMIN_START,
    addCartToAdminFirestoreAsync
  );
}

export function* cartSagas() {
  yield all([
    call(onSignOutSuccess),
    call(onAddCartToFirestoreStart),
    call(onFetchCartItemsFromFirestoreStart),
    call(onAddCartToAdminFirestoreAsync),
  ]);
}

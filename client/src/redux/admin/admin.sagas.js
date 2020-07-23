import { all, put, takeLatest, call } from "redux-saga/effects";

import {
  getCurrentUser,
  firestore,
  convertTokenDataToDataArray,
} from "../../firebase/firebase.utils";

import AdminActionTypes from "./admin.types";
import { fetchOrdersFromFirestoreSuccess } from "./admin.actions";

export function* fetchOrdersFromFirestoreAsync() {
  try {
    const userRef = yield firestore.collection(`admin/customers/orders`);
    const snapshot = yield userRef.get();
    const docs = yield snapshot.docs;
    const orders = yield docs.map((doc) => {
      const data = doc.data();
      const convertedData = convertTokenDataToDataArray(data);

      return convertedData;
    });
    yield put(fetchOrdersFromFirestoreSuccess(orders));
  } catch (error) {
    console.log(error);
  }
}

export function* onFetchOrdersFromFirestoreStart() {
  yield takeLatest(
    AdminActionTypes.FETCH_ORDERS_FROM_FIRESTORE_START,
    fetchOrdersFromFirestoreAsync
  );
}

export function* adminSagas() {
  yield all([call(onFetchOrdersFromFirestoreStart)]);
}

import { all, takeEvery, call, put } from "redux-saga/effects";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions.js";

import shopActionTypes from "./shop.types";

export function* fetchCollectionsAsync(category) {
  let id = "";
  switch (category.payload.category) {
    case "shirt":
      id = "1ISQtx97dSVjiYR472dy";
      break;
    case "costumes":
      id = "KW745JXq2Ul4RaXyNbxf";
      break;
    case "dresses":
      id = "X6zUVXBtRDGVYUiOzYLG";
      break;
    case "jackets":
      id = "1g51AWLJBrnf5Mq4s6cRv";
      break;
  }

  try {
    const collectionRef = yield firestore.doc(`shop/collection/clothing/${id}`);
    const snapshot = yield collectionRef.get();
    const shirtItems = yield snapshot.data();
    yield put(fetchCollectionsSuccess(shirtItems));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}

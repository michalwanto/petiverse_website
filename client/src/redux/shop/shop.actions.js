import ShopActionsType from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = (category) => ({
  type: ShopActionsType.FETCH_COLLECTIONS_START,
  payload: category,
});

export const fetchCollectionsSuccess = (items) => ({
  type: ShopActionsType.FETCH_COLLECTIONS_SUCCESS,
  payload: items,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionsType.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

// export const fetchCollectionsStartAsync = () => {
//   return (dispatch) => {
//     const collectionRef = firestore.collection("collections");
//     dispatch(fetchCollectionsStart());

//     collectionRef
//       .get()
//       .then((snapshot) => {
//         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//         dispatch(fetchCollectionsSuccess(collectionsMap));
//       })
//       .catch((error) => dispatch(fetchCollectionsFailure(error.errorMessage)));
//   };
// };

import AdminActionTypes from "./admin.types";

export const fetchOrdersFromFirestoreStart = () => ({
  type: AdminActionTypes.FETCH_ORDERS_FROM_FIRESTORE_START,
});

export const fetchOrdersFromFirestoreSuccess = (orders) => ({
  type: AdminActionTypes.FETCH_ORDERS_FROM_FIRESTORE_SUCCESS,
  payload: orders,
});

export const fetchOrdersFromFirestoreFailure = (error) => ({
  type: AdminActionTypes.FETCH_ORDERS_FROM_FIRESTORE_FAILURE,
  payload: error,
});

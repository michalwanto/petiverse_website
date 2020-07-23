import AdminActionTypes from "./admin.types";

const INITIAL_STATE = {
  orders: [],
};

const adminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AdminActionTypes.FETCH_ORDERS_FROM_FIRESTORE_SUCCESS:
      return {
        ...state,
        orders: action.payload,
      };

    default:
      return state;
  }
};

export default adminReducer;

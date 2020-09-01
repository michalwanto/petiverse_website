import ShopActionsType from "./shop.types";

const INITIAL_STATE = {
  collections: [],
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionsType.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionsType.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        [action.payload.title]: action.payload,
        collections: [...state.collections, ...action.payload.items],
      };
    case ShopActionsType.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;

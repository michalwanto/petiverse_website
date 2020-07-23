import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});

export const addCartToFirestoreStart = (cartItems) => ({
  type: CartActionTypes.ADD_CART_TO_FIRESTORE_START,
  payload: cartItems,
});

export const fetchCartItemsFromFirestoreStart = () => ({
  type: CartActionTypes.FETCH_CART_ITEMS_FROM_FIRESTORE_START,
});

export const fetchCartItemsFromFirestoreSuccess = (cartItems) => ({
  type: CartActionTypes.FETCH_CART_ITEMS_FROM_FIRESTORE_SUCCESS,
  payload: cartItems,
});

export const fetchCartItemsFromFirestoreFailure = (error) => ({
  type: CartActionTypes.FETCH_CART_ITEMS_FROM_FIRESTORE_FAILURE,
  payload: error,
});

export const addCartToAdminStart = ({ cartItems, token }) => ({
  type: CartActionTypes.ADD_CART_TO_ADMIN_START,
  payload: { cartItems, token },
});

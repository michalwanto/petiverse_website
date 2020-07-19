import UserActionTypes from "./user.types";

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
export const signInWithGoogleStart = () => ({
  type: UserActionTypes.SIGN_IN_WITH_GOOGLE_START,
});
export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});
export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});
export const signInWithEmailStart = (emailAndPassword) => ({
  type: UserActionTypes.SIGN_IN_WITH_EMAIL_START,
  payload: emailAndPassword,
});

export const checkCurrentUser = () => ({
  type: UserActionTypes.CHECK_CURRENT_USER,
});

export const signOutStart = (cartItems) => ({
  type: UserActionTypes.SIGN_OUT_START,
  payload: cartItems,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = (credentials) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: credentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = () => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
});

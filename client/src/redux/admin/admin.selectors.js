import { createSelector } from "reselect";

const selectAdmin = (state) => state.admin;

export const selectOrders = createSelector(
  [selectAdmin],
  (Admin) => Admin.orders
);

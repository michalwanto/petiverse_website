import React, { useEffect } from "react";

import { connect } from "react-redux";
import CollapsibleTable from "../../components/custom-table/custom-table.component";
import { fetchOrdersFromFirestoreStart } from "../../redux/admin/admin.actions";

const AdminPage = ({ fetchOrdersFromFirestoreStart }) => {
  useEffect(() => {
    fetchOrdersFromFirestoreStart();
  }, []);
  return (
    <div>
      <h1>Admin Page</h1>
      <CollapsibleTable />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchOrdersFromFirestoreStart: () =>
    dispatch(fetchOrdersFromFirestoreStart()),
});

export default connect(null, mapDispatchToProps)(AdminPage);

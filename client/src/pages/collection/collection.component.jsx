import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./collection.styles.scss";

import { convertCollectionsToMap } from "../../firebase/firebase.utils";
import { selectCollections } from "../../redux/shop/shop.selectors";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const CollectionPage = ({ collections, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart({ category: "shirt" });
    fetchCollectionsStart({ category: "costumes" });
  }, []);

  return (
    <div>
      <h1 className="collectionPageTitle">Collection Page</h1>
      {console.log(collections)}
      <div className="itemsContainer">
        {collections.map((item) => (
          <div className="itemContainer">
            <div className="imgContainer">
              <img
                className="img"
                src={`${item.imageUrl[0].noBackground[0]}`}
              />
            </div>

            <div>
              <h2>{item.name}</h2>
              <h4>Short Desc</h4>
              <h3 className="price">PRICE</h3>
            </div>
            <div> XS S M L</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: (category) =>
    dispatch(fetchCollectionsStart(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);

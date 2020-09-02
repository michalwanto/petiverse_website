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
    <div className="collectionPage">
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

            <div className="descriptionContainer">
              <h2 className="itemName">{item.name}</h2>
              <h4 className="itemDescription">{item.shortDesc}</h4>
              <h3 className="itemPrice">AUD 77</h3>
              <div className="itemSize"> XS S M L</div>
            </div>
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

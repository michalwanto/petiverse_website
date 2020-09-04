import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./collection.styles.scss";

import { selectCollections } from "../../redux/shop/shop.selectors";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const CollectionPage = ({ collections, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart({ category: "shirt" });
    fetchCollectionsStart({ category: "costumes" });
    fetchCollectionsStart({ category: "sofas" });
  }, []);

  return (
    <div className="collectionPage">
      <h1 className="collectionPageTitle">All Products</h1>
      <h2 className="collectionPageSubTitle">
        YOUR PET’S PERSONALITIES REPRESENTED.
      </h2>
      <div className="itemsContainer">
        {collections.map((item) => {
          let stockArray = [];
          let uniqueStockArray = [];
          return (
            <div className="itemContainer">
              {item.stock
                ? item.stock.map((eachStock) => {
                    Object.keys(eachStock.size).map((eachSize) =>
                      stockArray.push(eachSize)
                    );
                  })
                : null}
              {stockArray.forEach((c) => {
                if (!uniqueStockArray.includes(c)) {
                  uniqueStockArray.push(c);
                }
              })}

              <div className="imgContainer">
                <img
                  className="img"
                  src={`${item.imageUrl[0].noBackground[0]}`}
                />
              </div>

              <div className="descriptionContainer">
                <h2 className="itemName">{`${item.name}`.toUpperCase()}</h2>
                <h4 className="itemDescription">{item.shortDesc}</h4>
                <h3 className="itemPrice">AUD 77</h3>
                <div className="itemSizeBoxesContainer">
                  {uniqueStockArray.map((eachStock) => (
                    <div className="itemSizeBox">
                      <h3 className="itemSize">{eachStock.toUpperCase()}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
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

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Categories from "../Categories/Categories";
import SortPopup from "../Components/SortPopup/SortPopup";
import Loading from "../Products/Loading";
import Products from "../Products/Products";
import AdminBTN from "./AdminBTN";

import { setCategory, setSortBy } from "../redux/actions/filters";

import "./main.css";

const categoryNames = ["White", "Rose", "Red"];
const sortItem = [
  { name: "higher price", type: "higher price" },
  { name: "lower price", type: "lower price" },
  { name: "all", type: "without" },
];

//console.log("sortItem", sortItem);

function Main() {
  const dispatch = useDispatch();
  const items = useSelector(({ products }) => products.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ products }) => products.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  //const { payOrder } = useSelector(({ payCard }) => payCard);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  });

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  });

  const handleAddProductToCart = (obj) => {
    dispatch({
      type: "ADD_PRODUCT_CART",
      payload: obj,
    });
  };

  //console.log("items", items);
  return (
    <>
      <main className="content-block">
        <div className="content">
          <div className="content-top">
            <Categories
              activeCategory={category}
              onClickCategory={onSelectCategory}
              items={categoryNames}
            />
            <SortPopup
              activeSortType={sortBy}
              items={sortItem}
              onClickSortType={onSelectSortType}
            />
          </div>
          <div className="content-bottom">
            <div className="block-products">
              {isLoaded
                ? items
                    .filter((item) =>
                      category === null
                        ? item
                        : item.kind.toUpperCase() ===
                          categoryNames[category].toUpperCase()
                    )
                    .sort((a, b) => {
                      if (sortBy === "higher price") {
                        return a.price < b.price ? 1 : -1;
                      } else if (sortBy === "lower price") {
                        return a.price > b.price ? 1 : -1;
                      } else if (sortBy === "without") {
                        return 0;
                      }
                    })
                    .map((obj) => (
                      <Products
                        onClickAddProduct={handleAddProductToCart}
                        key={obj.id}
                        addedCount={
                          cartItems[obj.id] && cartItems[obj.id].items.length
                        }
                        {...obj}
                      />
                    ))
                : Array(20)
                    .fill(0)
                    .map((_, index) => <Loading key={index} />)}
            </div>
          </div>
          <AdminBTN />
          {/* {data[0].userRole === "admin" ? <AdminBTN /> : <div></div>} */}
        </div>
      </main>
    </>
  );
}

export default Main;

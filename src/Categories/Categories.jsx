import React from "react";
//import { useState } from "react";
import PropTypes from "prop-types";

import "./categories.css";

const Categories = React.memo(function Categories({
  activeCategory,
  items,
  onClickCategory,
  active,
  setActive,
}) {
  return (
    <div className="categories-body">
      <div
        className={
          active ? "categories-block _menu-active" : "categories-block"
        }
        onClick={() => setActive(false)}
      >
        <ul
          className="categories-items"
          // onClick={(e) => e.stopPropagation()}
        >
          <li
            className={activeCategory === null ? "_active" : "item"}
            onClick={() => onClickCategory(null)}
          >
            All
          </li>
          {items &&
            items.map((name, index) => (
              <li
                className={activeCategory === index ? "_active" : "item"}
                onClick={() => onClickCategory(index)}
                key={`${name}_${index}`}
              >
                {name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
});

Categories.propTypes = {
  //activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories;

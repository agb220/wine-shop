import React from "react";
import PropTypes from "prop-types";

import "./categories.css";

const Categories = React.memo(function Categories({
  activeCategory,
  items,
  onClickCategory,
}) {
  //console.log("items", items);

  //const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="categories-block">
      <ul className="categories-items">
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
  );
});

Categories.propTypes = {
  //activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories;

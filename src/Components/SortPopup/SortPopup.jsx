import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./sortPopup.css";

const SortPopup = React.memo(function SortPopup({
  items,
  activeSortType,
  onClickSortType,
}) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const sortRef = React.useRef(null);
  const activeLabel = items.find((obj) => obj.type === activeSortType).name;

  //console.log("sortRef", sortRef);

  const toggleVisiblePopup = () => {
    //console.log("showPopup");
    setVisiblePopup(!visiblePopup);
  };

  function handlerOutsideClick(e) {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  }

  function onSelectItem(index) {
    onClickSortType(index);
    setVisiblePopup(false);
  }

  useEffect(() => {
    document.body.addEventListener("click", handlerOutsideClick);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort-block">
        <div className="sort-title"> Sorting by:</div>
        <span onClick={toggleVisiblePopup}>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <ul className="popup-body">
          {items &&
            items.map((obj, index) => (
              <li
                onClick={() => onSelectItem(obj.type)}
                className={
                  activeSortType === obj.type ? "popup-active" : "popup"
                }
                key={`${obj.type}_${index}`}
              >
                {obj.name}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
});

SortPopup.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  OnClickSortType: PropTypes.func,
};
SortPopup.defaultProps = {
  items: [],
};
export default SortPopup;

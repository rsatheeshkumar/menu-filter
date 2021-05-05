import React from "react";

const Categories = ({ filterItems, allCatagories }) => {
  return (
    <div className="btn-container">
      {allCatagories.map((category, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

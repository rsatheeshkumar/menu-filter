import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
const allCatagories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCatagories);

  const filterItems = (category) => {
    if (category === "all") {
      return setMenuItems(items);
    }
    let newItem = items.filter((item) => item.category === category);
    return setMenuItems(newItem);
  };
  return (
    <div>
      <div className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </div>
    </div>
  );
}

export default App;

/** @format */

import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
import Filter from "./Filter";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("");

  const handleCategoryChange = (selectedCategory) => {
    setCategoryFilter(selectedCategory);
  };

  const handleDarkModeClick = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={itemData} categoryFilter={categoryFilter} />
      <Filter onCategoryChange={handleCategoryChange} />
    </div>
  );
}
export default App;

import React from "react";
import "./Home.scss";
import List from "../List/List";
import Header from "../Header/Header";

const Home = ({
  Data,
  filteredItems,
  addFilteredItem,
  clearFilter,
  setFilteredItems,
}) => {
  return (
    <div className="home">
      {filteredItems.length > 0 && (
        <Header
          Data={Data}
          filteredItems={filteredItems}
          clearFilter={clearFilter}
          setFilteredItems={setFilteredItems}
        />
      )}
      <List
        Data={Data}
        addFilteredItem={addFilteredItem}
        filteredItems={filteredItems}
        setFilteredItems={setFilteredItems}
      />
    </div>
  );
};

export default Home;

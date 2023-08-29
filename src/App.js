import { useState } from "react";
import "./App.scss";
import Home from "./components/Home/Home";
import { Data } from "./db/data";
import Top from "./components/Top/Top";

function App() {
  const [filteredItems, setFilteredItems] = useState([]);

  // DISPLAY FILTERED ITEMS ONCLICK FUNCTION
  const addFilteredItem = (item) => {
    if (!filteredItems.includes(item)) {
      setFilteredItems([...filteredItems, item]);
    }
  };

  // CLEAR FILRER FUNCTIONM
  const clearFilter = () =>{
        setFilteredItems([])
  }


  return (
    <div className="App">
      <Top/>
      <Home
        Data={Data}
        filteredItems={filteredItems}
        addFilteredItem={addFilteredItem}
        clearFilter={clearFilter}
        setFilteredItems={setFilteredItems}
      />
    </div>
  );
}

export default App;

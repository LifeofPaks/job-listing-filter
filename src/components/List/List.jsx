import React, { useEffect, useState } from "react";
import "./List.scss";
import Job from "../Job/Job";

const List = ({ Data, addFilteredItem, filteredItems }) => {

  const [onlyFiltered, setOnlyFiltered] = useState([]);

  // FILTER JOBS FUNCTION
  const filterJobs = () => {
    if (filteredItems.length > 0) {
      const filteredJobList = onlyFiltered.filter((filteredItem) =>
            filteredItems.every(item =>(
            filteredItem.role == item ||
            filteredItem.level == item ||
            filteredItem.languages.includes(item) ||
            filteredItem.tools.includes(item)
        ))
      );

      setOnlyFiltered(filteredJobList)
    } else {
      setOnlyFiltered(Data);
    }
  };

  useEffect(() =>{
    filterJobs()
  }, [filteredItems])

  return (
    <div className="lists">
      {onlyFiltered.map((item) => (
        <Job key={item.id} item={item} addFilteredItem={addFilteredItem} />
      ))}
    </div>
  );
};

export default List;

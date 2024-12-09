import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import "./Filtercontainer.css";
import Categorydata from "./Categorydata";
function FilterContainer(props) {
  const [filterData, setfilterData] = useState([]);

  useEffect(() => {
    const result = getCategoryCount(props.productList);
    setfilterData(result);
  }, [props]);

  const getCategoryCount = (products) => {
    // Step 1: Reduce the array into an object with category counts
    const count = products.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1;
      return acc;
    }, {});

    // Step 2: Transform the object into array of objects
    return Object.entries(count).map(([categoryname, count]) => ({
      categoryname,
      count,
    }));
  };

  const categoryClick = (_category) => {
    // set categpory to context
  };

  return (
    <div className="plpFilter__Container">
      <Categorydata categoryFilter={filterData} categoryClick={categoryClick} />
      <Filter productList={props.productList} />
    </div>
  );
}

export default FilterContainer;

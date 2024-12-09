import React from "react";
import "./Filter.css";

function Filter(props) {
  return (
    <div className="filter">
      <h3 className="title">title</h3>
      <ol className="title-1">
        {props?.productList.map((product, i) => (
          <li key={i}>{product.title}</li>
        ))}
      </ol>
    </div>
  );
}

export default Filter;

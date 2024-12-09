import React from "react";
import Productcard from "./Productcard";
import "./Productcardcontainer.css";
function Productcardcontainer(props) {
  return (
    <div className="plpListing__Container">
      {props.productList.map((product, i) => (
        <Productcard list={product} ></Productcard>

      ))}
    </div>
  );
}

export default Productcardcontainer;

import React, { useState, useEffect } from "react";
import "./Productcard.css";
import Price from "./Price";
import Button from "../atomicomponent/Button";
import BuyButton from "./BuyButton";
function Productcard(props) {

  const [priceObject, setPriceObject] = useState({});

  useEffect(() => {
    const priceObj = {
      price: props?.list?.price,
      percentage: props?.list?.discountPercentage,
    };
    setPriceObject(priceObj);
  }, [props]);

  const buyButton = (availabilityStatus) => {
    if (availabilityStatus === "Low Stock") {
      return <Button labels="Inform " />;
    } else {
      return <Button labels="Buy" />;
    }
  };

  return (
    <div className="products" id={props.list.id}>
      <h3>{props.list.title}</h3>
      <img src={props.list.thumbnail} />
      <p className="description-1">{props.list.description}</p>
      <Price priceInfo={priceObject} />
      <div >{props.list.rating}</div>
      {buyButton(props.list.availabilityStatus)}
      {props.list.availabilityStatus === "Low Stock" ? (
        <Button labels="Inform " />
      ) : (
        <Button labels="Buy" />
      )}
      <BuyButton status={props.list.availabilityStatus} />
    </div>
  );
}

export default Productcard;

import React, { useState, useEffect } from "react";

function Price(props) {

  const [discountedPrice, setDiscountedPrice] = useState(0);

  const prepareDiscountedPrice = () => {
    let calculatedPrice = props.priceInfo.price * props.priceInfo.percentage /100;

   // priceInfo?.price * priceInfo?.discount?.value/100;

    setDiscountedPrice(calculatedPrice);
  };
  

  useEffect(() => {
    prepareDiscountedPrice();
  }, [props]);

  return (
    <div>
      <span>{props.priceInfo?.price}</span>
      <span>Discount %: {props.priceInfo?.percentage}</span>
      <span> {discountedPrice}</span>
    </div>
  );
}

export default Price;

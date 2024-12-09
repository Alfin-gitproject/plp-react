import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Productcardcontainer from "../components/Productcardcontainer";
import { fetchProductData } from "../Redux/Productdataslice";
import FilterContainer from "../components/FilterContainer";
function Plp() {
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch();
  // const [data, isLoading] = useSelector(state => state.ProductData)
  const productData = useSelector((state) => state.ProductData);
  const { data, isLoading, error } = productData;
  // const isLoading = useSelector(state => state.ProductData);

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]); // Remove data dependency to prevent infinite loop

  useEffect(() => {
    if (data?.products) {
      setProductList(data.products);
    }
  }, [data]); // Update productList when data changes

  return (
    <div className="plp">
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <>
          <FilterContainer productList={productList} />
          <Productcardcontainer productList={productList} />
        </>
      )}
    </div>
  );
}

export default Plp;

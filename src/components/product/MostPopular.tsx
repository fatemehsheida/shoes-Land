import { useContext } from "react";
import ProductList from "./ProductList";
import { ApiContext } from "../base/Api";
import React from "react";
function MostPopular() {
  const apiContext = useContext(ApiContext);
  return (
    <>
      {apiContext && (
        <ProductList
          products={apiContext.data}
          productSet={apiContext.setData}
          dispatchCaller={{ type: "mostPopular", value: "true" }}
        />
      )}
    </>
  );
}
export default MostPopular;
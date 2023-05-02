import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsContext from "../context/productContext";
import Products from "./Products";

const RenderProduct = () => {
  const params = useParams();
  const [state, setState] = useContext(ProductsContext);
  let [items, setItems] = useState([]);
  useEffect(() => {
    items =
      !!state && state.products.filter((item) => item.type === params.type);
    setItems(items);
  }, [params?.type]);
  return <Products title={params.type} itemList={items} />;
};

export default RenderProduct;

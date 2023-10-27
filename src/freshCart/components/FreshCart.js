import React, { useContext, useEffect, useState } from "react";
import ProductsContext from "../context/productContext";
import Cards from "./Cards";
import CarouselPics from "./CarouselPics";
import Products from "./Products";

const FreshCart = () => {
  const [state, setState] = useContext(ProductsContext);
  const [popularFruits, setPopularFruits] = useState([]);
  const [popularVegetables, setPopularVegetables] = useState([]);

  useEffect(() => {
    let fruit = [];
    let vegetable = [];
    state.products.forEach((product) => {
      if (product.type === "fruits" && product.popular === 1) {
        fruit.push(product);
      }
      if (product.type === "vegetables" && product.popular === 1) {
        vegetable.push(product);
      }
    });
    setPopularFruits(fruit);
    setPopularVegetables(vegetable);
  }, []);

  return (
    <React.Fragment>
      {
        // carousal
      }
      <CarouselPics />
      {
        // SOME CARDs
      }
      <Cards />
      <Products title={"Popular Fruits"} itemList={popularFruits} />
      <Products title={"Popular Vegetables"} itemList={popularVegetables} />
    </React.Fragment>
  );
};

export default FreshCart;

import React from "react";
import productsStyles from "../styles/products.module.css";
import AddProduct from "./AddProduct";
const Products = ({ title, itemList }) => {
  return (
    <div className={productsStyles.mainContainer}>
      <div>
        <h3> {title[0].toUpperCase() + title.slice(1)} </h3>
      </div>
      <div className={`${productsStyles.productContainer}`}>
        {!!itemList &&
          itemList.length > 0 &&
          itemList.map((item, index) => {
            return (
              <div key={index} className={`${productsStyles.card}`}>
                <img src={item.pic} alt={item.name} />
                <h4> {item.name} </h4>
                <p> {item.weight} </p>
                <p>
                  $ {item.price} <del> $ {item.was} </del>{" "}
                </p>
                <AddProduct item={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;

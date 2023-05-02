import React, { useState } from "react";
import { RenderList, AddEdit } from "./components";
import "./ItemList.css";

const ItemList = () => {
  const [state, setState] = useState({
    add: "",
    id: "",
    name: "",
  });
  const [products, setProducts] = useState([]);

  const onDelete = (id) => {
    setProducts(products.filter((prod) => prod.id !== id));
  };

  const addProduct = (product) => {
    if (state.add === "add") {
      setProducts([...products, product]);
      setState({
        ...state,
        add: "",
      });
    } else {
      // updating
      const updatedProducts = products.map((prod) => {
        if (prod.id === product.id) {
          return {
            ...prod,
            name: product.name,
          };
        }
        return prod;
      });
      setProducts(updatedProducts);
      setState({ ...state, add: "" });
    }
  };
  return (
    <div>
      <RenderList
        product={products}
        onDelete={onDelete}
        onEdit={(data) =>
          setState({ ...state, id: data.id, name: data.name, add: "edit" })
        }
        showAdd={() => setState({ ...state, add: "add" })}
      />

      {state.add && (
        <AddEdit
          {...state}
          addProduct={addProduct}
          heading={state.add === "add" ? "Add Product" : "Edit Product"}
          btnHeading={state.add === "add" ? "Add Product" : "Update Product"}
        />
      )}
    </div>
  );
};
export default ItemList;

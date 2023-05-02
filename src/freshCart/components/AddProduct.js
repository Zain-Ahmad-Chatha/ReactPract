import React, { useContext } from "react";
import ProductsContext from "../context/productContext";

const AddProduct = ({ item }) => {
  const [state, setState] = useContext(ProductsContext);

  const onRemoveItem = (item) => {
    let cartItems = [...state.cart];
    let index = cartItems.findIndex((product) => product.id === item.id);
    cartItems[index].quantity = cartItems[index].quantity - 1;
    // let cartProducts = state.cart.filter((product) => product.id != item.id);
    // let cartProducts = [...state.cart];
    // cartProducts = cartProducts.splice(index, 1);
    if (cartItems[index].quantity === 0) {
      cartItems.splice(index, 1);
    }
    setState({ ...state, cart: cartItems });
  };

  const onAddItem = (item) => {
    let allItems = [...state.products];
    let index = allItems.findIndex((product) => product.id === item.id);
    allItems[index].quantity = allItems[index].quantity + 1;
    setState({ ...state, cart: [...state.cart, allItems[index]] }); // insert only one product of finded index object.
  };
  const onIncreaseQuantity = (item) => {
    let cartItems = [...state.cart];
    let index = cartItems.findIndex((product) => product.id === item.id);
    cartItems[index].quantity = cartItems[index].quantity + 1;
    setState({ ...state, cart: cartItems });
  };

  return (
    <>
      {item.quantity === 0 ? (
        <button
          onClick={() => onAddItem(item)}
          style={{ width: "90%", marginRight: "10px" }}
        >
          Add
        </button>
      ) : (
        <div
          style={{
            background: "whitesmoke",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button
            style={{ backgroundColor: "red", fontSize: "20px" }}
            onClick={() => onRemoveItem(item)}
          >
            -
          </button>
          <button style={{ flex: "1" }}> {item.quantity}</button>
          <button
            style={{ backgroundColor: "green", fontSize: "20px" }}
            onClick={() => onIncreaseQuantity(item)}
          >
            +
          </button>
        </div>
      )}
    </>
  );
};

export default AddProduct;

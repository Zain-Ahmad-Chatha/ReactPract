import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";
import ProductsContext from "../context/productContext";
import cartModule from "../styles/cart.module.css";
import AddProduct from "./AddProduct";
const Cart = () => {
  const [state, setState] = useContext(ProductsContext);
  const [isLogin, setIsLogin] = useContext(AuthContext);
  const navigate = useNavigate();
  const [orderDetail, setOrderDetail] = useState({
    mrp: 0,
    disc: 0,
    total: 0,
  });
  useEffect(() => {
    let mrp = 0,
      disc = 0,
      total = 0;

    !!state &&
      !!state.cart &&
      state.cart.length > 0 &&
      state.cart.forEach((item) => {
        mrp = mrp + item.quantity * item.price;
        disc = disc + item.quantity * (item.was - item.price);
        total = mrp - disc;
      });
    setOrderDetail({ ...orderDetail, mrp, disc, total });
  }, [state.cart]);

  const order = () => {
    if (isLogin) {
      let products = [...state.products];
      products.forEach((item) => {
        item.quantity = 0;
      });
      setState({ products, cart: [] });
      navigate("/freshCart/final");
    } else {
      navigate("/freshCart/login");
    }
  };
  return (
    <div className={cartModule.cartContainer}>
      {!!state && state.cart.length === 0 ? (
        <div style={{ margin: "20px" }}>
          <h3>Your Cart is Empty</h3>
        </div>
      ) : (
        <div style={{ marginBottom: "10px" }}>
          <h3>Cart Items</h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ flex: "1", borderRight: "4px solid whitesmoke" }}>
              {!!state &&
                state.cart.length > 0 &&
                state.cart.map((item, index) => {
                  return (
                    <div key={index} className={cartModule.cartItemsContainer}>
                      <div className={cartModule.cartLeftSide}>
                        <img
                          src={item.pic}
                          style={{ height: "60px", width: "50px" }}
                          alt={item.name}
                        />
                      </div>
                      <div
                        style={{ flex: "1", marginLeft: "20px" }}
                        className={cartModule.cartCenterSide}
                      >
                        <h4>{item.name}</h4>
                        <p>{item.weight}</p>
                        <p>
                          <b>${item.price}</b> &nbsp;&nbsp;
                          <del>${item.was} </del> &nbsp;&nbsp;
                          <b style={{ color: "green" }}>
                            ${item.was - item.price} Off
                          </b>
                        </p>
                      </div>
                      <div
                        style={{ width: "120px", marginRight: "20px" }}
                        className={cartModule.cartRightSide}
                      >
                        <AddProduct item={item} />
                      </div>
                    </div>
                  );
                })}
              <div style={{ textAlign: "right" }}>
                <button className={cartModule.button} onClick={() => order()}>
                  Place Order
                </button>
              </div>
            </div>

            <div style={{ marginLeft: "10px" }}>
              <h4>Summary</h4>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ flex: "1" }}>MRP</p>
                <p>${orderDetail.mrp}</p>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ flex: "1" }}>Product Discount</p>
                <p style={{ color: "green" }}>-${orderDetail.disc}</p>
              </div>

              <div
                style={{
                  display: "flex",
                  fontWeight: "bold",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ flex: "1" }}>Total</p>
                <p>${orderDetail.total}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

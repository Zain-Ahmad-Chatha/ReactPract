import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, reStock } from "../features/cake";
const Cake = () => {
  const dispatch = useDispatch();
  const cakes = useSelector((state) => {
    console.log("state is", state);
    return state.cake?.numOfCakes;
  });
  return (
    <div>
      <h2>Number of Cakes - {cakes}</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => dispatch(ordered())}>Order Cake</button>
        <button onClick={() => dispatch(reStock(3))}>ReStock Cake</button>
      </div>
    </div>
  );
};

export default Cake;

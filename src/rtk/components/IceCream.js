import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, reStock } from "../features/iceCream";
const IceCream = () => {
  const dispatch = useDispatch();
  const iceCream = useSelector((state) => state.iceCream?.numOfIceCreams);
  return (
    <div>
      <h2>Number of IceCreams - {iceCream} </h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => dispatch(ordered())}>Order IceCream</button>
        <button onClick={() => dispatch(reStock(5))}>ReStock IceCream</button>
      </div>
    </div>
  );
};

export default IceCream;

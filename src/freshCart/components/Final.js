import React from "react";
import finalModule from "../styles/final.module.css";
const Final = () => {
  return (
    <div className={finalModule.container}>
      <div className={finalModule.message}>
        <h4>Your Order is successfully Placed!</h4>
      </div>
    </div>
  );
};

export default Final;

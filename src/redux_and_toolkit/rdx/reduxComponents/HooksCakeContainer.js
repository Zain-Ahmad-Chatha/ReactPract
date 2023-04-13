import React from "react";
import { buyCake } from "../redux/cake/cakeActions";
import { useSelector, useDispatch } from "react-redux";

const HooksCakeContainer = () => {
  const { numOfCakes } = useSelector((state) => {
    return {
      numOfCakes: state.numOfCakes,
    };
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes (useSelector) :{numOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};

export default HooksCakeContainer;

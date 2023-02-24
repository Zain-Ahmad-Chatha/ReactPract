import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of Cakes(connect) : {props.numOfCakes} </h2>
      <button onClick={props.buy_cake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { numOfCakes: state.numOfCakes };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buy_cake: () => dispatch(buyCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

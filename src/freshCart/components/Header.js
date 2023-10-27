import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import Toaster from "../utils";

import cartImg from "../images/Cart.png";
import headerStyle from "../styles/header.module.css";
import ProductsContext from "../context/productContext";
import AuthContext from "../context/authContext";

const Header = () => {
  const [state, setState] = useContext(ProductsContext);
  const [isLogin, setIsLogin] = useContext(AuthContext);
  const onLogOut = () => {
    setIsLogin(false);
    Toaster('"Logged Out Successfully!"', "success", 4000);
  };
  return (
    <React.Fragment>
      <div className={headerStyle.headerContainer}>
        <div>
          <Link to={"/freshCart"} className={headerStyle.colorWhite}>
            <h3>FreshCart</h3>
          </Link>

          <ul>
            <li>
              <NavLink
                to={"/freshCart/fruits"}
                className={headerStyle.colorWhite}
              >
                Fruits
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/freshCart/vegetables"}
                className={headerStyle.colorWhite}
              >
                Vegetables
              </NavLink>
            </li>
          </ul>
        </div>
        <ul>
          <li>
            {isLogin ? (
              <div onClick={() => onLogOut()}>
                <NavLink to={"/freshCart"} className={headerStyle.colorWhite}>
                  LogOut
                </NavLink>
              </div>
            ) : (
              <div>
                <NavLink
                  to={"/freshCart/login"}
                  className={headerStyle.colorWhite}
                >
                  Login
                </NavLink>
              </div>
            )}
          </li>
          <li>
            <div className={headerStyle.headerContainer}>
              <span style={{ color: "red", fontSize: "16px" }}>
                {state.cart.length}
              </span>
              <img
                style={{ width: "20px", height: "20px" }}
                alt={"Cart Logo"}
                src={cartImg}
              />
              <NavLink
                to={"/freshCart/cart"}
                className={headerStyle.colorWhite}
              >
                Cart
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Header;

import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  About,
  Contact,
  Home,
  ProductList,
  CheckBox,
  Navbar,
} from "./route_components";
import { Comment } from "./redux_and_toolkit";
import CounterApp from "./counter_components";
import { NotesTodoList } from "./todoList";
import { TodoApp } from "./todoList2";
import "./customRoutes.css";
import FreshCartApp, {
  Login,
  Cart,
  RenderProduct,
  Final,
  FreshCart,
} from "./freshCart";

const CustomRoutes = () => {
  return (
    <div>
      <Routes>
        {false && (
          <React.Fragment>
            <Route path={"/"} element={<Home />} />
            <Route path={"contact"} element={<Contact />} />
            <Route path={"about"} element={<About />} />
            <Route path={"product"} element={<ProductList />} />
            <Route path={"checkBox"} element={<CheckBox />} />
            <Route path={"redux"} element={<Comment />} />
            <Route path={"counters"} element={<CounterApp />} />
            <Route path={"notes"} element={<NotesTodoList />} />
            <Route path={"todoList"} element={<TodoApp />} />

            <Route path={"freshCart"} element={<FreshCartApp />} />

            <Route path={"*"} element={<div>Page not Found </div>} />
          </React.Fragment>
        )}

        {true && (
          <React.Fragment>
            <Route path={"/"} element={<Navbar />}>
              <Route path={"/"} element={<Home />} />
              <Route path={"contact"} element={<Contact />} />
              <Route path={"about"} element={<About />} />
              <Route path={"product"} element={<ProductList />} />
              <Route path={"checkBox"} element={<CheckBox />} />
              <Route path={"redux"} element={<Comment />} />
              <Route path={"counters"} element={<CounterApp />} />
              <Route path={"notes"} element={<NotesTodoList />} />
              <Route path={"todoList"} element={<TodoApp />} />
              <Route path={"freshCart"} element={<FreshCartApp />}>
                <Route path="" element={<FreshCart />} />
                <Route exact={true} path="login" element={<Login />} />
                <Route exact={true} path="cart" element={<Cart />} />
                <Route exact={true} path="final" element={<Final />} />
                <Route exact={true} path=":type" element={<RenderProduct />} />
              </Route>

              <Route path={"*"} element={<div>Page not Found </div>} />
            </Route>
          </React.Fragment>
        )}
      </Routes>
    </div>
  );
};

export default CustomRoutes;

// <Route path="/messages" element={<Messages />}>
// <Route path=":id" element={<Chats />} />
// </Route>

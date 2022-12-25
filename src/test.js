import React, { useState } from "react";
import { Card, Elevation } from "@blueprintjs/core";
import {
  ButtonGroup,
  Button,
  Classes,
  Dialog,
  H3,
  Icon,
  InputGroup,
  Intent,
  NonIdealState,
  Spinner,
} from "@blueprintjs/core";
import "./CustomerList.scss";
import AddCustomer from "./AddCustomer";
export const SECOND_INITIAL = [
  {
    prod_name: "Pen",
    Unit: "MB",
    keyValues: [
      { key: "Price", value: "aaaa" },
      { key: "End Date", value: "end" },
      { key: "Start Date", value: "12/11/2022" },
      { key: "Agent", value: "12" },
    ],
    CreatedAt: new Date(),
    UpdatedAt: new Date(),
    createdBy: {
      id: 1,
      name: "zain",
    },
    updatedBy: {
      id: 1,
      name: "zain",
    },
    history: [
      {
        prod_name: "Pen",
        Unit: "MB",
        keyValues: [
          { key: "Price", value: "aaaa" },
          { key: "End Date", value: "end" },
          { key: "Start Date", value: "12/11/2022" },
          { key: "Agent", value: "12" },
        ],
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
        createdBy: {
          id: 1,
          name: "zain",
        },
        updatedBy: {
          id: 1,
          name: "zain",
        },
      },
      {
        prod_name: "Pen",
        Unit: "MB",
        keyValues: [
          { key: "Price", value: "aaaa" },
          { key: "End Date", value: "end" },
          { key: "Start Date", value: "12/11/2022" },
          { key: "Agent", value: "12" },
        ],
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
        createdBy: {
          id: 1,
          name: "zain ahmad",
        },
        updatedBy: {
          id: 1,
          name: "zain ahmad",
        },
      },
    ],
  },
];
export const INITIAL_ARRAY = [
  {
    prod_name: "Pen",
    Unit: "MB",
    Price: 12,
    "Start Date": "21/11/2022",
    "End Date": "10/12/2022",
    "End Date1": "10/12/2022",
    "End Date2": "10/12/2022",
    CreatedAt: "Fri, Nov 16, 2022 5:34 PM",
  },
  {
    prod_name: "Marker",
    Unit: "MB",
    price: 20,
    "Start Date": "13/01/2022",
    "End Date": "10/09/2022",
    CreatedAt: "Fri, Nov 16, 2022 5:34 PM",
  },
  {
    prod_name: "Pencil",
    Unit: "MB",
    Price: 7,
    "Start Date": "21/11/2022",
    "End Date": "10/12/2022",
    CreatedAt: "Fri, Nov 16, 2022 5:34 PM",
  },
  {
    prod_name: "mug",
    Unit: "MB",
    Price: 7,
    "Start Date": "21/11/2022",
    "End Date": "10/12/2022",
    CreatedAt: "Fri, Nov 16, 2022 5:34 PM",
  },
  {
    prod_name: "button",
    Unit: "MB",
    Price: 7,
    "Start Date": "21/11/2022",
    "End Date": "10/12/2022",
    CreatedAt: "Fri, Nov 16, 2022 5:34 PM",
  },
  {
    prod_name: "laptop",
    Unit: "MB",
    Price: 7,
    "Start Date": "21/11/2022",
    "End Date": "10/12/2022",
    CreatedAt: "Fri, Nov 16, 2022 5:34 PM",
  },
];
export const PRODUCT_LIST = [
  { value: "Pen", label: "Pen", Unit: "MB" },
  { value: "Pencil", label: "Pencil", Unit: "GB" },
  { value: "Laptop", label: "Laptop", Unit: "KB" },
  { value: "Computer", label: "Computer", Unit: "Qu" },
  { value: "Mobile", label: "Mobile", Unit: "ZG" },
  { value: "Marker", label: "Marker", Unit: "TS" },
  { value: "Jarsi", label: "Jarsi", Unit: "TE" },
  { value: "Shoes", label: "Shoes", Unit: "NM" },
];
export const SELECT_LIST = [
  { value: "Price", label: "Price" },
  { value: "Start Date", label: "Start Date" },
  { value: "End Date", label: "End Date" },
  { value: "Agent", label: "Agent" },
];
const CustomerList = () => {
  const [productDetail, setProductDetail] = useState(INITIAL_ARRAY);
  const [second, setSecond] = useState(SECOND_INITIAL);
  const [search, setSearch] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const onCancel = () => {
    setShowDialog(false);
  };
  const onSaveCustomer = (data) => {
    console.log("data from child : ", data);
    // setProductDetail(...productDetail, data);
    // setShowDialog(false);
  };
  const renderAdd = () => {
    return (
      <AddCustomer
        productList={PRODUCT_LIST}
        selectList={SELECT_LIST}
        onCancel={onCancel}
        onSave={onSaveCustomer}
      />
    );
  };
  const rendetAllProducts = () => {
    return <p>all products here </p>;
  };

  return showDialog ? renderAdd() : rendetAllProducts();
};
export default CustomerList;

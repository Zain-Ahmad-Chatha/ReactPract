import React, { useState } from "react";
import { RenderList, Add_Edit } from "./components";
import "./ItemList.css";

const ItemList = () => {
  const [options, setOptions] = useState({
    addition: false,
    data: { id: "", name: "" },
    edit: false,
  });
  const ARRAY = [
    { id: 1, name: "zain 1" },
    { id: 2, name: "zain 2" },
    { id: 3, name: "zain 3" },
    { id: 4, name: "zain 4" },
    { id: 5, name: "zain 5" },
  ];
  const [product, setProduct] = useState(ARRAY);

  const onDelete = (id) => {
    console.log("delete", id);
    setProduct(product.filter((obj) => obj.id !== id));
  };

  const addProduct = (data, index) => {
    console.log("data dd : ", data, " index:", index);
    if (options.addition) {
      setProduct([...product, data]);
      setOptions({ ...options, addition: false, edit: false });
    } else {
      const data1 = product.map((obj) => {
        if (obj.id == data.id) {
          obj.id = data.id;
          obj.name = data.name;
        }
      });
      console.log("updated ", data1);

      setOptions({ ...options, addition: false, edit: false });
    }
  };
  return (
    <div>
      {(options.addition || options.edit) && (
        <Add_Edit
          data={options.data}
          addProduct={addProduct}
          heading={options.addition ? "Add Product" : "Edit Product"}
          btnHeading={options.addition ? "Add Product" : "Update Product"}
        />
      )}
      {(!options.addition || !options.edit) && (
        <RenderList
          product={product}
          onDelete={onDelete}
          onEdit={(data, index) =>
            setOptions({ ...options, data: data, edit: true, index: index })
          }
          showAdd={() => setOptions({ ...options, addition: true, index: -1 })}
        />
      )}
    </div>
  );
};

export default ItemList;

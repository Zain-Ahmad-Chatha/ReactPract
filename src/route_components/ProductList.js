import React from "react";
import ItemList from "./cruds";
import RichTextEditor from "./RichTextEditor";

const ProductList = () => {
  return (
    <React.Fragment>
      <ItemList />;
      <hr />
      <div>
        somethign better to do.....
        <RichTextEditor />
      </div>
    </React.Fragment>
  );
};

export default ProductList;

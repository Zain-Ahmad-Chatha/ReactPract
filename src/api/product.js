import * as ActionTypes from "./ActionTypes";

const addProduct = (data) => {
  console.log("data : ", data);
  return { payload: { data: data, action: ActionTypes.ADD_PRODUCT } };
};

const deleteProduct = (id) => {
  console.log("delete id : ", id);
  return { payload: id };
};

const editProduct = (data, id) => {
  console.log("data : ", data, " id:", id);
  return { payload: data };
};

const updateProduct = (data, id) => {
  console.log("data : ", data, "id:", id);
  return { payload: data };
};

export default {
  addProduct,
  deleteProduct,
  updateProduct,
  editProduct,
};

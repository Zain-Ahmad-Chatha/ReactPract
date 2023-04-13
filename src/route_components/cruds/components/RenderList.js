import React from "react";
import "./RenderList.css";
const RenderList = ({
  product = [],
  onDelete = () => {},
  onEdit = () => {},
  showAdd = () => {},
}) => {
  return (
    <>
      <div style={{ margin: "10px" }}>
        <button className="addBtn" onClick={showAdd}>
          Add Product
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((prod, index) => {
            return (
              <tr key={index}>
                <td> {index + 1} </td>
                <td> {prod.id} </td>
                <td> {prod.name} </td>
                <td>
                  <button
                    style={{
                      marginRight: "5px",
                      color: "white",
                    }}
                    className="deleteBtn"
                    onClick={() => onDelete(prod.id)}
                  >
                    Delete
                  </button>
                  <button
                    style={{
                      color: "white",
                    }}
                    className="editBtn"
                    onClick={() => onEdit(prod)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default RenderList;

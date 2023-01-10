import React from "react";
import "./RenderList.css";
const RenderList = ({
  product = [],
  onDelete = () => {},
  onEdit = () => {},
  showAdd = () => {},
}) => {
  return (
    <React.Fragment>
      <div>
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
          {product.map((obj, index) => {
            return (
              <tr key={index}>
                <td> {index + 1} </td>
                <td> {obj.id} </td>
                <td> {obj.name} </td>
                <td>
                  <button
                    style={{
                      marginRight: "5px",
                      color: "white",
                    }}
                    className="deleteBtn"
                    onClick={() => onDelete(obj.id)}
                  >
                    Delete
                  </button>
                  <button
                    style={{
                      color: "white",
                    }}
                    className="editBtn"
                    onClick={() => onEdit(obj, index)}
                  >
                    {" "}
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default RenderList;

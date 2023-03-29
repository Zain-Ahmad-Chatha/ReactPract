import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../features/user";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <div>
      <h2>List of Users</h2>
      {users.loading && <div>loading...</div>}
      {!users.loading && users.error && <div> {users.error} </div>}
      <div>
        {!users.loading && users.users.length > 0 ? (
          <ul style={{ flexDirection: "column" }}>
            {users.users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        ) : (
          "Users Not Found"
        )}
      </div>
    </div>
  );
};

export default Users;

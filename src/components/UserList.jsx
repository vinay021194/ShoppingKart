import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUser } from "../redux/userSlice";
import "../../src/App.css";

function UserList() {
  const users = useSelector((state) => state.user.users) || [];
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("");

  const handleAddUser = (e) => {
    e.preventDefault();
    dispatch(addUser({ task, status }));
    console.log(addUser({ task, status }));
    setTask("");
    setStatus("");
  };
  return (
    <div className="userCard">
      <h1>Task</h1>
      <form onSubmit={handleAddUser}>
        <input
          className="inputField"
          type="text"
          placeholder="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          className="inputField"
          type="status"
          placeholder="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
      <h1>Task List</h1>
      <ui>
        <>
          {Array.isArray(users) && users.length > 0 ? (
            users.map((user) => (
              <>
                <li key={user.id}>
                  {user.task} - {user.status}
                  <button
                    onClick={() => dispatch(deleteUser(user.id))}
                    className="danger"
                  >
                    X
                  </button>
                  <button
                    onClick={() =>
                      dispatch(updateUser(user.id, user.task, user.status))
                    }
                    className="Edit"
                  >
                    Edit
                  </button>
                </li>
              </>
            ))
          ) : (
            <li>No users found</li>
          )}
        </>
      </ui>
    </div>
  );
}

export default UserList;

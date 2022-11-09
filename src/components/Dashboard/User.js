import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/user/register").then((res) => {
      setUsers(res.data);
    });
  }, []);

  // delete user

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/user/register/${id}`);
    const remainingUser = users.filter((user) => user._id !== id);
    setUsers(remainingUser);
  };

  return (
    <div className="">
      {users.map((user) => {
        return (
          <div
            key={user._id}
            className="shadow-lg rounded-lg w-1/2 mb-4 mx-auto text-xl px-4 py-2"
          >
            <h2>Name : {user.name}</h2>
            <p>Email : {user.email}</p>
            <p>Create : {user.createdAt}</p>
            <Link
              to={`/details-user/${user._id}`}
              className="bg-blue-400 px-2 py-1 rounded-md mr-2"
            >
              Details
            </Link>
            <button className="bg-blue-400 px-2 py-1 rounded-md mr-2">
              Update
            </button>
            <button
              onClick={() => handleDelete(user._id)}
              className="bg-blue-400 px-2 py-1 rounded-md mr-2"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default User;

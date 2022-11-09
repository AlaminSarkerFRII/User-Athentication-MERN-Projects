import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const DetailsUser = () => {
  const [user, setUser] = useState();

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/user/register/${id}`).then((res) => {
      setUser(res.data);
    });
  }, [id]);

  console.log(user);

  return (
    <div className="border-2 border-solid-gray rounded-lg shadow-md w-1/2 mx-auto py-6 my-12 px-4 text-xl font-bold text-purple-500">
      <h2>{user?.name}</h2>
      <h2>{user?.email}</h2>
      <h2>{user?.createdAt}</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
        pariatur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae minima nesciunt itaque dolores nihil qui eos. Illo saepe culpa perspiciatis!
      </p>
    </div>
  );
};

export default DetailsUser;

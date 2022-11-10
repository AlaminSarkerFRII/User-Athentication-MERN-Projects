import React, { useState } from "react";
// date fns
import formatDistanceToNow from "date-fns/esm/formatDistanceToNow";
import { useParams } from "react-router-dom";
import axios from "axios";

const WorkoutDetails = ({ workout }) => {
  const [work, setWork] = useState();
  const { title, load, reps, createdAt } = workout;
  // const { id } = useParams();

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/workouts/${id}`);
    const reminingWork = work.filter((wk) => wk._id !== id);
    setWork(reminingWork);
    console.log("Deleted workout Successfully-",id);
  };

  return (
    <div className="my-6 flex  justify-around text-xl bg-white border-2 border-slate-400 shadow-md rounded-md ">
      <div className="workout-content px-6 py-10">
        <h2 className="font-bold text-blue-500">{title}</h2>
        <p> Load : {load}</p>
        <p> Reps : {reps}</p>
        <p>Created Date : {createdAt?.slice(0, 10)}</p>
        <p className="text-blue-400">
          {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
        </p>
      </div>
      <div className="btn-delete">
        <button
          onClick={() => handleDelete(workout._id)}
          className="text-red-500 bg-pink-200 rounded-full px-4 py-1 font-semibold"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default WorkoutDetails;

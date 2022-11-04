import React, { useState } from "react";
// date fns
import formatDistanceToNow from "date-fns/esm/formatDistanceToNow";
import { useParams } from "react-router-dom";
import axios from "axios";

const WorkoutDetails = ({ workout }) => {
  // const [workouts , setWorkouts ] = useState([])
  const { title, load, reps, createdAt,_id} = workout;

 
  const handleToDelete = async(_id) => {

     await axios
      .delete(`http://localhost:5000/api/workouts/${_id}`)
      .then(() => {
        workout.filter((work) => work._id !== _id);
      });

  };

  return (
    <div className="my-4 flex justify-around w-full px-4 py-4 mx-auto gap-10 text-xl bg-white border-2  border-slate-400 shadow-md rounded-md ">
      <div className="workout-content">
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
          onClick={handleToDelete}
          className="text-red-500 bg-pink-200 rounded-full px-4 py-1 font-semibold"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default WorkoutDetails;

import React from "react";

const WorkoutDetails = ({ workout }) => {
  const { title, load, reps } = workout;

  return (
    <div className="my-4 workout-details text-xl bg-white border-2 mb-6 border-slate-400 shadow-md rounded-md w-1/2 px-4 py-6 ">
      <h2 className="font-bold text-blue-500">{title}</h2>
      <p> Load : {load}</p>
      <p> Reps : {reps}</p>
    </div>
  );
};

export default WorkoutDetails;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AddWorkout = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [err, setErr] = useState(null);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };

    await axios.post("http://localhost:5000/api/workouts", workout);
    toast.success("Blog Successfully Added");
    setTitle("")
    setLoad("")
    setReps("")

  };

  return (
    <div className="container sm:w-full md:w-full lg:w-1/2 rounded-md shadow-md py-10 bg-gray-300 border-2 my-20 mx-auto">
      <h2 className="text-center text-2xl py-4 text-blue-400">Add A workout</h2>
      <form onSubmit={handleOnSubmit}>
        <div className="workout-container flex flex-col justify-center items-center">
          <div className=" sm:w-full mx-auto workout-items flex flex-row  gap-6 justify-center items-center ">
            <input
              className="w-1/2 mx-auto border-2 border-gray-500 rounded-md px-4 py-3 mb-3"
              type="text"
              name="title"
              placeholder="Give Workout title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="workout-items sm:w-full mx-auto flex flex-row  gap-6 justify-center items-center ">
            <input
              className="w-1/2 mx-auto border-2 border-gray-500 rounded-md px-4 py-3 mb-3"
              type="number"
              name="load"
              placeholder="Give Workout Load"
              onChange={(e) => setLoad(e.target.value)}
              value={load}
            />
          </div>
          <div className="workout-items sm:w-full mx-auto flex flex-row  gap-6 justify-center items-center ">
            <input
              className="w-1/2 mx-auto border-2 border-gray-500 rounded-md px-4 py-3 mb-3"
              type="number"
              name="reps"
              placeholder="Give Workout reps"
              onChange={(e) => setReps(e.target.value)}
              value={reps}
            />
          </div>
          <div className="btn w-1/2 mx-auto ">
            <button className="bg-blue-400 text-white text-xl border-2 border-gray-300 px-4 py-1 rounded-full sm:w-full">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddWorkout;

import React, { useEffect, useState } from "react";
import AddWorkout from "../components/AddWorkout";
import WorkoutDetails from "../components/WorkoutDetails";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const url = "http://localhost:5000/api/workouts";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWorkouts(data);
      });
  }, []);

  return (
    <div className="px-6 justify-center items-center gap-4 my-20">
      <div className="w-10/12 gap-10 bg-zinc-100 grid grid-cols-3 -z-100 h-screen mx-auto py-3">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
};

export default Home;

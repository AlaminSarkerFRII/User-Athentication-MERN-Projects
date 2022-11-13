import React, { useEffect, useState } from "react";
import AddWorkout from "../components/AddWorkout";
import WorkoutDetails from "../components/WorkoutDetails";
import Banner from "./Banner";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const url = "http://localhost:5000/api/workouts";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWorkouts(data.slice(0, 5));
      });
  }, []);

  return (
    <div className="my-10 text-center">
      <Banner />

      <div className="flex flex-col lg:flex-row flex-wrap gap-10 sm:w-full justify-center items-center bg-zinc-100 mx-auto py-3">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
};

export default Home;

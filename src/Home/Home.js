import React, { useEffect, useState } from "react";
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
    <div className="home-main px-10">
      <div className="main bg-zinc-100 -z-100 h-screen w-10/12 mx-auto py-3">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
};

export default Home;

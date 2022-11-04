import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Home from "./Home/Home";
import Navbar from "./components/Navbar";
import AddWorkout from "./components/AddWorkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/addWorkout" element={<AddWorkout />}></Route>
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;

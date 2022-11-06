import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Home from "./Home/Home";
import Navbar from "./components/Navbar";
import AddWorkout from "./components/AddWorkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import UpdateUser from "./components/UpdateUser";
import DetailsUser from "./components/DetailsUser";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/addWorkout" element={<AddWorkout />}></Route>
        <Route path="/update-user/:id" element={<UpdateUser />}></Route>
        <Route path="/details-user/:id" element={<DetailsUser />}></Route>
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;

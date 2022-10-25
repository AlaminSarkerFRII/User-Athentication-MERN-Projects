import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Home from "./Home/Home";
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
    </>
  );
}

export default App;

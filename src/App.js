import { Routes, Route } from "react-router-dom";
import Home from "./App/Home";
import Login from "./App/Login";
import Signup from "./App/Signup";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  );
};

export default App;

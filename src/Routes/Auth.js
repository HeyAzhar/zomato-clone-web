import { Routes, Route, Navigate } from "react-router-dom";

import { PublicRoute } from "../Config/authService";
import Login from "../App/Login";
import Signup from "../App/Signup";
import RegisterRestaurant from "../App/RegisterRestaurant";
import NotFound from "../App/NotFound";

const Auth = () => (
  <PublicRoute>
    <Routes>
      <Route index element={<Navigate replace to='login' />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='register-restaurant' element={<RegisterRestaurant />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </PublicRoute>
);

export default Auth;

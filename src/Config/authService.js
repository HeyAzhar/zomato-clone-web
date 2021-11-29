import { Navigate } from "react-router-dom";
import jwt from "jsonwebtoken";

import { ROLE } from "../Utils/constants";

export const currentUser = () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) return null;

    return jwt.verify(token, process.env.REACT_APP_SECRET);
  } catch (err) {
    return null;
  }
};

//==>> Public Routes

export const PublicRoute = ({ children }) =>
  currentUser() ? <Navigate replace to='/' /> : children;

//==>> Secured Routes

export const SecureRoute = ({ children }) =>
  currentUser() ? children : <Navigate replace to='/auth/login' />;

//==>> Admin Routes

export const AdminRoute = ({ children }) =>
  currentUser().role !== ROLE.ADMIN ? <Navigate replace to='/' /> : children;

//==>> Restaurant Routes

export const RestaurantRoute = ({ children }) =>
  currentUser().role !== ROLE.RESTAURANT ? (
    <Navigate replace to='/' />
  ) : (
    children
  );

//==>> User Routes

export const UserRoute = ({ children }) =>
  currentUser().role !== ROLE.USER ? <Navigate replace to='/' /> : children;

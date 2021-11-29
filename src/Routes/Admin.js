import { Routes, Route } from "react-router-dom";
import { AdminRoute } from "../Config/authService";
import NotFound from "../App/NotFound";
import AdminHome from "../App/Admin";

const Admin = () => (
  <AdminRoute>
    <Routes>
      <Route index element={<AdminHome />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </AdminRoute>
);

export default Admin;

import { Routes, Route } from "react-router-dom";
import { SecureRoute } from "../Config/authService";
import Home from "../App/Home";
import Admin from "./Admin";
import Restaurant from "./Restaurant";
import User from "./User";
import NotFound from "../App/NotFound";

const SecureApp = () => (
  <SecureRoute>
    <Routes>
      <Route index element={<Home />} />
      <Route path='admin/*' element={<Admin />} />
      <Route path='restaurant/*' element={<Restaurant />} />
      <Route path='user/*' element={<User />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </SecureRoute>
);

export default SecureApp;

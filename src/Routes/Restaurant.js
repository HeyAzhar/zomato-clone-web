import { Routes, Route } from "react-router-dom";
import { RestaurantRoute } from "../Config/authService";
import NotFound from "../App/NotFound";

const Restaurant = () => (
  <RestaurantRoute>
    <Routes>
      <Route index element={<h1>Welcome Restaurant</h1>} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </RestaurantRoute>
);

export default Restaurant;

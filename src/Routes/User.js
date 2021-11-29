import { Routes, Route } from "react-router-dom";

import NotFound from "../App/NotFound";
import { UserRoute } from "../Config/authService";
import { useStateValue } from "../Config/StateProvider";

const User = () => {
  const [{ user }] = useStateValue();

  return (
    <UserRoute>
      <Routes>
        <Route index element={<h1>Welcome {user?.name}</h1>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </UserRoute>
  );
};

export default User;

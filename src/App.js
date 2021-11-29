import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer, Flip } from "react-toastify";

import SecureApp from "./Routes/SecureApp";
import Auth from "./Routes/Auth";
import { currentUser } from "./Config/authService";
import { ACTION_TYPE } from "./Config/reducer";
import { useStateValue } from "./Config/StateProvider";

const App = () => {
  const [_, dispatch] = useStateValue();
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = currentUser();

    if (!loggedUser) {
      dispatch({ type: ACTION_TYPE.SET_USER, user: null });
      navigate("/auth/login");
    } else {
      dispatch({ type: ACTION_TYPE.SET_USER, user: loggedUser });
    }
  }, []);

  return (
    <>
      {/* ===>> Toastify  */}

      <ToastContainer
        hideProgressBar
        transition={Flip}
        autoClose={3000}
        position='bottom-right'
        theme='dark'
      />

      {/* ===>> Routes  */}

      <Routes>
        <Route path='/auth/*' element={<Auth />} />
        <Route path='/*' element={<SecureApp />} />
      </Routes>
    </>
  );
};

export default App;

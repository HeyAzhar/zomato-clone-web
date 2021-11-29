import { useStateValue } from "../../Config/StateProvider";
import { ROLE } from "../../Utils/constants";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [{ user }] = useStateValue();
  const navigate = useNavigate();

  useEffect(() => {
    !user && navigate("/auth/login");

    user?.role === ROLE.ADMIN && navigate("admin");
    user?.role === ROLE.RESTAURANT && navigate("restaurant");
    user?.role === ROLE.USER && navigate("user");
  }, [user]);

  return <h1>Launching...</h1>;
};

export default Home;

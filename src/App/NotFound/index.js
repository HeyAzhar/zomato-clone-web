import { Link } from "react-router-dom";

const NotFound = () => (
  <div
    style={{
      textAlign: "center",
      marginTop: "30vh",
    }}
  >
    <h1>
      Feeling lost?{" "}
      <Link className='unlink' to='/'>
        Go home
      </Link>
    </h1>
  </div>
);

export default NotFound;

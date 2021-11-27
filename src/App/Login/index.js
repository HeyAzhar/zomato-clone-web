import { TextField, Button, Container, Grid } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const URL = `${process.env.REACT_APP_API_URL}/user/login`;

    const newUser = await axios
      .post(URL, data)
      .catch((error) => console.log("Something went wrong", error));

    newUser?.data && navigate("/");

    return;
  };

  return (
    <Container maxWidth='md'>
      <h1>Login page</h1>

      <Grid item>
        <TextField
          defaultValue={data.phone || ""}
          onChange={handleChange}
          id='phone'
          label='Phone'
          variant='filled'
        />
      </Grid>

      <Grid item>
        <TextField
          defaultValue={data.password || ""}
          onChange={handleChange}
          id='password'
          type='password'
          label='Password'
          variant='filled'
        />
      </Grid>
      <Grid item>
        <Button onClick={handleLogin} variant='contained'>
          Login
        </Button>
        <Link to='/signup'>
          <Button variant='contained'>Signup</Button>
        </Link>
      </Grid>
    </Container>
  );
};

export default Login;

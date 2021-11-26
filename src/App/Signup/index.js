import { TextField, Button, Container, Grid } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const URL = "http://localhost:2000/api/user/signup";

    const newUser = await axios
      .post(URL, data)
      .catch((error) => console.log("Something went wrong", error));

    console.log(newUser);
  };

  return (
    <Container maxWidth='md'>
      <h1>Signup page</h1>
      <Grid item>
        <TextField
          defaultValue={data.name || ""}
          onChange={handleChange}
          id='name'
          label='Name'
          variant='filled'
        />
      </Grid>
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
          defaultValue={data.email || ""}
          onChange={handleChange}
          id='email'
          label='Email'
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
        <Button onClick={handleSignup} variant='contained'>
          Signup
        </Button>
      </Grid>
    </Container>
  );
};

export default Signup;

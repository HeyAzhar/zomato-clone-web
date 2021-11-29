import {
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import BrunchDiningOutlinedIcon from "@mui/icons-material/BrunchDiningOutlined";
import axios from "axios";
import HandleError from "../../Utils/handleError";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const URL = `${process.env.REACT_APP_API_URL}/user/signup`;
    let data = new FormData(e.currentTarget);
    data = Object.fromEntries(data);

    const newUser = await axios
      .post(URL, data)
      .catch((error) => HandleError(error));

    if (newUser?.data) {
      toast.success("Successfully registered, please login");
      navigate("/login", { replace: true });
    }
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          padding: 5,
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "-5px -5px 50px lightgrey",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "black" }}>
          <BrunchDiningOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Welcome
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='name'
            label='Name'
            name='name'
            autoComplete='name'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email'
            name='email'
            autoComplete='email'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='phone'
            label='Phone'
            name='phone'
            autoComplete='phone'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent='right'>
            <Link className='unlink' to='../login'>
              Already have an account? Login
            </Link>
            <Link className='unlink' to='/auth/register-restaurant'>
              Register your restaurent with us
            </Link>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

const Copyright = (props) => {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {"Copyright © "}
      <Link className='unlink' to='#'>
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default SignUp;

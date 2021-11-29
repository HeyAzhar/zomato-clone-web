import { toast } from "react-toastify";

const HandleError = (error) => {
  if (
    error.response &&
    (error.response.status === 400 ||
      error.response.status === 401 ||
      error.response.status === 403 ||
      error.response.status === 409)
  ) {
    return toast.error(`${error.response?.data?.message}`);
  } else {
    console.log("GOT ERROR ===>> ", error);
    return toast.error("Server Issue");
  }
};

export default HandleError;

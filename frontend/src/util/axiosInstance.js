import axios from "axios";

const axiosInstance = new axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

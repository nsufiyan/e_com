import axios from "axios";

const axiosInstanceBinary = new axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export default axiosInstanceBinary;

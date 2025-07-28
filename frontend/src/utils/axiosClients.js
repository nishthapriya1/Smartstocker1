// import axios from "axios"

// const axiosClient =  axios.create({
//     baseURL: 'http://localhost:5000',
//     withCredentials: true,
//     headers: {
//         'Content-Type': 'application/json'
//     }
// });


// export default axiosClient;

const axiosClient = axios.create({
  baseURL: 'https://your-backend-name.vercel.app', // replace with actual URL
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

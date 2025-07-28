const axiosClient = axios.create({
  baseURL: 'https://smartstocker1.vercel.app/', 
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

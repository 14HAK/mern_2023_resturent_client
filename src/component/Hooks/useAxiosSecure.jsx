import axios from 'axios';

const useAxiosSecure = () => {
  const axiosSecure = axios.create({
    baseURL: 'https://mern-2023-resturent-server.vercel.app',
  });

  // Request interceptor
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers['authorization'] = `bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        // Handle unauthorized access, e.g., redirect to login page
        // or clear token from localStorage
      }
      return Promise.reject(error);
    }
  );

  return [axiosSecure];
};

export default useAxiosSecure;

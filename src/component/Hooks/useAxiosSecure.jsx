import axios from 'axios';

const useAxiosSecure = () => {
  const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000',
  });

  // Request interceptor
  axiosSecure.interceptors.request.use(
    (config) => {
      // Get the token from localStorage
      const token = localStorage.getItem('access-token');
      if (token) {
        // Set the token in the request headers
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

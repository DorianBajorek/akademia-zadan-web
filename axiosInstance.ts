import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: 'https://www.akademiazadan.pl',
  withCredentials: true, // żeby ciasteczka (np. CSRF) były wysyłane
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // zmień, jeśli trzymasz token gdzie indziej
    const csrfToken = Cookies.get('csrftoken');

    if (token) {
      config.headers['Authorization'] =
        token.split('.').length === 3 ? `Bearer ${token}` : `Token ${token}`;
    }

    if (csrfToken) {
      config.headers['X-CSRFToken'] = csrfToken;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;

import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: 'https://www.akademiazadan.pl',
  withCredentials: true,
});

// === REQUEST INTERCEPTOR ===
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // Access token
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

// === RESPONSE INTERCEPTOR (odświeżanie tokena) ===

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      localStorage.getItem('refreshToken')
    ) {
      originalRequest._retry = true;

      if (isRefreshing) {
        // Inne żądania czekają na zakończenie odświeżania
        return new Promise(function (resolve, reject) {
          failedQueue.push({
            resolve: (token) => {
              originalRequest.headers['Authorization'] = `Bearer ${token}`;
              resolve(axiosInstance(originalRequest));
            },
            reject: (err) => reject(err),
          });
        });
      }

      isRefreshing = true;

      try {
        const response = await axios.post('https://www.akademiazadan.pl/api/auth/v1/token_refresh/', {
          refresh: localStorage.getItem('refreshToken'),
        });

        const newAccessToken = response.data.access;
        localStorage.setItem('authToken', newAccessToken);

        processQueue(null, newAccessToken);
        isRefreshing = false;

        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        isRefreshing = false;

        // Wyloguj użytkownika lub przekieruj do logowania
        localStorage.removeItem('authToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login'; // lub inna strona

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

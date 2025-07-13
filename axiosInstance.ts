import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: 'https://www.akademiazadan.pl',
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
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
type FailedRequest = {
  resolve: (token: string) => void;
  reject: (error: any) => void;
};

let failedQueue: FailedRequest[] = [];

function processQueue(error: any, token: string | null) {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else if (token) {
      prom.resolve(token);
    }
  });
  failedQueue = [];
}

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
        console.log('Token odświeżony:', response.data.access);
        const newAccessToken = response.data.access;
        localStorage.setItem('token', newAccessToken);

        processQueue(null, newAccessToken);
        isRefreshing = false;

        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        isRefreshing = false;


        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

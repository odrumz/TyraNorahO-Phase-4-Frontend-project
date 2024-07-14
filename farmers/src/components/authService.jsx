import axios from 'axios';

const API_URL = 'http://127.0.0.1:5555';  // Replace with your Flask server URL

const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Refresh token logic
        const newToken = await authService.refreshAccessToken();
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
        return axiosInstance(originalRequest);
      } catch (err) {
        authService.logout();
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

const authService = {
  register: async (email, name, password1, password2, gender) => {
    try {
      const response = await axiosInstance.post('/auth/signup', {
        email,
        name,
        gender,
        password1,
        password2
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  login: async (email, password) => {
    try {
      const response = await axiosInstance.post('/auth/login', {
        email,
        password,
      });
      return response.data; // Assuming response.data contains { token, refresh_token }
    } catch (error) {
      throw error.response.data;
    }
  },
  logout: () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  },

  getAccessToken: () => {
    return localStorage.getItem('access_token');
  },


};

export default authService;

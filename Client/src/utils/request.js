// api/axiosClient.js
import axios from 'axios';
import queryString from 'query-string';
import { setAccessToken } from './localStorage';
import jwt_decode from 'jwt-decode';
// Set up default config for http requests heret

const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

request.interceptors.request.use(async (config) => {
  const token = config.headers.token;
  if (!token) return config;
  const accessToken = token.split(' ')[1];
  if (!accessToken) return config;

  // Handle token here ...
  const date = new Date();
  const decodedToken = jwt_decode(accessToken);

  if (decodedToken.exp < date.getTime() / 1000) {
    const res = await request.post('/auth/refresh', { withCredentials: true });
    if (!res) return config;

    setAccessToken(res.accessToken || '');

    config.headers['token'] = `Bearer ${res.accessToken}`;
  }

  return config;
});

request.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  },
);

export default request;

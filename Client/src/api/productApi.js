import axiosClient from './axiosClient';

const productApi = {
  getAll: (params) => {
    const url = '/products';
    return axiosClient.get(url, { params });
  },
  get: (name) => {
    const url = `/product/${name}`;
    return axiosClient.get(url);
  },
};

export default productApi;

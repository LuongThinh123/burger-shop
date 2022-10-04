import axiosClient from './axiosClient';

const coursesApi = {
  getAll: (params) => {
    const url = '/courses';
    return axiosClient.get(url, { params });
  },
  get: (name) => {
    const url = `/courses/${name}`;
    return axiosClient.get(url);
  },
};

export default coursesApi;

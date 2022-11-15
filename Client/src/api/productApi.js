import request from '~/utils/request';

// const productApi = {
//   getAll: (params) => {
//     const url = '/products';
//     return axiosClient.get(url, { params });
//   },
//   get: (name) => {
//     const url = `/product/${name}`;
//     return axiosClient.get(url);
//   },
// };

export const getProducts = async (filterState) => {
  try {
    // console.log(params);
    const params = {
      page: filterState?.page,
      limit: filterState?.limit,
      search: filterState?.searchTitle,
      price: filterState?.price.join(','),
      sort: filterState?.sort,
      order: filterState?.order,
      categoryIdList: filterState?.categoryIdList.join(','),
    };
    // console.log(params);
    const result = await request.get(`/products`, { params });
    return result;
  } catch (err) {}
};

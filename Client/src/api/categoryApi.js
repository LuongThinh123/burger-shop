import request from '~/utils/request';

export const getCategories = async () => {
  try {
    const res = await request.get('/categories');
    return res;
  } catch (err) {}
};

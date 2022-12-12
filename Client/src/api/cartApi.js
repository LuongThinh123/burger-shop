import request from '~/utils/request';

export const addToCart = async (product, navigate) => {
  try {
    // console.log(params);

    // console.log(params);
    const result = await request.post(`/cart`, { product });
    if(result.status === 401) navigate('/login');
    return result;
  } catch (err) {}
};

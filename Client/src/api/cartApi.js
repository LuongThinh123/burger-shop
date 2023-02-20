import request from '~/utils/request';

export const addToCart = async (accessToken, product, navigate) => {
  try {
    const result = await request.post(`/cart`, product, { headers: { token: `Bearer ${accessToken}` } });
    if (result.status === 401) navigate('/login');
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const getCartProducts = async (accessToken) => {
  try {
    const result = await request.get(`/cart`, { headers: { token: `Bearer ${accessToken}` } });
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const updateCartItem = async (accessToken, product) => {
  try {
    const result = await request.post(`/cart/update`, product, { headers: { token: `Bearer ${accessToken}` } });
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const deleteCartItem = async (accessToken, productId) => {
  try {
    const result = await request.post(`/cart/delete`, { productId }, { headers: { token: `Bearer ${accessToken}` } });
    return result;
  } catch (err) {
    console.log(err);
  }
};

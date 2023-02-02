import request from '~/utils/request';

export const addOrder = async (accessToken, orderInfor) => {
  try {
    const result = await request.post(`/order`, orderInfor, { headers: { token: `Bearer ${accessToken}` } });
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const getOrders = async (accessToken, status) => {
  try {
    const params = {
      status: status,
    };
    const result = await request.get(`/order`, { headers: { token: `Bearer ${accessToken}` }, params });
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const updateOrderStatus = async (accessToken, orderStatusChangeInfor) => {
  try {
    const result = await request.post(`/order/update`, orderStatusChangeInfor, {
      headers: { token: `Bearer ${accessToken}` },
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};

import { priceFormat } from './priceFormat';

export const getAccessToken = () => {
  const accessToken = localStorage.getItem('accessToken');
  return accessToken ? JSON.parse(accessToken) : '';
};

export const setAccessToken = (accessToken) => {
  if (accessToken) localStorage.setItem('accessToken', JSON.stringify(accessToken));
  else localStorage.removeItem('accessToken');
};

//user storage
export const setUser = (user) => {
  if (user) localStorage.setItem('user', JSON.stringify(user));
  else localStorage.removeItem('user');
};

export const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : '';
};

// Cart Storage
export const getCartProducts = () => {
  const cartProducts = localStorage.getItem('cartProducts');
  return cartProducts ? JSON.parse(cartProducts) : '';
};

export const setCartProducts = (cartProducts) => {
  if (cartProducts) localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  else localStorage.removeItem('cartProducts');
};

export const removeCartProductsItem = (productId) => {
  const cart = getCartProducts();
  let temp = cart.filter((item) => item._id !== productId);
  localStorage.setItem('cartProducts', JSON.stringify(temp));
};

export const updateCartProductsItem = (productId, quantity) => {
  const cart = getCartProducts();
  for (let product of cart) {
    if (product._id === productId) {
      product.quantity = quantity;
    }
  }
  localStorage.setItem('cartProducts', JSON.stringify(cart));
};

export const getTotalCartProducts = () => {
  const cart = getCartProducts();
  let sum = 0;

  for (let product of cart) {
    sum += Number(product.sale) * Number(product.quantity);
  }

  return priceFormat(sum);
};

//Order ShippingInfor
export const getShippingInfor = () => {
  const shippingInfor = localStorage.getItem('ShippingInfor');
  return shippingInfor ? JSON.parse(shippingInfor) : '';
};

export const setShippingInfor = (Information) => {
  if (Information) localStorage.setItem('ShippingInfor', JSON.stringify(Information));
  else localStorage.removeItem('ShippingInfor');
};

//Order details
export const getOrderDetails = () => {
  const orderDetails = localStorage.getItem('OrderDetails');
  return orderDetails ? JSON.parse(orderDetails) : '';
};

export const setOrderDetails = (orderDetails) => {
  if (orderDetails) localStorage.setItem('OrderDetails', JSON.stringify(orderDetails));
  else localStorage.removeItem('OrderDetails');
};

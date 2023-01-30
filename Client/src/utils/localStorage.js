export const getAccessToken = () => {
  const accessToken = localStorage.getItem('accessToken');
  return accessToken ? JSON.parse(accessToken) : '';
};

export const setAccessToken = (accessToken) => {
  if (accessToken) localStorage.setItem('accessToken', JSON.stringify(accessToken));
  else localStorage.removeItem('accessToken');
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

  return sum;
};

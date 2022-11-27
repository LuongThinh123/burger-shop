export const loginSuccess = (payload) => ({
  type: 'login_success',
  payload,
});

export const loginFailed = (payload) => ({
  type: 'login_failed',
  payload,
});

export const registerSuccess = (payload) => ({
  type: 'register_success',
  payload,
});

export const registerFailed = (payload) => ({
  type: 'register_failed',
  payload,
});

export const logoutSuccess = (payload) => ({
  type: 'logout_success',
  payload,
});

export const logoutFailed = (payload) => ({
  type: 'logout_failed',
  payload,
});

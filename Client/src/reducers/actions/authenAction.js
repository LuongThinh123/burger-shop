export const loginSuccess = (payload) => ({
  type: 'login_success',
  payload,
});

export const loginFailed = (payload) => ({
  type: 'login_failed',
  payload,
});

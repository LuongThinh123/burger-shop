import request from '~/utils/request';
import { setAccessToken } from '~/utils/localStorage';
import {
  registerSuccess,
  registerFailed,
  loginSuccess,
  loginFailed,
  logoutSuccess,
  logoutFailed,
} from '~/reducers/actions/authenAction';

export const login = async (user, dispatch, navigate) => {
  try {
    const res = await request.post(`/auth/login`, user);
    setAccessToken(res.accessToken || '');
    dispatch(loginSuccess(res));
    navigate('/');
  } catch (err) {
    dispatch(loginFailed());
  }
};

export const register = async (user, dispatch, navigate) => {
  try {
    const res = await request.post(`/auth/register`, user);
    dispatch(registerSuccess(''));
    navigate('/login');
    // return res;
  } catch (err) {
    dispatch(registerFailed(''));
  }
};

export const logout = async (accessToken, dispatch, navigate) => {
  try {
    await request.post(`/auth/logout`, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(logoutSuccess());
    navigate('/login');
  } catch (err) {
    dispatch(logoutFailed(err));
  }
};

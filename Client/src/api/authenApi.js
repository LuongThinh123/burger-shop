import request from '~/utils/request';
import { loginSuccess, loginFailed } from '~/reducers/actions/authenAction';

export const login = async (user, dispatch, navigate) => {
  try {
    const res = await request.post(`/auth/login`, user);
    dispatch(loginSuccess(res.data));
    navigate('/');
    // return res;
  } catch (err) {
    dispatch(loginFailed());
  }
};

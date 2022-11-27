import { setAccessToken } from '~/utils/localStorage';

const initState = {
  login: {
    currentUser: null,
    error: false,
  },
  register: {
    error: false,
    success: false,
  },
  logout: {
    error: false,
  },
};

function authenReducer(state, action) {
  switch (action.type) {
    case 'login_success':
      return {
        ...state,
        login: {
          ...state.login,
          currentUser: action.payload,
          error: false,
        },
      };
    case 'login_failed':
      return {
        ...state,
        login: {
          ...state.login,
          error: true,
        },
      };
    case 'register_success':
      return {
        ...state,
        register: {
          ...state.register,
          success: true,
        },
      };
    case 'register_failed':
      return {
        ...state,
        register: {
          ...state.register,
          error: true,
        },
      };
    case 'logout_success':
      setAccessToken('');
      return {
        ...state,
        login: {
          ...state.login,
          currentUser: null,
        },
      };
    case 'logout_failed':
      return {
        ...state,
        logout: {
          error: true,
        },
      };
    default:
      throw new Error('Invalid action');
  }
}

export { initState };
export default authenReducer;

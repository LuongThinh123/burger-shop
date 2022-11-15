const initState = {
  login: {
    currentUser: null,
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
    default:
      throw new Error('Invalid action');
  }
}

export { initState };
export default authenReducer;

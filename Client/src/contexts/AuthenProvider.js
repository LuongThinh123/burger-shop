import { createContext, useReducer } from 'react';
import authenReducer, { initState } from '~/reducers/authenReducer';

const AuthenContext = createContext();

function AuthenProvider({ children }) {
  const [authenState, authenDispatch] = useReducer(authenReducer, initState);
  return <AuthenContext.Provider value={[authenState, authenDispatch]}>{children}</AuthenContext.Provider>;
}

export { AuthenContext };
export default AuthenProvider;

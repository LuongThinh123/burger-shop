import React, { createContext, useReducer } from 'react';
import toastReducer, { initState } from '~/reducers/toastReducer';

const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toastState, toastDispatch] = useReducer(toastReducer, initState);
  //   const notification = [
  //     {
  //       id: uuidv4(),
  //       type: 'SUCCESS',
  //       title: 'Successfuly fetched data',
  //       message: 'Successfully received data',
  //     },
  //   ];

  return <ToastContext.Provider value={[toastState, toastDispatch]}>{children}</ToastContext.Provider>;
}

export { ToastContext };
export default ToastProvider;

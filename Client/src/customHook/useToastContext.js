import { useContext } from 'react';
import { ToastContext } from '~/contexts/ToastProvider';

function useToastContext() {
  const [toastState, toastDispatch] = useContext(ToastContext);
  return [toastState, toastDispatch];
}

export default useToastContext;

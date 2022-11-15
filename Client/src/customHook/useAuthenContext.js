import { useContext } from 'react';
import { AuthenContext } from '~/contexts/AuthenProvider';

// fuseAuthenContext = () => {
//   const [filterState, filterDispatch] = useContext(AuthenContext);
//   return [filterState, filterDispatch];
// };

function useAuthenContext() {
  const [authenState, authenDispatch] = useContext(AuthenContext);
  return [authenState, authenDispatch];
}

export default useAuthenContext;

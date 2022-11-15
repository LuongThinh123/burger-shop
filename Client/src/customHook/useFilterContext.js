import { useContext } from 'react';
import { FilterContext } from '~/contexts/FilterProvider';

// fuseFilterContext = () => {
//   const [filterState, filterDispatch] = useContext(FilterContext);
//   return [filterState, filterDispatch];
// };

function useFilterContext() {
  const [filterState, filterDispatch] = useContext(FilterContext);
  return [filterState, filterDispatch];
}

export default useFilterContext;

import { createContext, useReducer } from 'react';
import filterReducer, { initState } from '~/reducers/filterReducer';

const FilterContext = createContext();

function FilterProvider({ children }) {
  const [filterState, filterDispatch] = useReducer(filterReducer, initState);
  return <FilterContext.Provider value={[filterState, filterDispatch]}>{children}</FilterContext.Provider>;
}

export { FilterContext };
export default FilterProvider;

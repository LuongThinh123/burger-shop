const initState = {
  searchTitle: '',
  categoryIdList: [],
  price: [],
  page: 1,
  sort: '',
  order: '',
};

function filterReducer(state, action) {
  switch (action.type) {
    case 'add_category':
      return {
        ...state,
        categoryIdList: [...state.categoryIdList, action.payload],
        page: 1,
      };
    case 'delete_category':
      return {
        ...state,
        categoryIdList: state.categoryIdList.filter((e) => e !== action.payload),
        page: 1,
      };
    case 'set_search_title':
      return {
        ...state,
        searchTitle: action.payload,
        page: 1,
      };
    case 'set_price_filter':
      return {
        ...state,
        price: [...action.payload],
        page: 1,
      };
    case 'set_sort':
      return {
        ...state,
        sort: action.payload[0],
        order: action.payload[1],
        page: 1,
      };
    case 'change_page':
      return {
        ...state,
        page: action.payload,
      };
    case 'clear_filter':
      return {
        ...initState,
      };
    default:
      throw new Error('Invalid action');
  }
}

export { initState };
export default filterReducer;

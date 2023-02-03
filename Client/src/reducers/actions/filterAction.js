export const addCategory = (payload) => ({
  type: 'add_category',
  payload,
});

export const deleteCategory = (payload) => ({
  type: 'delete_category',
  payload,
});

export const changePage = (payload) => ({
  type: 'change_page',
  payload,
});

export const setSort = (payload) => ({
  type: 'set_sort',
  payload,
});

export const setPriceFilter = (payload) => ({
  type: 'set_price_filter',
  payload,
});

export const setSearchTitle = (payload) => ({
  type: 'set_search_title',
  payload,
});

export const clearFilter = (payload) => ({
  type: 'clear_filter',
  payload,
});

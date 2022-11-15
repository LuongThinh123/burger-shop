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


export const setSortBy = (payload) => ({
  type: 'SET_SORT_BY',
  payload,
})

export const setCategory = (categoryIndex) => ({
  type: 'SET_CATEGORY',
  payload: categoryIndex,
})

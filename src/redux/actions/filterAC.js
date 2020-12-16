export const setSortBy = (name) => ({
  type: 'SORT_BY',
  payload: name,
})

export const setCategory = (categoryIndex) => ({
  type: 'SET_CATEGORY',
  payload: categoryIndex,
})

import axios from 'axios'

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false))
  axios
    .get(
      `http://localhost:3001/pizzas?${
        category > 0 && `category=${category - 1}`
      }&_sort=${sortBy.type}&_order=${sortBy.order}`,
      // `http://localhost:3001/pizzas?category=${category}&sort=${sortBy}&_order=asc`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data))
    })
}

export const setPizzas = (items) => ({
  type: 'SET_PIZZA',
  payload: items,
})

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
})

const initialState = {
  sortBy: 'popular',
  category: 0,
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SORT_BY':
      return {
        ...state,
        sortBy: action.payload,
      }
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload,
      }
    default: {
      return state
    }
  }
}

export default filterReducer

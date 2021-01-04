const initialState = {
  itemssss: [],
  isLoaded: false,
}

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PIZZA':
      return {
        ...state,
        itemssss: action.payload,
        isLoaded: true,
      }
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      }
    default:
      return state
  }
}

export default pizzaReducer

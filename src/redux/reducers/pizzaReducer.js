const initialState = {
  itemssss: [],
}

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PIZZA':
      return {
        ...state,
        itemssss: action.payload,
      }
    default:
      return state
  }
}

export default pizzaReducer

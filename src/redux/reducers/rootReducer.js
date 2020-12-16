import { combineReducers } from 'redux'
import filterReducer from './filterReducer'
import pizzaReducer from './pizzaReducer'

const rootReducer = combineReducers({
  pizzasss: pizzaReducer,
  filters: filterReducer,
})

export default rootReducer

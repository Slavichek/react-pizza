import './scss/app.scss'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import * as axios from 'axios'
import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setPizzas } from './redux/actions/pizzaAC'

class App extends Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.sohranitPizza(data.pizzas)
    })
  }
  debugger
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Route
          exact
          path="/"
          render={() => <Home items={this.props.items} />}
        />
        <Route exact path="/cart" component={Cart} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzasss.itemssss,
    filters: state.filters,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sohranitPizza: (items) => dispatch(setPizzas(items)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

// function App() {
//   const [pizzaList, setPizza] = useState([])

//   useEffect(() => {
//     axios
//       .get('http://localhost:3000/db.json')
//       .then(({ data }) => setPizza(data.pizzas))
//     fetch('http://localhost:3000/db.json')
//       .then((response) => response.json())
//       .then((json) => setPizza(json.pizzas))
//   }, [])

//   return (
//     <div className="wrapper">
//       <Header />
//       <Route exact path="/" render={() => <Home items={pizzaList} />} />
//       <Route exact path="/cart" component={Cart} />
//     </div>
//   )
// }

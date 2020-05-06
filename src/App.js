import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Products from './components/list'
import MyOrders from './components/myorders'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />

            <Route exact path="/profile" component={Profile} />
            <Route exact path="/myorders" component={MyOrders} />
            <Route exact path="/list" component={Products} />




          </div>
        </div>
      </Router>
    )
  }
}

export default App
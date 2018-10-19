import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header></Header>
          <BrowserRouter>
            <div>
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </div>            
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

// import store from './store'

import User from './components/User';
import Admin from './components/Admin';
import Login from './components/Login'

ReactDOM.render((
  <Router>
    <div>
      <Route exact path='/' component={User} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/admin' component={Admin} />
    </div>
  </Router>
), document.getElementById('root'))

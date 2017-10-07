import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom'

// import store from './store'

import Events from './components/Events'
import Admin from './components/Admin'
import Login from './components/Login'
import Event from './components/Event'

ReactDOM.render((
  <Router>
    <div>
      <Route exact path='/' component={Login} />
      <Route exact path='/events' component={Events} />
      <Route exact path='/admin' component={Admin} />
      <Route exact path='/event/:id' component={Event} />
    </div>
  </Router>
), document.getElementById('root'))

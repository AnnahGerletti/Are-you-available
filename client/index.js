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
      <Route exact path='/:user/events' component={Events} />
      <Route exact path='/:user/admin' component={Admin} />
      <Route exact path='/:user/event/:id' component={Event} />
    </div>
  </Router>
), document.getElementById('root'))

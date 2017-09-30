import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom'

import User from './components/User';
import Admin from './components/Admin';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Router>
    <div>
      <Route exact path='/' component={User} />
      <Route exact path='/admin' component={Admin} />
    </div>
  </Router>
), document.getElementById('root'))
// registerServiceWorker();

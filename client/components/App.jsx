import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Events from './Events'
import Admin from './Admin'
import Login from './Login'
import Event from './Event'
import Footer from './Footer'

const App = () => {
  return (
        <Router>
          <div>
            <Route exact path='/' component={Login} />
            <Route exact path='/:user/events' component={Events} />
            <Route exact path='/:user/admin' component={Admin} />
            <Route exact path='/:user/event/:eventid' component={Event} />
            <Footer />
          </div>
        </Router>
  )
}

export default App

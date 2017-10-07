import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import 'rc-calendar/assets/index.css'

// import logo from '../logo.svg';
import '../App.css'
import Header from './Header'
import api from  '../api'

class Events extends Component {
  constructor(props){
    super(props)
    this.state = {
      events: []
    }
    api.listEvents = api.listEvents.bind(this)
  }

  componentWillMount() {
    api.listEvents()
  }

  render () {
    console.log(this.state.events)
    return (
      <div className="App">
        <Header name='When are you Avalaible'/>
        <div className="Main-container">
          <div className="Pic-container">
            <p> future picture </p>
          </div>
          <div className="Dir-container">
            <p>
                Please follow these directions for how to use this app.<br/>
                Please select the range of dates you can attend the event.<br/>
                only select one set of dates.
            </p>
            {this.state.events.map((name) =>{
              return <p>{name.eventName}</p>
            })}
            <Link to='/event'>Event</Link>
          </div>
        </div>
      </div>
    )
    }
  }

export default Events

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
            <img src='/images/event.jpg'/>
          </div>
          <div className="Dir-container">
            <p>
                Please follow these directions for how to use this app.<br/>
                Please select the range of dates you can attend the event.<br/>
                only select one set of dates.
            </p>

            <ul>{this.state.events.map((name) =>{
              const link = "/event/" + name.id
              return <li><Link to={link} key={name.id}>{name.eventName}</Link></li>
            })}
          </ul>
          </div>
        </div>
      </div>
    )
    }
  }

export default Events

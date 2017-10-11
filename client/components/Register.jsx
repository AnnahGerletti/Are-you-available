import React from 'react'
import RangeCalendar from 'rc-calendar/lib/RangeCalendar'

import Header from './Header'
import helper from '../helper'


export default class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newEvent: {}
    }
    this.saveNewEvent = this.saveNewEvent.bind(this)
    this.updateNewEvent = this.updateNewEvent.bind(this)
  }
  updateNewEvent (e) {
    let newEvent = this.state.newEvent
    newEvent[e.target.name] = e.target.value
    this.setState({newEvent: newEvent})
  }
  saveNewEvent (e) {
    e.preventDefault()
  }
  render () {
    return (
      <div className="App">
          <div className="Main-container">
            <div className="Cal-container">
                <RangeCalendar onSelect={helper.onStandaloneSelect} disabledDate={helper.disabledDate}/>
                <button>Select These Dates</button>
            </div>
            <div className="Form-container">
              <form onSubmit={this.saveNewEvent}>
                <p><input className="Register-form" name="name" placeholder="Event Name" type="text" onChange={(e) => this.updateNewEvent(e)}/></p>
                <p><input className="Register-form" name="name" placeholder="Start Date" type="" onChange={(e) => this.updateNewEvent(e)}/></p>
                <p><input className="Register-form" name="name" placeholder="End Date" type="" onChange={(e) => this.updateNewEvent(e)}/></p>
                <p><input className="Register-form" name="name" placeholder="Event Description" type="textarea" onChange={(e) => this.updateNewEvent(e)}/></p>
                <input className="Register-button" type="submit"/>
              </form>
            </div>
       </div>
    </div>
    )
  }
}

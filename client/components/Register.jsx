import React from 'react'
import RangeCalendar from 'rc-calendar/lib/RangeCalendar'

import Header from './Header'

const formatStr = 'YYYY-MM-DD HH:mm:ss';
function format(v) {
    return v
        ? v.format(formatStr)
        : '';
}
function onStandaloneSelect(value) {
    console.log('onSelect');
    console.log(format(value[0]), format(value[1]));
}

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
    console.log({e})
  }
  render () {
    return (
      <div className="App">
        <Header name='Admin Schedule Events' />
          <div className="Main-container">
            <div className="Cal-container">
                <RangeCalendar onSelect={onStandaloneSelect}/>
                <button>Select These Dates</button>
            </div>
            <div className="Form-container">
              <form onSubmit={this.saveNewEvent}>
                <p><input className="Register-form" name="name" placeholder="Event Name" type="text" onChange={(e) => this.updateNewEvent(e)}/></p>
                <p><input className="Register-form" name="name" placeholder="Event Discription" type="textarea" onChange={(e) => this.updateNewEvent(e)}/></p>
                <p><input className="Register-form" name="name" placeholder="Start Date" type="" onChange={(e) => this.updateNewEvent(e)}/></p>
                <p><input className="Register-form" name="name" placeholder="End Date" type="" onChange={(e) => this.updateNewEvent(e)}/></p>
                <input className="Register-button" type="submit"/>
              </form>
            </div>
       </div>
    </div>
    )
  }
}

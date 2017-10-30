import React from 'react'
import {Link} from 'react-router-dom'
import 'rc-calendar/assets/index.css'
import RangeCalendar from 'rc-calendar/lib/RangeCalendar'
import moment from 'moment';
import 'moment/locale/en-gb';

import Header from './Header'
import api from '../apiClient'

const formatStr = 'YYYY-MM-DD';
function format(v) {
    return v
        ? v.format(formatStr)
        : '';
}

function disabledDate(current) {
  const date = moment();
  date.hour(0);
  date.minute(0);
  date.second(0);
  return current.isBefore(date);  // can not select days before today
}


class Event extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            event: {}
        }
    this.saveEvent = this.saveEvent.bind(this)
    this.backToEvents = this.backToEvents.bind(this)
    this.setDates = this.setDates.bind(this)
    this.datesSaved = this.datesSaved.bind(this)
    }

    componentDidMount(){
      api.getEvent(this.props.match.params.eventid, this.saveEvent)
    }

    saveEvent(err, event){
      if(!err){
        this.setState({event})
      }
    }

    backToEvents(e){
      const userId = this.props.match.params.user
      this.props.history.push(`/${userId}/events`)
    }

    datesSaved(e){
      alert('your dates have been saved')
    }

    setDates(dates) {
      const saveDates = {
        start:format(dates[0]), end:format(dates[1]), user_id:this.props.match.params.user, event_id:this.props.match.params.eventid
      }
        api.insertDate(saveDates, this.datesSaved)
    }

    render() {
        return (
            <div className="App">
                <Header name={this.state.event.eventName} />
              <div className="Event-body">
                <button className="Back-button" onClick={this.backToEvents}>Return to Events Page </button>
                <div className="Main-container">
                      <div className='Event-details'>
                          <p>{this.state.event.description}</p>
                          <p>Date Range begins: {this.state.event.rangeStart}</p>
                          <p>Date Range ends: {this.state.event.rangeEnd}</p>
                          <img src={this.state.event.photo} />
                      </div>
                      <div className="Cal-container">
                        <RangeCalendar onSelect={this.setDates} disabledDate={disabledDate}/>
                      </div>
                </div>
              </div>
            </div>
        )
    }
}

export default Event

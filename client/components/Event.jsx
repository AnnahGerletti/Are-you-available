import React from 'react'
import {Link} from 'react-router-dom'
import 'rc-calendar/assets/index.css'
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

class Event extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dates: {
                start: '',
                end: ''
            }
        }
    }
    render() {
        return (
            <div className="App">
                <Header name='A single Event' />
                <div className="Main-container">
                    <div className="Cal-container">
                        <RangeCalendar onSelect={onStandaloneSelect}/>
                        <button>Select These Dates</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Event

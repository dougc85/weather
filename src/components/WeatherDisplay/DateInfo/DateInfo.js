import { React, Component } from 'react';
import './DateInfo.css';

class DateInfo extends Component {

    getDayOfWeek() {
        const day = (new Date(this.props.dt)).getUTCDay();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        return days[day];
    }

    getCurrentTime() {
        const date = new Date(this.props.dt);
        let hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        let ampm = 'am';
        if (hours === 0) {
            hours = 12;
        } else if (hours === 12) {
            ampm = 'pm';
        } else if (hours > 12) {
            hours -= 12;
            ampm = 'pm';
        }

        return (hours + ':' + minutes + ' ' + ampm);
        
    }

    render() {
        this.getDayOfWeek();
        return (
            <div className="DateInfo">
                <p className="DateInfo-Day">{this.getDayOfWeek()}</p>
                <p className="DateInfo-Time">{this.getCurrentTime()}</p>
            </div>
        )
    }
}

export default DateInfo;
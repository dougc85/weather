import { React, Component } from 'react';
import './DateInfo.css';

class DateInfo extends Component {

    getDayOfWeek() {
        const day = this.props.day;
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        return days[day];
    }

    getCurrentTime() {
        const date = new Date(this.props.dt);
        let hours = date.getUTCHours();
        let minutes = date.getUTCMinutes().toString();
        let ampm = 'am';

        if (minutes.length === 1) {
            minutes = '0'.concat(minutes);
        }
        
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
                <p className="DateInfo-day">{this.getDayOfWeek()}</p>
                <p className="DateInfo-time">{this.getCurrentTime()}</p>
            </div>
        )
    }
}

export default DateInfo;
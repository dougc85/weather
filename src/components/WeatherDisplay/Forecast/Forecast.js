import { React, Component } from 'react';
import './Forecast.css';
import Day from './Day/Day';

class Forecast extends Component {

    render() {

        const dayArray = [
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
        ]
        const sevenDayArray = this.props.daily.slice(1, 8);

        return (
            <div className="Forecast">
                <h3 className="Forecast-heading">7 Day Forecast</h3>
                <div className="Forecast-days"> 
                {sevenDayArray.map((dayData, idx) => {
                    const currentDayId = (this.props.day + idx + 1) % 7;
                    const currentDay = dayArray[currentDayId];
                    return (
                        <Day data={dayData} dayOfWeek={currentDay} key={currentDay} units={this.props.units}  convertFtoC={this.props.convertFtoC}/>
                        )
                    }
                    )}
                </div>
            </div>
        )
    }
}

export default Forecast;
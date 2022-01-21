import { React, Component } from 'react';
import './Day.css';

class Day extends Component {
    render() {
        const icon = `http://openweathermap.org/img/wn/${this.props.data.weather[0].icon}@2x.png`;
        const text = this.props.data.weather[0].main;
        let min = this.props.data.temp.min;
        let max = this.props.data.temp.max;

        min = (this.props.units === 'c') ? this.props.convertFtoC(min) : Math.round(min);
        max = (this.props.units === 'c') ? this.props.convertFtoC(max) : Math.round(max);

        return (
            <div className="Day" key={this.props.dayOfWeek} >
                <p className="Day-name">{this.props.dayOfWeek}</p>
                <img className="Day-icon" src={icon} alt={text} />
                <p className="Day-temps" >
                    <span className="Day-temps-max">{max}º</span>
                    <span className="Day-temps-min">{min}º</span>
                </p>
            </div>
        )
    }
}

export default Day;
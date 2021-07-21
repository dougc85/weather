import { React, Component } from 'react';
import './WeatherDisplay.css';
import City from './City/City';
import DateInfo from './DateInfo/DateInfo';
import Temp from './Temp/Temp';
import Conditions from './Conditions/Conditions';
import Forecast from './Forecast/Forecast';

class WeatherDisplay extends Component {

    constructor(props) {
        super(props);

        this.state = {
            units: 'f',
        }

        this.changeUnitsToC = this.changeUnitsToC.bind(this);
        this.changeUnitsToF = this.changeUnitsToF.bind(this);
    }

    changeUnitsToC() {
        this.setState({
            units: 'c',
        });
    }

    changeUnitsToF() {
        this.setState({
            units: 'f',
        })
    }

    convertFtoC(temp) {
        return Math.round((temp - 32) / 1.8000);
    }


    render() {
        console.log(this.props.weatherData);
        console.log(this.props.locData);

        const { current, daily, timezone_offset } = this.props.weatherData;

        return (
            <div className="WeatherDisplay">
                <City locData={this.props.locData} />
                <DateInfo dt={(current.dt + timezone_offset) * 1000} />
                <Temp units={this.state.units} changeUnitsToC={this.changeUnitsToC} changeUnitsToF={this.changeUnitsToF} convertFtoC={this.convertFtoC} temp={current.temp} feels={current.feels_like} />
                <Conditions units={this.state.units} weather={current.weather[0]} currentPic={this.props.currentPic} />
                <Forecast daily={daily} />
            </div>
        )
    }
}

export default WeatherDisplay;
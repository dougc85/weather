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

        this.dt = (this.props.weatherData.current.dt + this.props.weatherData.timezone_offset) * 1000;
        this.day = (new Date(this.dt)).getUTCDay();

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

        const { current, daily } = this.props.weatherData;

        return (
            <div className="WeatherDisplay">
                <City locData={this.props.locData} />
                <div className="WeatherDisplay-today">
                    <DateInfo dt={this.dt} day={this.day} />
                    <Conditions units={this.state.units} weather={current.weather[0]} currentPic={this.props.currentPic} />
                    <Temp units={this.state.units} changeUnitsToC={this.changeUnitsToC} changeUnitsToF={this.changeUnitsToF} convertFtoC={this.convertFtoC} temp={current.temp} feels={current.feels_like} />
                </div>
                <Forecast daily={daily} units={this.state.units} day={this.day}  convertFtoC={this.convertFtoC}/>
            </div>
        )
    }
}

export default WeatherDisplay;
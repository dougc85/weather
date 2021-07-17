import { React, Component } from 'react';

class WeatherDisplay extends Component {
    render() {
        console.log(this.props.weatherData);
        console.log(this.props.locData);
        
        return (
            <div className="WeatherDisplay">
                <img src={this.props.currentPic} alt='current weather icon' />
            </div>
        )
    }
}

export default WeatherDisplay;
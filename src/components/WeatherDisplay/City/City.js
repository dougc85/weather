import { React, Component } from 'react';
import './City.css';

class City extends Component {

    capitalize(city) {
        const cityArray = city.split(' ');

        const newCityArray = cityArray.map(word => (
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ))
        return newCityArray.join(' ');
    }

    generateName() {

        const { city, state, country } = this.props.locData;

        let finalLocation = '';

        if (!country) {
            finalLocation = city;
        } else {
            finalLocation += city + ', '

            if (country === "USA") {
                //Add the state
                finalLocation += state + ', ';
            }

            finalLocation += country;
        }

        return finalLocation;
    }

    render() {
        return (
            <p className="City">{this.generateName()}</p>
        )
    }
}

export default City;
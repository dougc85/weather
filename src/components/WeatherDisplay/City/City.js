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

        let finalLocation = '';

        finalLocation += this.capitalize(this.props.locData.city) + ', '

        if (this.props.locData.country === "United States of America") {
            //Add the state
            finalLocation += this.props.locData.statename + ', ';
        }

        finalLocation += this.props.locData.country;

        return finalLocation;
    }

    render() {
        return (
            <p className="City">{this.generateName()}</p>
        )
    }
}

export default City;
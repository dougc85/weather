import { React, Component } from 'react';
import './Conditions.css';

class Conditions extends Component {
    render() {

        const { main, description } = this.props.weather;
        return (
            <div className="Conditions">
                <p className="Conditions-main">{main}</p>
                <img className="Conditions-icon" src={this.props.currentPic} alt={'current weather icon'}></img>
                <p className="Conditions-description">{description}</p>
            </div>
        )
    }
}

export default Conditions;
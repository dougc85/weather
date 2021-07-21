import { React, Component } from 'react';
import './Conditions.css';

class Conditions extends Component {
    render() {

        const { main, description } = this.props.weather;
        return (
            <div className="Conditions">
                <p className="Conditions-main">{main}</p>
                <p className="Conditions-description">{description}</p>
                <img className="Conditions-icon" src={this.props.currentPic} alt={'current weather icon'}></img>
            </div>
        )
    }
}

export default Conditions;
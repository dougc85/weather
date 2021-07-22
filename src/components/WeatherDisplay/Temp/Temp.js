import { Component, React } from 'react';
import './Temp.css';

class Temp extends Component {
    render() {

        let temp = this.props.temp;
        let feels = this.props.feels;

        if (this.props.units === 'c') {
            temp = this.props.convertFtoC(temp);
            feels = this.props.convertFtoC(feels);
        }

        const buttonText = this.props.units === 'f' ? 'Change to ºc' : 'Change to ºf';
        const buttonAction = this.props.units === 'f' ? this.props.changeUnitsToC : this.props.changeUnitsToF;

        return(
            <div className="Temp">
                <div className="Temp-container">
                    <p className="Temp-current">{Math.round(temp)}º {this.props.units}</p>
                    <p className="Temp-feels">feels like {Math.round(feels)}º {this.props.units}</p>
                </div>
                <button className="Temp-change-units" onClick={buttonAction}>{buttonText}</button>
            </div>
        )
    }
}

export default Temp;
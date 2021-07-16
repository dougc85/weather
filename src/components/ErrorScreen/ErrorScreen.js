import { React, Component } from 'react';
import './ErrorScreen.css';

class ErrorScreen extends Component {
    render() {
        return (
            <div className="ErrorScreen">
                <h2 className="ErrorScreen-heading">
                    No results found for '{this.props.userSearch}'
                </h2>
                <p className="ErrorScreen-directions">Double check the following:</p>
                <ul>
                    <li>US City, State searches use abbreviation for the State
                        <span>Example: New York, NY</span>
                    </li>
                    <li>All words spelled correctly?</li>
                    <li>When searching by country, spelling must match one of the following EXACTLY:</li>
                </ul>
                <ul>
                    {this.props.countries.map(country => {
                        return (<li key={country}>{country.replaceAll('+', '  ')}</li>);
                    })} 
                </ul>

            </div>
        )
    }
}

export default ErrorScreen;


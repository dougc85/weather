import { React, Component } from 'react';
import './ErrorScreen.css';

class ErrorScreen extends Component {

    render() {

        //Defensive - error page works even if user types into URL directly
        const searchTerm = (this.props.userSearch === 'tue8fmcn234-7#') ?
                           this.props.urlSearch :
                           this.props.userSearch;

        return (
            <div className="ErrorScreen">
                <h2 className="ErrorScreen-heading">
                    No results found for '{searchTerm}'
                </h2>
                <p className="ErrorScreen-directions">Double check the following:</p>
                <ul className="ErrorScreen-guidelines">
                    <li  className="ErrorScreen-guidelines-guideline">US City, State - Abbreviate State Name
                        <span className="ErrorScreen-guidelines-guideline-example">Example: New York, <span className="highlight">NY</span></span>
                    </li>
                    <li  className="ErrorScreen-guidelines-guideline">All words spelled correctly?</li>
                    <li  className="ErrorScreen-guidelines-guideline">When searching by country, spelling must match one of the following EXACTLY:</li>
                </ul>
                <ul className="ErrorScreen-countries">
                    {this.props.countries.map(country => {
                        return (<li className="ErrorScreen-countries-country" key={country}>{country.replaceAll('+', '  ')}</li>);
                    })} 
                </ul>

            </div>
        )
    }
}

export default ErrorScreen;


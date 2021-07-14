import {React, Component} from 'react';
import "./FrontSearch.css";
import cloudyImg from './cloudy.png';
import Searchbox from './Searchbox'

class FrontSearch extends Component {


    render() {

        return(
            <div className="FrontSearch">
                <header className="FrontSearch-header">
                    <div className="FrontSearch-header-titlebox">
                        <h1 className="FrontSearch-title">International Weather Information</h1>
                        <img className="FrontSearch-cloudyImg" src={cloudyImg} />
                    </div>
                </header>
                
                <div className='FrontSearch-main'>
                    <form autocomplete="off" className="FrontSearch-formbox">
                        <div className="centering-ut">
                            <Searchbox history={this.props.history}/>
                            <label className="FrontSearch-directions" htmlFor="weather-search">
                                <p>Please enter one of the following:</p>
                                <ul className="FrontSearch-options">
                                    <li className="FrontSearch-options-option">
                                        <span className="FrontSearch-options-option-direction">City</span>
                                        <span className="FrontSearch-options-option-example">Paris</span>
                                    </li>
                                    <li className="FrontSearch-options-option">
                                        <span className="FrontSearch-options-option-direction">City, Country</span>
                                        <span className="FrontSearch-options-option-example">Kabul, Afghanistan</span>
                                    </li>
                                    <li className="FrontSearch-options-option">
                                        <span className="FrontSearch-options-option-direction">City, State<span className="us-only">(US Only)</span></span>
                                        <span className="FrontSearch-options-option-example">Long Beach, CA</span>
                                    </li>
                                    <li className="FrontSearch-options-option">
                                        <span className="FrontSearch-options-option-direction">5-digit Zip Code<span className="us-only">(US Only)</span></span>
                                        <span className="FrontSearch-options-option-example">20510</span>
                                    </li>
                                </ul>
                            </label>
                        </div>
                       
                    </form>
                    
                    
                </div>
            </div>
        )
    }
}

export default FrontSearch;
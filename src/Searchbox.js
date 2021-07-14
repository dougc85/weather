import { React, Component } from 'react';
import './Searchbox.css'

class Searchbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerms: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.cleanUpSearchTerms = this.cleanUpSearchTerms.bind(this);
    }

    handleChange(event) {
        this.setState({
            searchTerms: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let modifiedSearch = this.cleanUpSearchTerms(this.state.searchTerms);
        this.props.history.push(`/search/${modifiedSearch}`);
    }

    cleanUpSearchTerms(terms) {
        return terms.replaceAll(' ', '_').toLowerCase();
    }

    render() {
        return (
            <div className={this.props.little ? "Searchbox-little" : "Searchbox"}>
                <input className={this.props.little ? "Searchbox-input-little" : "Searchbox-input"} value={this.state.searchTerms} id="weather-search" type="text" placeholder="How is the weather in..." onChange={this.handleChange}></input>
                <button className={this.props.little ? "Searchbox-submit-little" : "Searchbox-submit"} onClick={this.handleSubmit}>Search</button>
            </div>
        )
    }
}

export default Searchbox;
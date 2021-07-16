import { React, Component } from 'react';
import './Header.css';
import cloudyImg from '../../images/cloudy.png';
import Searchbox from '../Searchbox/Searchbox';

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <div className="Header-titlebox">
                    <h1 className="Header-title">International Weather Information</h1>
                    <img className="Header-cloudyImg" src={cloudyImg} alt="icon"/>
                </div>
                {(this.props.searchbar === 'true') && (
                    <form autoComplete='off'>
                        <Searchbox little='true' history={this.props.history} setSearch={this.props.setSearch} getData={this.props.getData} />
                    </form>
                )}
            </header>
        )
    }
}

export default Header;
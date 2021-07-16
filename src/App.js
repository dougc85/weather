import './App.css';
import {React, Component} from 'react';
import {Route, Switch} from "react-router-dom";
import FrontSearch from "./components/FrontSearch/FrontSearch";
import MainPage from "./components/MainPage/MainPage";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userSearch: 'asdf',
    }

    this.setRootSearchState = this.setRootSearchState.bind(this);
  }

  setRootSearchState(searchTerms) {
    this.setState({
      userSearch: searchTerms,
    });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={routeProps => <FrontSearch {...routeProps} setSearch={this.setRootSearchState} />} />
          <Route exact path="/search/:terms" render={routeProps => <MainPage {...routeProps} setSearch={this.setRootSearchState} userSearch={this.state.userSearch} />} />
        </Switch>
      
      </div>
    );
  }
}

export default App;
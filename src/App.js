import './App.css';
import {React, Component} from 'react';
import {Route, Switch} from "react-router-dom";
import FrontSearch from "./FrontSearch";
import MainPage from "./MainPage";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={FrontSearch} />
          <Route exact path="/search/:terms" component={MainPage}/>
        </Switch>
      
      </div>
    );
  }
}

export default App;
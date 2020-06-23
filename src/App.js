import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import React, {Component} from 'react';
import { Header} from "./components/header/Header";
import Home from "./components/home/Home";
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { appStore } from "./store";
class App extends Component {
  render() {
    return (
        <Provider store={appStore()}>
            <Router>
             <Header/>
             <Switch>
                 <Route path="/home" exact>
                     <Home/>
                 </Route>
             </Switch>
            </Router>
        </Provider>
    );
  }
}

export default App;

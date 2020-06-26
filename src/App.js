import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { appStore } from "./store";
import { MoviesPage} from "./containers/MoviesPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

class App extends Component {
  render() {
    return (
        <Provider store={appStore()}>
            <MoviesPage/>
        </Provider>
    );
  }
}

export default App;

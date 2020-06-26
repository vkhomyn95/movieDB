import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import React from 'react';
import { Header} from "../components/header/Header";
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { appStore } from "../store";
import MoviesList from "../components/movies-list/MoviesList";


export function MoviesPage () {
    return (
        <Provider store={appStore()}>
            <Router>
                <Header/>
                <Switch>
                    <Route path="/" exact>
                        <MoviesList/>
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

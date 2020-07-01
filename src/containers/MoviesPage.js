import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import React from 'react';
import { Header} from "../components/header/Header";
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { appStore } from "../store";
import MoviesList from "../components/movies-list/MoviesList";
import {MovieDetailsPage} from "../components/movie-details-page/MovieDetailsPage";
import { DarkThemeContextWrapper} from "../context/wrappers/DarkThemeContextWrapper";
import {DetectViewPortWrapper} from "../context/wrappers/DetectViewPortWrapper";


export function MoviesPage () {
    return (
        <DarkThemeContextWrapper>
            <DetectViewPortWrapper>
                <Provider store={appStore()}>
                    <Router>
                        <Header/>
                        <Switch>
                            <Route path="/" exact>
                                <MoviesList/>
                            </Route>
                            <Route path="/movie/:id"
                                   render={(routerProps) => {
                                       return(<MovieDetailsPage {...routerProps}/>)
                                   }}/>
                        </Switch>
                    </Router>
                </Provider>
            </DetectViewPortWrapper>
        </DarkThemeContextWrapper>
    );
}

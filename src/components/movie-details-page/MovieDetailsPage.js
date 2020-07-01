import React, {useContext, useEffect, useState} from 'react';
import {API_KEY} from "../../constants";
import {MovieDetailCard} from "../movie-details-page-card/MovieDetailCard";
import './MovieDetailsPage.scss'
import {DarkThemeContext} from "../../context/DarkThemeContext";

export const MovieDetailsPage = (props) => {
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error,setError] = useState('');
    useEffect(() => {
        loadMovie()
        // eslint-disable-next-line
    },[props.match.params.id]);

    const loadMovie = async () => {
        const { match: { params: { id } } } = props;
        setIsLoading(true)
        let response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
        debugger
        if (response.ok) {
            let json = await response.json();
            setMovie(json);
            setIsLoading(false);
            setError('');

        } else {
            setIsLoading(false)
            setError('Cant find film')
        }
    };
    const darkTheme = useContext(DarkThemeContext);
    const {isDarkTheme} = darkTheme;
    return (
        <div className={`${!isDarkTheme ? 'movie-card-wrapper-dark' : 'movie-card-wrapper' }`}>
            {
                isLoading && (<div>Loading</div>)
            }
            {
                !isLoading && !error && (
                    <MovieDetailCard movie={movie} />
                )
            }
        </div>
    );
};

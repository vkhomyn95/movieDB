import React, {useEffect, useState} from 'react';
import {API_KEY} from "../../constants";
import {MovieDetailCard} from "../movie-details-page-card/MovieDetailCard";

export const MovieDetailsPage = (props) => {
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error,setError] = useState('');
    useEffect(() => {
        loadMovie()
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
    return (
        <div>
            {
                isLoading && (<div>Loading</div>)
            }
            {
                !isLoading && movie && (
                    <MovieDetailCard movie={movie} />
                )
            }
        </div>
    );
};

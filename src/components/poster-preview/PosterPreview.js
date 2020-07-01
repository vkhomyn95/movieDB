import React from 'react';
import {API_KEY} from "../../constants";

export const PosterPreview = (props) => {
    const { poster_path } = props;
    return (
        <img className="card-img-top" src={`https://image.tmdb.org/t/p/w300${poster_path}?api_key=${API_KEY}`} alt="poster" />
    );
};
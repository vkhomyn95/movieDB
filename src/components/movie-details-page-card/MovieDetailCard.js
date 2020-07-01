import React from 'react';
import './MovieDetailsCard.scss'
import {API_KEY} from "../../constants";
import {StarRating} from "../stars-rating/StarRating";

export const MovieDetailCard = (props) => {
    const {movie} = props;
    const {
           backdrop_path,
           // genres,
           homepage,
           original_language,
           // original_title,
           overview,
           poster_path,
           // production_countries,
           release_date,
           runtime,
           // spoken_languages,
           title,
           // status,
           // vote_count,
           vote_average } = movie;

    const urlBack = `https://image.tmdb.org/t/p/w300${backdrop_path}?api_key=${API_KEY}`;
    const backStyleImg = {
        background: `url(${urlBack})`
    };
    return (
            <div className="movie_card" >
                <div className="info_section">
                    <div className="movie_header">
                        <img className="locandina"
                             src={`https://image.tmdb.org/t/p/w300${poster_path}?api_key=${API_KEY}`}/>
                        <h1>{title}</h1>
                        <h4>{release_date}, David Ayer</h4>
                        <span className="minutes">{runtime} min</span>
                        {/*<p className="type">{genres.map(genre=> genre.name)}</p>*/}
                    </div>
                    <div className="movie_desc">
                        <p className="text">
                            {overview}
                        </p>
                    </div>
                    <div className="movie_social">
                        <ul>
                            <li><i className="material-icons">{original_language}</i></li>
                            {/*<li><i className="material-icons">Film's language: {spoken_languages.map(language => language.name)}</i></li>*/}
                            <li><i className="material-icons"> <a href={homepage}>Homepage</a></i></li>
                            <li><i className="material-icons"> <StarRating rating={vote_average}/></i></li>
                        </ul>
                    </div>
                </div>
                <div className="blur_back" style={backStyleImg}></div>
            </div>


    );
};
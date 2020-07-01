import React, {useContext} from 'react';
import { PosterPreview } from "../poster-preview/PosterPreview";
import {MoviePreviewInfo} from "../movie-preview/MoviePreviewInfo";
import {connect} from "react-redux";
import { GenreBadge } from "../genres/GenreBadge";
import {withRouter} from "react-router-dom";
import './MovieListCard.scss';
import {DarkThemeContext} from "../../context/DarkThemeContext";


export const MovieListCardComponent = (props) => {
    const goToPage = () => {
        const {history, movie: {id}} = props;
        history.push(`movie/${id}`);
    };

    const {movie, arr} = props;
    const darkTheme = useContext(DarkThemeContext);
    const {isDarkTheme} = darkTheme;

    return (

        <div className={`card ${!isDarkTheme && 'card-dark'}`} onClick={goToPage}>
            <PosterPreview poster_path={movie.poster_path} key={movie.id}/>
            <h4 className="card-title">{ movie.title } </h4>
            <GenreBadge genres={arr}/>
            <MoviePreviewInfo movieInfo={movie}/>
        </div>

    );
};
const mapDispathToProps = ({
});
const mapStateToProps = (store, props)=>{
    const {genreReducer: {genres}} = store;
    const {movie: {genre_ids}} = props;
    let arr = [];
    if (genre_ids){
        genre_ids.forEach(id => arr.push(genres.find(value=>value.id === id)));
    }
    return {
        genres: store.genreReducer,
        arr
    }
};
export const MovieListCard = connect(mapStateToProps, mapDispathToProps)(withRouter(MovieListCardComponent));
import React, {useEffect, useRef} from 'react';
import { PosterPreview } from "../poster-preview/PosterPreview";
import {MoviePreviewInfo} from "../movie-preview/MoviePreviewInfo";
import {connect} from "react-redux";
import { GenreBadge } from "../genres/GenreBadge";
import {withRouter} from "react-router-dom";


export const MovieListCardComponent = (props) => {
    const goToPage = () => {
        const {history, movie: {id}} = props;
        history.push(`movie/${id}`);
    };

    const {movie, arr} = props;


    return (
             <div className="col-sm-3" key={movie.id}>
                <div className="card" onClick={goToPage}>
                    <PosterPreview poster_path={movie.poster_path} key={movie.id}/>
                    <GenreBadge genres={arr}/>
                    <MoviePreviewInfo movieInfo={movie}/>
                </div>
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
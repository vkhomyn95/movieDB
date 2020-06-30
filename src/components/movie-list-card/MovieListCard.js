import React, {useEffect} from 'react';
import { PosterPreview } from "../poster-preview/PosterPreview";
import {MoviePreviewInfo} from "../movie-preview/MoviePreviewInfo";
import {connect} from "react-redux";
import { GenreBadge } from "../genres/GenreBadge";


export const MovieListCardComponent = (props) => {
    // useEffect(() => {
    //     const { movies, genres } = props;
    //     fetchGenresData()
        // if (!genres.length) {
        //     props.fetchGenresData && props.fetchGenresData();
        // }

    // }, []);
    // console.log(genres.genres)
    // let arr = [];
    // movies.forEach(id => console.log(id.genre_ids))
    // movies.forEach(id => arr.push(genres.genres.find(val => val.id === id)))
    // console.log(arr)
    // let arr =[]
    // const {movies: {genre_ids}} = props;
    // console.log(genre_ids)
    // if (genre_ids){
    //         genre_ids.forEach(id => arr.push(genres.genres.find(value=>value.id === id)));
    //     }
    // console.log(arr)
    //
    // console.log(genres)
    // debugger
    //
    // if (!movies) return null;
    const {movie, arr} = props;


    return (
             <div className="col-sm-3" key={movie.id}>
                    <div className="card">
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
export const MovieListCard = connect(mapStateToProps, mapDispathToProps)(MovieListCardComponent);
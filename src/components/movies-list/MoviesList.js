import React, {useEffect, useState} from 'react';
import { fetchData } from "../../actions/getMovies";
import { connect } from 'react-redux';
import { MovieListCard } from "../movie-list-card/MovieListCard";
import uniqueId from "uniqueid";
import {fetchGenresData} from "../../actions/getGenres";

const MoviesList = (props) => {
    const [id] = useState(uniqueId());
    useEffect(() => {
        const { movies, genres } = props;
        if (!movies.length) {
            props.fetchData && props.fetchData() && props.fetchGenresData();;
        }

    }, []);

    const { movies, genres } = props;
    return (
        <div className="container" >
            <div className="row">
            {
                movies.map(movie => (
                        <MovieListCard movie={movie} key={movie.id} />
                    ))
            }
            </div>
        </div>
    );
};

const mapStateToProps = (store) => {
    const { dataReducer, genreReducer } = store;
    debugger
    return {
        movies: dataReducer.movies,
        genres: genreReducer.genres
    };
};
const mapDispatchToProps = ({
    fetchData,
    fetchGenresData

});
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
import React, {useEffect, useState} from 'react';
import { fetchData } from "../../actions/getMovies";
import { connect } from 'react-redux';
import { MovieListCard } from "../movie-list-card/MovieListCard";
import uniqueId from "uniqueid";

const MoviesList = (props) => {
    const [id] = useState(uniqueId());
    useEffect(() => {
        const { movies } = props;
        if (!movies.length) {
            props.fetchData && props.fetchData();
        }
    }, []);

    // const getMoviesList = () => {
    //     const { movies } = props;
    //     console.log("====================");
    //     console.log("this props movies ", movies);
    //     return movies.data.map((movie, key) => {
    //         return <div key={key}>{movie.id}</div>
    //     })
    // };

    const { movies } = props;
    return (
        <div className="container" >
            {
                movies.data.map(movie => (
                        <MovieListCard movies={movie.results} key={id} />
                    ))
            }
        </div>
    );
};
const mapStateToProps = (store) => {
    return {
        movies: store.dataReducer
    };
};
const mapDispatchToProps = ({
    fetchData
});
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
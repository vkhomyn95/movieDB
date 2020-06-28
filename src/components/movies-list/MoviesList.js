import React, {useEffect, useState} from 'react';
import { fetchData } from "../../actions/getMovies";
import { connect } from 'react-redux';
import { MovieListCard } from "../movie-list-card/MovieListCard";
import uniqueId from "uniqueid";
import {fetchGenresData} from "../../actions/getGenres";
import {Pagination} from "../pagination/Pagination";

const MoviesList = (props) => {
    const {currentPage, totalResults} = props;
    const [page, setPage] = useState(currentPage);
    console.log(page,currentPage)
    useEffect(() => {
        const { movies, currentPage } = props;
        console.log(currentPage)
        if ((!movies.length) || currentPage) {
            props.fetchData && props.fetchData(page) && props.fetchGenresData();
        }
    }, [page]);

    const nextPage = (pageNumber) => {
        if (typeof(pageNumber)==='undefined') pageNumber = 1;
        setPage(pageNumber)
    };

    const { movies } = props;
    const numberPages = Math.floor(totalResults/ 20)
    return (
        <div className="container" >
            <div className="row">
            {
                movies.map(movie => (
                        <MovieListCard movie={movie} key={movie.id} />
                    ))
            }
            {
                 <Pagination pages={numberPages} nextPage={nextPage} currentPage={currentPage}/>
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
        currentPage: dataReducer.currentPage,
        totalResults: dataReducer.totalResults,
        genres: genreReducer.genres
    };
};
const mapDispatchToProps = ({
    fetchData,
    fetchGenresData

});
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
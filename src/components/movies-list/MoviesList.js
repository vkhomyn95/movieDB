import React, {useContext, useEffect, useState} from 'react';
import { fetchData } from "../../actions/getMovies";
import { connect } from 'react-redux';
import { MovieListCard } from "../movie-list-card/MovieListCard";
import {fetchGenresData} from "../../actions/getGenres";
import {Pagination} from "../pagination/Pagination";
import './MovieList.scss'
import {DarkThemeContext} from "../../context/DarkThemeContext";

const MoviesList = (props) => {
    const {currentPage, totalResults} = props;
    const [page, setPage] = useState(currentPage);
    const [getMvDataType, setMvData] = useState('now_playing');
    let getNavLinkClicked = document.getElementById('header-links-nav');
    useEffect(() => {
        const { movies, currentPage } = props;
        if ((!movies.length) || currentPage) {
            props.fetchData && props.fetchData(page, getMvDataType) && props.fetchGenresData();
        }
        // eslint-disable-next-line
    }, [page, getMvDataType]);

    if (getNavLinkClicked){
        getNavLinkClicked.addEventListener('click', function (e) {
            setMvData(e.target.id)
        })
    };

    const nextPage = (pageNumber) => {
        if (typeof(pageNumber)==='undefined') pageNumber = 1;
        setPage(pageNumber)
    };

    const { movies } = props;
    const darkTheme = useContext(DarkThemeContext);
    const {isDarkTheme} = darkTheme;
    const numberPages = Math.floor(totalResults/ 20);
    return (
            <div className={`${isDarkTheme ? 'container-wrapper-white' : 'container-wrapper-dark'}`}>
                <div className="container" >
                    <div className="card-columns">
                        {
                            movies.map(movie => (
                                <MovieListCard movie={movie} key={movie.id} />
                            ))
                        }
                    </div>
                    {
                        <Pagination  pages={numberPages} nextPage={nextPage} currentPage={currentPage}/>
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
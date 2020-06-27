import {
    ERROR_LOADING_POSTS,
    FETCHING_DATA,
    FETCHING_DATA_SUCCESS, GENRES_LOADED,
    POSTS_LOADED, START_POSTS_LOADING, STOP_POSTS_LOADING
} from "../action-type";
import { getPopularFilms } from "../api/getPopular";
import {getFilmGenres} from "../api/getMoviesGenre";
import {fetchGenresData} from "./getGenres";

export const fetchData = (genre) => {
    return (dispatch, getState) => {
        dispatch(startLoadingPosts());

        return fetch(getPopularFilms)
            .then(response => response.json())
            .then((data) => {
                console.log(dispatch, getState)
                debugger
                dispatch({
                    type: POSTS_LOADED,
                    payload: data.results,

                });
                // return fetch (getFilmGenres)
                //     .then(response => response.json())
                //     .then((dt) =>{
                //         console.log(dt)
                //         debugger
                //         dispatch ({
                //             type: GENRES_LOADED,
                //             payload: dt
                //         })
                //
                //     })

                dispatch(stopLoadingPosts());

            })
            .catch((error) => {
                dispatch({
                    type: ERROR_LOADING_POSTS,
                    payload: error
                })
            })



    }
};
export const startLoadingPosts = () => {
    return {
        type: START_POSTS_LOADING
    }
};

export const stopLoadingPosts = () => {
    return {
        type: STOP_POSTS_LOADING
    }
};
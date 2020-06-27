import {
    ERROR_LOADING_GENRES,
    ERROR_LOADING_POSTS,
    FETCHING_DATA,
    FETCHING_DATA_SUCCESS, GENRES_LOADED,
    POSTS_LOADED, START_GENRES_LOADING, START_POSTS_LOADING, STOP_GENRES_LOADING, STOP_POSTS_LOADING
} from "../action-type";
import { getFilmGenres} from "../api/getMoviesGenre";

export const fetchGenresData = (data) => {
    return (dispatch, getState) => {
        dispatch(startLoadingPosts());

        return fetch(getFilmGenres)
            .then(response => response.json())
            .then((data) => {
                console.log(dispatch, getState)
                debugger
                dispatch({
                    type: GENRES_LOADED,
                    payload: data.genres
                });
                dispatch(stopLoadingPosts());

            })
            .catch((error) => {
                dispatch({
                    type: ERROR_LOADING_GENRES,
                    payload: error
                })
            })
    }
};
export const startLoadingPosts = () => {
    return {
        type: START_GENRES_LOADING
    }
};

export const stopLoadingPosts = () => {
    return {
        type: STOP_GENRES_LOADING
    }
};
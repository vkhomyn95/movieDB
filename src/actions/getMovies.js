import {
    ERROR_LOADING_POSTS,
    POSTS_LOADED,
    START_POSTS_LOADING,
    STOP_POSTS_LOADING
} from "../action-type";
import { getPopularFilms } from "../api/getPopular";
import {API_KEY} from "../constants";

export const fetchData = (pageNumber, getMvDataType) => {
    if (typeof(pageNumber)==='undefined') pageNumber = 1;
    debugger
    return (dispatch, getState) => {
        dispatch(startLoadingPosts());
        return fetch(`https://api.themoviedb.org/3/movie/${getMvDataType}?api_key=${API_KEY}&language=en-US&page=${pageNumber}`)
            .then(response => response.json())
            .then((data) => {
                console.log(dispatch, getState)
                debugger
                dispatch({
                    type: POSTS_LOADED,
                    payload: [...data.results],
                    currentPage: pageNumber,
                    totalResults: data.total_results
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
import {
    POSTS_LOADED,
    START_POSTS_LOADING,
    STOP_POSTS_LOADING
} from '../action-type';
const initialState = {
    movies: [],
    currentPage: 1,
    totalResults: 0,
    isFetching: false,
    error: false
};

export const dataReducer = (store = initialState, action) => {
    debugger
    switch(action.type) {
        case POSTS_LOADED: {

            return {
                ...store,
                movies: action.payload,
                currentPage: action.currentPage,
                totalResults: action.totalResults
            }
        }
        case START_POSTS_LOADING: {
            return {
                ...store,
                isPostsLoading: true
            }
        }
        case STOP_POSTS_LOADING: {
            return {
                ...store,
                isPostsLoading: false
            }
        }
        default: return store;
    }
};
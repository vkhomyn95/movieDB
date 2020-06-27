import {
    POSTS_LOADED,
    START_POSTS_LOADING,
    STOP_POSTS_LOADING
} from '../action-type';
const initialState = {
    movies: [],
    isFetching: false,
    error: false
};

export const dataReducer = (store = initialState, action) => {
    debugger
    switch(action.type) {
        case POSTS_LOADED: {
            return {
                ...store,
                movies: action.payload
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
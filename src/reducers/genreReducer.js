import {
    GENRES_LOADED,
    START_GENRES_LOADING,
    STOP_GENRES_LOADING
} from '../action-type';
const initialState = {
    genres: [],
    isFetching: false,
    error: false
};

export const genreReducer = (store= initialState, action) => {
    debugger
    switch (action.type) {
        case GENRES_LOADED: {
            return {
                ...store,
                genres: action.payload,
            }
        }
        case START_GENRES_LOADING: {
            return {
                ...store,
                isPostsLoading: true
            }
        }
        case STOP_GENRES_LOADING: {
            return {
                ...store,
                isPostsLoading: false
            }
        }

        default: return store;
    }
};

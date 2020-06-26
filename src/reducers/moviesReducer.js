import { FETCHING_DATA_SUCCESS, FETCHING_DATA, FETCHING_DATA_FAIL } from '../action-type';
const initialState = {
    data: [],
    isFetching: false,
    error: false
};

export const dataReducer = (state= initialState, action) => {
    switch (action.type) {
        case FETCHING_DATA:
            return  {
                ...state,
                data: [],
                isFetching: true
            };
        case FETCHING_DATA_SUCCESS:
            return {
                ...state,
                data: action.data,
                isFetching: false
            };
        case FETCHING_DATA_FAIL:
            return {
                ...state,
                isFetching: false,
                error: true
        };
        default: return state;
    }
};

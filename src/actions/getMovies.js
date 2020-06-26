import { FETCHING_DATA, FETCHING_DATA_FAIL, FETCHING_DATA_SUCCESS } from "../action-type";
import getPopular from '../api/getPopular';
export const getData = () => {
    return {
        type: FETCHING_DATA
    }
};
export const getDataSuccess = data => {
    return {
        type: FETCHING_DATA_SUCCESS,
        data
    }
};
export const getMoviesFail = data => {
    return {
        type: FETCHING_DATA_FAIL,
    }
};

export const fetchData = () => {
    return (dispatch) => {
        dispatch(getData());
        getPopular()
            .then(([response, json]) =>{
                debugger
                dispatch(getDataSuccess([json]));
                console.log([json])
        })
        .catch((err) => console.error(err))
    }
};

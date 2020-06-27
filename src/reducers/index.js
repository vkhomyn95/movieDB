import { combineReducers } from 'redux';
import  { dataReducer }  from "./moviesReducer";
import {genreReducer} from "./genreReducer";

export default combineReducers({
    dataReducer,
    genreReducer
})
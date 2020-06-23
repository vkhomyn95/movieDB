import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducers from '../reducers';

export const appStore = () => {
    let store = createStore(reducers, applyMiddleware(thunk))
    return store
};
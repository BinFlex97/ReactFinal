import { applyMiddleware, combineReducers, createStore } from "redux";
import { QuanLyPhimReducer } from "./Reducer/QuanLyPhimReducer";
import {MovieReducer} from './Reducer/MovieReducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    QuanLyPhimReducer,
    MovieReducer,
    
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
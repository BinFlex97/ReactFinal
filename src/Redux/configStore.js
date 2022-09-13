import { applyMiddleware, combineReducers, createStore } from "redux";
import { QuanLyPhimReducer } from "./Reducer/QuanLyPhimReducer";
import {MovieReducer} from './Reducer/MovieReducer'
import thunk from 'redux-thunk';
import { QuanLyNguoiDungReducer } from "./Reducer/QuanLyNguoiDungReducer";

const rootReducer = combineReducers({
    QuanLyPhimReducer,
    MovieReducer,
    
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
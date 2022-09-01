import { applyMiddleware, combineReducers, createStore } from "redux";
import { HomeReducer } from "./Reducer/HomeReducer";
import { QuanLyPhimReducer } from "./Reducer/QuanLyPhimReducer";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    HomeReducer,
    QuanLyPhimReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
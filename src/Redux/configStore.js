import { applyMiddleware, combineReducers, createStore } from "redux";
import { HomeReducer } from "./Reducer/HomeReducer";
import { QuanLyPhimReducer } from "./Reducer/QuanLyPhimReducer";
import thunk from 'redux-thunk';
import { QuanLyNguoiDungReducer } from "./Reducer/QuanLyNguoiDungReducer";

const rootReducer = combineReducers({
    HomeReducer,
    QuanLyPhimReducer,
    QuanLyNguoiDungReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
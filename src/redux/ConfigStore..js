import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { QuanLyHTCRFilmReducer } from './reducer/QuanLyHTCRFlimReducer';

const rootReducers = combineReducers({
    //Khai báo các reducer
    //?object literal
    //?Khi tên thuộc tính trùng tên với biến thì rút gọn để 1 tên của thuộc tính
    QuanLyHTCRFilmReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
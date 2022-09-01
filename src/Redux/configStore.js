import {combineReducers, createStore} from "redux"
import { HomeReducer } from "./Reducer/HomeReducer";

const rootReducer = combineReducers({
    HomeReducer,
})

export const store = createStore(rootReducer);
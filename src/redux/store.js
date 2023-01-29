import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import feedbackReducer from "./slice/feedbackSlice"

const reducer = combineReducers({
     feedback : feedbackReducer
})

const store = configureStore({
    reducer
})

export default store
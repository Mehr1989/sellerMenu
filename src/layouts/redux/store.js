import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import sliceReducer from '../redux/slice/feedbackSlice'

const reducer = combineReducers({
     feedback : sliceReducer
})

const store = configureStore({
    reducer
})

export default store
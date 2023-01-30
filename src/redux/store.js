import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import feedbackReducer from "./slice/feedbackSlice"
import inventoryReducer from "./slice/inventorySlice"

const reducer = combineReducers({
     feedback : feedbackReducer,
     inventory: inventoryReducer
})

const store = configureStore({
    reducer
})

export default store
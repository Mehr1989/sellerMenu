import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



//Fetch Data:
const API_URL = "https://jsonplaceholder.typicode.com/comments";

export const fetchFeedback = createAsyncThunk("feedback/fetchFeddback", async() =>{
    const response = await axios.get(API_URL);
    return response.data;
})

  //Create Slice:

   const feedbackSlice = createSlice({
    name:"feedback",
    initialState:{
        isLoading:"false",
        feedback :[],
        error:null
    },
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(fetchFeedback.pending,(state) =>{
            state.isLoading = true;


        })
        builder.addCase(fetchFeedback.fulfilled,(state,action) =>{
            state.isLoading = false;
            state.feedback = action.payload

        })
        builder.addCase(fetchFeedback.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.error.message
        })

    }
  })

  export default feedbackSlice.reducer


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



//Fetch Data:
const API_URL = "https://jsonplaceholder.typicode.com/photos";

export const fetchInventory = createAsyncThunk("inventory/fetchInventory", async() =>{
    const response = await axios.get(API_URL);
    return response.data;
})

  //Create Slice:

   const inventorySlice = createSlice({
    name:"intory",
    initialState:{
        isLoading:"false",
        inventory :[],
        error:null
    },
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(fetchInventory.pending,(state) =>{
            state.isLoading = true;


        })
        builder.addCase(fetchInventory.fulfilled,(state,action) =>{
            state.isLoading = false;
            state.inventory = action.payload

        })
        builder.addCase(fetchInventory.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.error.message
        })

    }
  })

  export default inventorySlice.reducer


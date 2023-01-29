import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/comments";
export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    isLoading: false,
    posts: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(getAllPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});
export default postsSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosConfig/axiosInstance";

export const getAllPosts = createAsyncThunk(
  "posts/getAllPosts",
  async (_, thunkApi) => {
    const posts = await axiosInstance.get(`/posts`);

    return posts.data;
  }
);

export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (newPost, thunkApi) => {
    console.log(newPost);
    console.log("first");
    await axiosInstance.post(`/posts`, newPost);

    return newPost;
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (postID) => {
    await axiosInstance.delete(`/posts/${postID}`);

    return postID;
  }
);
export const editPost = createAsyncThunk("posts/editPost", async (post) => {
  await axiosInstance.delete(`/posts/${post.id}`, post);

  return post;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.data = action.payload;
    });

    builder.addCase(addNewPost.fulfilled, (state, action) => {
      state.data = [action.payload, ...state.data];
    });

    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    });
    builder.addCase(editPost.fulfilled, (state, action) => {
      state.data = state.data.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    });
  },
});

export default postsSlice.reducer;

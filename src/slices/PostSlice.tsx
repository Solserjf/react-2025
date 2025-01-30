import {IPost} from "../models/IPost.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../services/api.service.ts";

type PostSliceType = {
    posts: IPost[];
};
const initialStatePostSlice: PostSliceType = {posts: []};
const loadPosts = createAsyncThunk('loadPosts', async (_, thunkAPI) => {
   const posts = await getAll<IPost[]>('/posts');
   console.log(posts);
   return thunkAPI.fulfillWithValue(posts);
})


export const postSlice = createSlice({
    name: 'postSlice', // ім'я slice(зрізу)
    initialState: initialStatePostSlice, // початковий стан
    reducers: {}, // дії (тут обробляються синхронні операції)
    extraReducers: builder => builder.addCase(loadPosts.fulfilled, (state, action:PayloadAction<IPost[]>) => {
        state.posts = action.payload;
    } ) // тут обробляються асинхронні операції
});

export const postAction = {...postSlice.actions, loadPosts};
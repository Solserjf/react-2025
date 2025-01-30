import {configureStore, createAsyncThunk} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {userSlice} from "../slices/UserSlice.tsx";
import {postSlice} from "../slices/PostSlice.tsx";
import {commentSlice} from "../slices/CommentSlice.tsx";


const loadUsers = createAsyncThunk("loadUsers", async (_, thunkAPI) => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    return thunkAPI.fulfillWithValue(users);


});
const loadPosts = createAsyncThunk("loadPosts", async (_, thunkAPI) => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());

    thunkAPI.fulfillWithValue(posts);


});
const loadComments = createAsyncThunk("loadComments", async (_, thunkAPI) => {
    const comments = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    thunkAPI.fulfillWithValue(comments);

});

export const userActions = {
    ...userSlice.actions, loadUsers
}

export const postActions = {...postSlice.actions, loadPosts}
export const commentsActions = {...commentSlice.actions, loadComments}


export const store = configureStore({
    reducer: {
        userStoreSlice: userSlice.reducer,
        postStoreSlice: postSlice.reducer,
        commentStoreSlice: commentSlice.reducer,
    }
});


export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();//за доп. useSelector та useDispatch redux сам буде типізувати slice при зміні станів
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();//для типізації useSelector та useDispatch(при зміні станів slice зі store)
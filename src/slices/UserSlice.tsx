import {IUser} from "../models/IUser.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../services/api.service.ts";


type UserSliceType = {
    users: IUser[]
};
const initialStateUserSlice: UserSliceType = {users: []};
export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialStateUserSlice,
    reducers: {},
    extraReducers: builder => builder.addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
    state.users = action.payload; // якщо loadUsers закінчився fulfilled - то створюємо процес
})
});

export const loadUsers = createAsyncThunk("loadUsers", async (_, thunkAPI)=>{
const users = await getAll<IUser[]>('/users');
console.log(users);
return thunkAPI.fulfillWithValue(users);
});

export const userActions = {...userSlice.actions, loadUsers}


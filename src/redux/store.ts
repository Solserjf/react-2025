import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices UserSlice/userSlice.ts";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer
        // postSlice:null
    }
});

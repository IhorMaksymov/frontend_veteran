import { createSlice } from "@reduxjs/toolkit";

import { signup, login, logout } from "./authOperation";

const initialState = {
    user: { email: null },
    token: null,
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [signup.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [login.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logout.fulfilled](state) {
            state.user = { email: null };
            state.token = null;
            state.isLoggedIn = false;
        }
    }
})

export const authReducer = authSlice.reducer;
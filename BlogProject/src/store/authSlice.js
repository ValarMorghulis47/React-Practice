import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    isloggedin: false,
    userData: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.isloggedin= false;
            state.userData = null;
        },
        IsLoggedIn: (state, action) => {
            state.isloggedin= true
        }
     }
})

export const {login, logout, IsLoggedIn} = authSlice.actions;

export default authSlice.reducer;
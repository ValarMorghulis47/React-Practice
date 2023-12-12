import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postData: null,
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        postdata: (state, action) => {
            console.log("Dispatched Action Payload:", action.payload);
            state.postData = action.payload.postData;
        },
        dataclear: (state) => {
            state.postData = null;
        }
     }
})

export const {postdata, dataclear} = postSlice.actions;

export default postSlice.reducer;
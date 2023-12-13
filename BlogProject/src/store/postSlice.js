import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postData: null,
    AllPost: null,
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        postdata: (state, action) => {
            state.postData = action.payload.postData;
        },
        AllPost: (state, action)=>{
            state.AllPost = action.payload.AllPost;
        },
        dataclear: (state) => {
            state.postData = null;
            state.AllPost = null;
        }
     }
})

export const {postdata, dataclear, AllPost} = postSlice.actions;

export default postSlice.reducer;
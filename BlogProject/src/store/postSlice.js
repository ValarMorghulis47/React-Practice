import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postData: null,
    AllPost: null,
}

console.log("All Posts in the store after updating a post", initialState.AllPost)
const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        postdata: (state, action) => {
            console.log("Dispatched payload::", action.payload)
            state.postData = action.payload.postData;
        },
        AllPost: (state, action)=>{
            console.log("Dispatched payload::", action.payload)
            state.AllPost = action.payload.AllPost;
        },
        deletePost: (state, action) => {
            // Remove the deleted post from the state
            const postIdToDelete = action.payload.postId;
            state.AllPost = state.AllPost.filter(post => post.$id !== postIdToDelete);
            state.postData = state.postData.filter(post => post.$id !== postIdToDelete);
          },
        dataclear: (state) => {
            state.postData = null;
            state.AllPost = null;
        }
     }
})

export const {postdata, dataclear, AllPost, deletePost} = postSlice.actions;

export default postSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', title: 'Learning Redux Toolkit', content: 'I have heard good things'},
    {id: '2', title: 'Slice...', content: 'The more I say slice, the more I want peps'}
]

const PostsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        postAdded(state, action) {
            state.push(action.payload)
        }

    }
})

export const selectAllPosts = (state) => state.posts;

export const {postAdded} = PostsSlice.actions

export const { }= PostsSlice.actions

export default PostsSlice.reducer;
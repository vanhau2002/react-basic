import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice'

export const storePosts = configureStore({
    reducer: {
        posts: postsReducer
    }
})
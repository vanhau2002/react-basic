// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice'

// export const store = configureStore({
//     reducer: {
//         counter: counterReducer,
//     },
// })

import { configureStore } from "@reduxjs/toolkit";
import PostsReducer from '../features/posts/postsSlice'

export const store = configureStore({
    reducer: {
        posts: PostsReducer
    }
})
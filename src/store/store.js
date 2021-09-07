import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./postSlice";
import subredditSlice from "./subredditSlice";
import commentSlice from "./commentSlice";

const store = configureStore({
    reducer: {
        posts: postSlice,
        subReddits: subredditSlice,
        comments:commentSlice

    }
})
export default store;
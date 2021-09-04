import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./postSlice";
import subredditSlice from "./subredditSlice";

const store = configureStore({
    reducer: {
        posts: postSlice,
        subReddits: subredditSlice

    }
})
export default store;
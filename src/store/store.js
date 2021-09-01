import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./postSlice";

export default store = configureStore({
    reducer:{
        posts: postSlice
    }
})
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Reddit } from '../api/reddit';

export const getPosts = createAsyncThunk(
    'getPosts',
    async (arg) => {
        try {
            const data = await Reddit.posts(arg);
            return data;

        } catch (error) {
            console.log({ error })

        }
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        url: 'popular',
        posts: [],
        loading: false
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state, action) => { state.loading = true });
        builder.addCase(getPosts.fulfilled, (state, action) => { state.loading = false; state.posts = action.payload });
    }
});
export default postsSlice.reducer;

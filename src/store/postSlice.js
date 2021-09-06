import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Reddit } from '../api/reddit';

export const getPosts = createAsyncThunk(
    'getPosts',
    async (arg) => {
        try {
            const data = await Reddit.posts(arg);
            console.log(data)
            return data;

        } catch (error) {
            throw new Error(error)
        }
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        url: 'popular',
        posts: [],
        loading: false,
        error: false
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        setUrl: (state,action) => {
            state.url = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state, action) => { state.loading = true; state.error = false });
        builder.addCase(getPosts.fulfilled, (state, action) => { state.loading = false; state.posts = action.payload; state.error = false });
        builder.addCase(getPosts.rejected, (state, action) => {state.error = true; state.loading = false});
    }
});
export const {setUrl} = postsSlice.actions;
export default postsSlice.reducer;

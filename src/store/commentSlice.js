import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Reddit } from '../api/reddit';

export const getComments = createAsyncThunk(
    'getComments',
    async (arg) => {
        try {
            const data = await Reddit.Comments(arg);
            console.log(data)
            return data;

        } catch (error) {
            throw new Error(error)
        }
    }
)
const commentSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        loading: false,
        error: false
    },
    reducers:{
        setComments:(state, action) => {
            state.comments = action.payload;
        }
    },
    extraReducers:(builder) => {
        builder.addCase(getComments.pending, (state, action) => { state.loading = true; state.error = false });
        builder.addCase(getComments.fulfilled, (state, action) => { state.loading = false; state.comments = action.payload; state.error = false });
        builder.addCase(getComments.rejected, (state, action) => {state.error = true; state.loading = false});
    }

    
})
export const {setComments} = commentSlice.actions;
export default commentSlice.reducer;


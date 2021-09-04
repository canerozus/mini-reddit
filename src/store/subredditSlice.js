import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Reddit } from "../api/reddit";

export const getSubReddits = createAsyncThunk(
    'getSubReddits', 
    async(arg) =>{
        try {
            const data = await Reddit.subReddits(arg);
            return data;
        } catch (error) {
            console.log( { error });
        }
    }
) 
const subRedditsSlice = createSlice({
    name: 'subReddits',
    initialState: {
        subReddits: [],
        loading: false
    },
    reducers: {
        setsubReddits: (state, action) => {
            state.subReddits = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getSubReddits.pending, (state, action) => { state.loading = true });
        builder.addCase(getSubReddits.fulfilled, (state, action) => { state.loading = false; state.subReddits = action.payload });
    }
});
export default subRedditsSlice.reducer;
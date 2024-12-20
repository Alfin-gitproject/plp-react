import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name: 'count',
    initialState: {
        count: 55
    },
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        }
    }
})
export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer;



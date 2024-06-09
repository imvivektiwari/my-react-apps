import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

const trelloBoardSlice = createSlice({
    name: 'trelloBoard',
    initialState,
    reducers: {
        addCount: (state, action) => {
            state.count += action.payload;
        },
        decCount: (state, action) => {
            state.count -= action.payload;
        }
    }
});

export const trelloBoardAction = trelloBoardSlice.actions;
export const trelloBoardReducer = trelloBoardSlice.reducer;

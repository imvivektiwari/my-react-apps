import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [
        {
            name: 'Todo',
            items: []
        },
        {
            name: 'In Progress',
            items: []
        },
        {
            name: 'Done',
            items: []
        },
    ],
};

const trelloBoardSlice = createSlice({
    name: 'trelloBoard',
    initialState,
    reducers: {
        addCategory: (state, action)=>{
            state.categories.push(action.payload.name)
        },
        removeCategory: (state, action)=>{
            let index = state.categories.indexOf(action.payload.name);
            state.categories.splice(index, 1);
        }
    }
});

export const trelloBoardAction = trelloBoardSlice.actions;
export const trelloBoardReducer = trelloBoardSlice.reducer;

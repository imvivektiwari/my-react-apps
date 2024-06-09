import { configureStore } from "@reduxjs/toolkit";
import { trelloBoardReducer } from "../features/trelloBoard.slice";

const store = configureStore({
    reducer: {
        trelloBoard: trelloBoardReducer
    }
});

export default store;
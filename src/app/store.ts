import { configureStore } from "@reduxjs/toolkit";
import { trelloBoardReducer } from "../features/TrelloBoard/trelloBoard.slice";

const store = configureStore({
    reducer: {
        trelloBoard: trelloBoardReducer
    }
});

export default store;
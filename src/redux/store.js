import { configureStore } from "@reduxjs/toolkit";
import counterReduceer from "./counter";

export const store = configureStore({
    reducer: {
        counter: counterReduceer
    }
})
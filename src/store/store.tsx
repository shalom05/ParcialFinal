import { configureStore } from "@reduxjs/toolkit";
import { AllSlice } from "./slicesPoems/slice";

export const store = configureStore({
    reducer: {
        poems: AllSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
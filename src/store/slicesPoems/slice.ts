import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PoemApiResponseType } from "../../types/poems";
import { DEAFULT_STATE_POEM, POEM_SLICE_NAME } from "./constant";

export const  AllSlice = createSlice ({
    name: POEM_SLICE_NAME,

    initialState: {
        ...DEAFULT_STATE_POEM
    },
    reducers: {
        updatePoemData: (store, action: PayloadAction<PoemApiResponseType>) => {
            store.poemData = action.payload
        },
    }
})

export const { updatePoemData} = AllSlice.actions

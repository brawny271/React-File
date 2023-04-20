import {createReducer} from "@reduxjs/toolkit";


const initialState = {
c:0,
};

export const costomReducer = createReducer(initialState, {

    Increment: (state) => {
        state.c += 1 ;

    },

    IncrementBy: (state, action) => {
        state.c += action.paylode ;

    },

    Decrement: (state) => {
        state.c += 1 

    }
});
import {configureStore} from '@reduxjs/toolkit';
import { costomReducer } from './Reducers';

const store = configureStore({
    reducer:{
        costom: costomReducer
    }
});

export default store;
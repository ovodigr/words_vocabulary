import { combineReducers, configureStore } from '@reduxjs/toolkit';
import toolkitSlice from './WordsSlice';

const rootReducer = combineReducers({
    toolkit: toolkitSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];


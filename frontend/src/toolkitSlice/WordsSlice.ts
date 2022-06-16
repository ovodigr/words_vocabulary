import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IWord } from '../models/Iword';
import { IUser } from '../models/IUser';
import { initialState } from './initialState';

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.count = state.count + 1
        },
        setEditWordStatus: (state, action: PayloadAction<boolean>) => {
            state.canEditWord = action.payload
        },
        setEnWord(state, action: PayloadAction<string>) {
            state.word.en = action.payload;
        },
        setUaWord(state, action: PayloadAction<string>) {
            state.word.ua = action.payload;
        },

        wordsFetching(state) {
            state.isLoading = true;
        },

        wordsFetchingSuccess(state, action: PayloadAction<IWord[]>) {
            state.isLoading = false;
            state.error = '';
            state.ArrWords = action.payload;
        },
        wordsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },

        wordDelete(state) {
            state.isLoading = true;
        },

        wordDeleteSuccess(state, action: PayloadAction<IWord[]>) {
            state.isLoading = false;
            state.error = '';
        },
        wordDeleteError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        addWord(state) {
            state.isLoading = true;
        },
        addWordSuccess(state, action: PayloadAction<IWord[]>) {
            state.isLoading = false;
            state.error = '';
            state.word.en = '';
            state.word.ua = '';
        },
        addWordError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },

        getUserData(state) {
            state.isLoading = true;
        },
        getUserSuccess(state, action: PayloadAction<any>) {
            state.isLoading = false;
            state.error = '';
            state.userData = action.payload;
        },
        getUserError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
})

export default toolkitSlice.reducer;
export const {
    increment,
    //fetch words
    wordsFetching,
    wordsFetchingSuccess,
    wordsFetchingError,
    //delete word
    wordDelete,
    wordDeleteSuccess,
    wordDeleteError,
    //add word
    addWord,
    addWordSuccess,
    addWordError,

    //add word in buffer
    setEnWord,
    setUaWord,

    //can change word
    setEditWordStatus,

    //get User data

    getUserData,
    getUserSuccess,
    getUserError,

} = toolkitSlice.actions
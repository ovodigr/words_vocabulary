import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IWord, IChangeWord, IDeleteWord } from '../models/Iword';
import { initialState } from './initialState';

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState,
    reducers: {

        //add word in buffer
        setEditWordStatus: (state, action: PayloadAction<boolean>) => {
            state.canEditWord = action.payload
        },
        setEnWord(state, action: PayloadAction<string>) {
            state.word.en = action.payload;
        },
        setUaWord(state, action: PayloadAction<string>) {
            state.word.ua = action.payload;
        },

        //fetch words
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


        //delete word
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

        //show delete word popup
        showDeleteWordPopup(state, action: PayloadAction<IDeleteWord>) {
            state.arrDeleteWord = action.payload;
        },

        //show change word popup
        showChangeWordPopup(state, action: PayloadAction<IChangeWord>) {
            state.arrChangeWord = action.payload;
        },


        //add word
        addWordLoading(state) {
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


        //get User data
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


        //login 
        logining(state) {
            state.isLoading = true;
        },
        loginSuccess(state, action: PayloadAction<any>) {
            state.isLoading = false;
            state.error = '';
            state.userData = action.payload;
        },
        loginError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },

    },
})

export default toolkitSlice.reducer;
export const {
    //fetch words
    wordsFetching,
    wordsFetchingSuccess,
    wordsFetchingError,
    //delete word
    wordDelete,
    wordDeleteSuccess,
    wordDeleteError,
    //add word
    addWordLoading,
    addWordSuccess,
    addWordError,

    //show popup
    showDeleteWordPopup,

    //show change word popup
    showChangeWordPopup,

    //add word in buffer
    setEnWord,
    setUaWord,

    //can change word
    setEditWordStatus,

    //get User data
    getUserData,
    getUserSuccess,
    getUserError,

    //login 
    logining,
    loginSuccess,
    loginError,


} = toolkitSlice.actions
import { DataState } from '../models/initialState';

export const initialState: DataState = {
    isLoading: false,
    error: '',
    count: 0,
    ArrWords: [],
    word: {
        ua: '',
        en: '',
    },
    canEditWord: true,
    userData: []
}
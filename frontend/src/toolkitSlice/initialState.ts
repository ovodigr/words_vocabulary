import { DataState } from '../models/initialState';

export const initialState: DataState = {
    isLoading: false,
    error: '',
    count: 0,
    ArrWords: [],
    word: {
        ua: '',
        en: '',
        userId: '',
        transcription: '',
        sound: '',
        date: '',
    },
    canEditWord: true,
    userData: {
        'id': '',
        'username': '',
        'photo': '',
    }
}
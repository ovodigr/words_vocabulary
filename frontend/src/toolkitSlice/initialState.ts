import { DataState } from '../models/initialState';

export const initialState: DataState = {
    isLoading: false,
    error: '',
    count: 0,
    ArrWords: [],
    word: {
        ua: '',
        en: '',
        userId: '1',
        transcription: '',
        sound: '',
        date: '',
    },
    canEditWord: true,

    arrDeleteWord: {
        showDeleteWordPopup: false,
        id: '',
        userId: '',
    },

    arrChangeWord: {
        showChangeWordPopup: false,
        id: '',
        ua: '',
        en: '',
        userId: '',
    },

    userData: {
        'id': '',
        'username': '',
        'photo': '',
    }
}
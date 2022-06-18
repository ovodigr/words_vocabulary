import { AppDispatch } from ".."
import axios from "api/axios";
import { IPost } from "models/Iword";
import { addWordLoading, addWordSuccess, addWordError } from "../WordsSlice";
import { API_URL } from 'config';
import { fetchWords } from "./FetchWords";
import { useAppDispatch } from "hooks/redux";


export const AddWord = (
    en: string,
    ua: string,
    userId: string,
    transcription: string,
    sound: string,
    date: string,

) => async (dispatch: AppDispatch) => {

    try {
        dispatch(addWordLoading());

        const timeElapsed: number = Date.now();
        const date: Date = new Date(timeElapsed);
        date.toISOString();

        let res = await axios.post<IPost[]>(
            API_URL.ADD_WORD,
            {
                en: en,
                ua: ua,
                userId: userId,
                transcription: '',
                sound: '',
                date: date,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });

        dispatch(addWordSuccess(res.data));
        dispatch(fetchWords(userId));
    } catch (e: any) {

        dispatch(addWordError(e.message));
    }
}
import { AppDispatch } from ".."
import axios from "api/axios";
import { IPost } from "models/Iword";
import { changeWordLoading, changeWordSuccess, changeWordError } from "../WordsSlice";
import { API_URL } from 'config';
import { fetchWords } from "./FetchWords";

export const ChangeWord = (
    en: string,
    ua: string,
    id: string,
    userId: string,
    transcription: string,
    sound: string,
    date: string,

) => async (dispatch: AppDispatch) => {

    try {
        dispatch(changeWordLoading());

        const timeElapsed: number = Date.now();
        const date: Date = new Date(timeElapsed);
        date.toISOString();

        let res = await axios.post<IPost[]>(
            API_URL.CHANGE_WORD,
            {
                en: en,
                ua: ua,
                _id: id,
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

        dispatch(changeWordSuccess(res.data));
        dispatch(fetchWords(userId));
    } catch (e: any) {

        dispatch(changeWordError(e.message));
    }
}
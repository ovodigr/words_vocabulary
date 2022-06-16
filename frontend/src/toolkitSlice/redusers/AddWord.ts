import { AppDispatch } from ".."
import axios from "api/axios";
import { IPost } from "models/Iword";
import { addWord, addWordSuccess, addWordError } from "../WordsSlice";
import { API_URL } from 'config';
import { fetchWords } from "./FetchWords";

export const AddWord = (en: string, ua: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(addWord());

        let res = await axios.post<IPost[]>(
            API_URL.ADD_WORD,
            {
                en: en,
                ua: ua
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });

        dispatch(addWordSuccess(res.data));
        dispatch(fetchWords());
    } catch (e: any) {

        dispatch(addWordError(e.message));
    }
}
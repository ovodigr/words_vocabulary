import { AppDispatch } from ".."
import axios from "../../api/axios";
import { IWord } from "../../models/Iword";
import { wordsFetching, wordsFetchingSuccess, wordsFetchingError } from "../WordsSlice";
import { API_URL } from '../../config';

export const fetchWords = (userId: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(wordsFetching());
        // let res = await axios.get<IWord[]>(API_URL.GET_ALL + userId);

        let res = await axios.post<IWord[]>(
            API_URL.GET_ALL,
            {
                userId: userId,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });


        dispatch(wordsFetchingSuccess(res.data));
    } catch (e: any) {
        dispatch(wordsFetchingError(e.message));
    }
}
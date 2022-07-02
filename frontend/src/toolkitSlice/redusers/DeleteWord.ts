import { AppDispatch } from ".."
import axios from "../../api/axios";
import { IWord } from "../../models/Iword";
import { wordDelete, wordDeleteSuccess, wordDeleteError } from "../WordsSlice";
import { API_URL } from '../../config';
import { fetchWords } from "./FetchWords";


export const DeleteWord = (userId: string, id: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(wordDelete());
        let res = await axios.delete<IWord[]>(API_URL.DELETE + id);
        // dispatch(fetchWords());
        dispatch(wordDeleteSuccess(res.data));
        dispatch(fetchWords(userId));

    } catch (e: any) {
        dispatch(wordDeleteError(e.message));
    }
}
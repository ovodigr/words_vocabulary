import { IWord, Word } from './Iword';

import { IPerson } from './IUser';

export interface DataState {
    isLoading: boolean;
    error: string;
    count: number;
    ArrWords: IWord[];
    word: Word;
    canEditWord: boolean,
    userData: IPerson,
}


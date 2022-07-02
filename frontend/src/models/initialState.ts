import { IWord, Word, IDeleteWord, IChangeWord } from './Iword';

import { IPerson } from './IUser';

export interface DataState {
    isLoading: boolean,
    error: string;
    count: number;
    ArrWords: IWord[];
    word: Word;

    arrDeleteWord: IDeleteWord,

    arrChangeWord: IChangeWord,

    canEditWord: boolean,

    userData: IPerson,
}


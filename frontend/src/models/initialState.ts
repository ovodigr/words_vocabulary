import { IWord, Word, IDeleteWord, IChangeWord, ChangeWord } from './Iword';

import { IPerson } from './IUser';

export interface DataState {
    isLoading: boolean,
    error: string;
    count: number;
    ArrWords: IWord[];
    word: Word;

    changeWord: ChangeWord,

    arrDeleteWord: IDeleteWord,

    arrChangeWord: IChangeWord,

    canEditWord: boolean,

    userData: IPerson,
}


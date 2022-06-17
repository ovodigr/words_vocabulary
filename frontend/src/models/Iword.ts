// import { IUser } from './IUser';

export interface IWord {
    ua: string;
    en: string;
    _id: string;
}

export type Word = {
    ua: string;
    en: string;
    userId: string;
    transcription: string;
    sound: string;
    date: string;
}

export type IPost = {
    ua: string;
    en: string;
    _id: string;
    userId: string;
    transcription: string;
    sound: string;
    date: string;
}


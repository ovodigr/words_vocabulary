
export type IUserData = {
    user: IUser;
}

export type IUser = {
    displayName: string;
    id: string;
    username?: string;
    photos: IPhoto[];
}

export type IPhoto = {
    value: string;
}


export type IPerson = {
    id: string;
    username: string;
    photo: string;
}
import { AppDispatch } from "../../index"
import axios from "api/axios";
import { IPerson, IUserData } from "models/IUser";
import { getUserData, getUserSuccess, getUserError } from "../../WordsSlice";

import { PASSPORT, USER_ID_DEFAULT, USER_PHOTO_DEFAULT, USER_NAME_DEFAULT } from 'config';

export const GetUser = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(getUserData());

        let res = await axios.get<IUserData>(PASSPORT.LOGIN_SUCCESS, {
            // withCredentials: true,
            headers:
            {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': true,
            }
        });

        let name: string = USER_NAME_DEFAULT;
        let id = USER_ID_DEFAULT;
        let photo = USER_PHOTO_DEFAULT;

        if (res.data.user !== undefined) {
            if (res.data.user.displayName != null) {
                name = res.data.user.displayName;
            }
            else if (res.data.user.username !== undefined)
                name = res.data.user.username;

            if (res.data.user.id !== undefined)
                id = res.data.user.id;

            if (res.data.user.photos[0] !== undefined)
                photo = res.data.user.photos[0].value
        }

        let person: IPerson = {
            id: id,
            username: name,
            photo: photo,
        };

        console.log(person);

        dispatch(getUserSuccess(person));
    } catch (e: any) {
        dispatch(getUserError(e.message));
    }
}


